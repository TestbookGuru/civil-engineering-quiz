import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameView, ActiveQuestion, AnswerRecord, UserProfile, SessionScoreRecord } from './types';
import { getRandomQuestions, shuffleArray } from './data/questions';
import { sound } from './utils/sound';
import { FloatingWorld } from './components/FloatingWorld';
import { ReadyOverlay } from './components/ReadyOverlay';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { CompleteScreen } from './components/CompleteScreen';
import { SignupModal } from './components/SignupModal';
import { ResultsScreen } from './components/ResultsScreen';
import { ReviewModal } from './components/ReviewModal';

export default function App() {
  const [view, setView] = useState<GameView>('start');
  const [questions, setQuestions] = useState<ActiveQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(50);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([]);

  // Ready overlay countdown
  const [isReadyActive, setIsReadyActive] = useState<boolean>(false);
  const [readyNumber, setReadyNumber] = useState<string>('3');

  // Lead / student profile modal
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('civil_quiz_user_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          name: parsed.name || '',
          phone: parsed.phone || '',
          email: parsed.email || '',
          targetExam: parsed.targetExam || 'RRB JE / SSC JE',
        };
      }
    } catch {}
    return { name: '', phone: '', email: '', targetExam: 'RRB JE / SSC JE' };
  });

  // Review modal
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  // Stats & Session History
  const [bestScore, setBestScore] = useState<number>(() => {
    return Number(localStorage.getItem('civil_quiz_best_score') || 0);
  });
  const [totalGames, setTotalGames] = useState<number>(() => {
    return Number(localStorage.getItem('civil_quiz_total_games') || 0);
  });
  const [sessionHistory, setSessionHistory] = useState<SessionScoreRecord[]>(() => {
    try {
      const saved = localStorage.getItem('civil_quiz_sessions_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Remove duplicate entries (e.g. repeated runs with same label or duplicate IDs)
          const seenLabels = new Set<string>();
          const cleaned: SessionScoreRecord[] = [];
          parsed.forEach((item) => {
            if (!item || typeof item.score !== 'number') return;
            cleaned.push(item);
          });
          // Re-normalize sequentially so labels are strictly unique: Run 1, Run 2, Run 3...
          const normalized = cleaned.map((item, index) => ({
            ...item,
            sessionNumber: index + 1,
            label: `Run ${index + 1}`,
          }));
          return normalized;
        }
      }
    } catch {}
    return [];
  });

  // Parallax
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Celebration state
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  // Refs for timers & score synchronization
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const isGameFinishedRef = useRef<boolean>(false);
  const scoreRef = useRef<number>(0);

  // Mouse Parallax listener
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: x * 32, y: y * 24 });
  };

  const handlePointerLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  // Clear timer helper
  const clearQuizTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // End game handler
  const finishGame = useCallback(
    (timeExpired: boolean = false) => {
      // Guard against double completion calls
      if (isGameFinishedRef.current) return;
      isGameFinishedRef.current = true;

      clearQuizTimer();
      setIsTimeUp(timeExpired);
      setView('complete');

      const finalScore = scoreRef.current;

      // Update total games count
      setTotalGames((prev) => {
        const next = prev + 1;
        try {
          localStorage.setItem('civil_quiz_total_games', String(next));
        } catch {}
        return next;
      });

      // Append cleanly to session history with strictly unique incremented run number
      setSessionHistory((prevHist) => {
        const nextRunNum = prevHist.length + 1;
        const newRecord: SessionScoreRecord = {
          id: `${Date.now()}_run_${nextRunNum}`,
          sessionNumber: nextRunNum,
          label: `Run ${nextRunNum}`,
          date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          score: finalScore,
          total: 10,
          percentage: Math.round((finalScore / 10) * 100),
        };

        const updated = [...prevHist, newRecord];
        try {
          localStorage.setItem('civil_quiz_sessions_history', JSON.stringify(updated.slice(-25)));
        } catch {}
        return updated;
      });

      setBestScore((prev) => {
        const nextBest = Math.max(prev, finalScore);
        try {
          localStorage.setItem('civil_quiz_best_score', String(nextBest));
        } catch {}
        return nextBest;
      });

      if (timeExpired) {
        sound.timerWarning();
      } else {
        sound.successSound();
      }
    },
    []
  );

  // Start the 50s Quiz Timer
  const startTimer = useCallback(() => {
    clearQuizTimer();
    setTimeLeft(50);

    timerIntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearQuizTimer();
          finishGame(true);
          return 0;
        }
        if (prev <= 10 && prev > 1) {
          sound.timerWarning();
        }
        return prev - 1;
      });
    }, 1000);
  }, [finishGame]);

  // Start the Quiz Flow
  const startQuiz = (category: string) => {
    clearQuizTimer();
    isGameFinishedRef.current = false;
    const pickedQuestions = getRandomQuestions(10, category);

    const activeList: ActiveQuestion[] = pickedQuestions.map((q) => {
      const optionsWithStatus = q.o.map((text, idx) => ({
        text,
        originalIndex: idx,
        correct: idx === q.a,
      }));
      return {
        q: q.q,
        category: q.category,
        explanation: q.explanation,
        options: shuffleArray(optionsWithStatus),
      };
    });

    setQuestions(activeList);
    setCurrentIdx(0);
    setScore(0);
    scoreRef.current = 0;
    setSelectedAnswerIdx(null);
    setIsTimeUp(false);
    setAnswerRecords([]);
    setShowCelebration(false);
    setView('quiz');

    // Run 3-2-1-GO sequence
    runCountdown();
  };

  const runCountdown = () => {
    setIsReadyActive(true);
    setReadyNumber('3');
    sound.countdownTick();

    const sequence = ['2', '1', 'GO!'];
    let step = 0;

    const interval = setInterval(() => {
      if (step < sequence.length) {
        const val = sequence[step];
        setReadyNumber(val);
        if (val === 'GO!') {
          sound.countdownGo();
        } else {
          sound.countdownTick();
        }
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsReadyActive(false);
          startTimer();
        }, 500);
      }
    }, 750);
  };

  // Answer selection
  const handleSelectAnswer = useCallback(
    (optionIndex: number) => {
      if (isTransitioningRef.current || view !== 'quiz' || isReadyActive) return;
      if (currentIdx >= questions.length) return;

      isTransitioningRef.current = true;
      setSelectedAnswerIdx(optionIndex);
      sound.answerClick();

      const currentQ = questions[currentIdx];
      const selectedOpt = currentQ.options[optionIndex];
      const isCorrect = selectedOpt ? selectedOpt.correct : false;

      const correctIndex = currentQ.options.findIndex((o) => o.correct);

      if (isCorrect) {
        scoreRef.current += 1;
        const newScore = scoreRef.current;
        setScore(newScore);
        setBestScore((b) => Math.max(b, newScore));
      }

      const record: AnswerRecord = {
        question: currentQ.q,
        category: currentQ.category,
        options: currentQ.options,
        selectedIndex: optionIndex,
        correctIndex,
        isCorrect,
        explanation: currentQ.explanation,
      };

      setAnswerRecords((prev) => [...prev, record]);

      setTimeout(() => {
        setSelectedAnswerIdx(null);
        isTransitioningRef.current = false;

        if (currentIdx + 1 >= questions.length) {
          finishGame(false);
        } else {
          setCurrentIdx((prev) => prev + 1);
        }
      }, 190);
    },
    [currentIdx, finishGame, isReadyActive, questions, view]
  );

  // Keyboard controls: 1, 2, 3, 4
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (view === 'quiz') {
        const keyNum = Number(e.key);
        if (keyNum >= 1 && keyNum <= 4) {
          handleSelectAnswer(keyNum - 1);
        }
      } else if (view === 'start') {
        if (e.code === 'Space' || e.key === 'Enter') {
          startQuiz('All Topics');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, handleSelectAnswer]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearQuizTimer();
  }, []);

  // Score unlock flow - always prompt signup modal to unlock scorecard
  const handleOpenScoreModal = () => {
    setIsSignupOpen(true);
  };

  const handleProfileSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    try {
      localStorage.setItem('civil_quiz_user_profile', JSON.stringify(profile));
    } catch {}
    setIsSignupOpen(false);
    showFinalResults();
  };

  const showFinalResults = () => {
    setView('results');
    if (score >= 7) {
      sound.victoryFanfare();
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
    }, 4500);
  };

  const handleRetry = () => {
    clearQuizTimer();
    setView('start');
  };

  return (
    <div
      className="game-shell w-screen h-screen min-h-screen overflow-hidden select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Dynamic Floating Visual World with Crane, Bridge, Excavator, Compass, etc. */}
      <FloatingWorld parallaxX={parallax.x} parallaxY={parallax.y} view={view} />

      {/* VIEW 1: START SCREEN */}
      {view === 'start' && (
        <StartScreen
          onStart={startQuiz}
          bestScore={bestScore}
          totalGames={totalGames}
        />
      )}

      {/* VIEW 2: QUIZ SCREEN */}
      {view === 'quiz' && questions.length > 0 && currentIdx < questions.length && (
        <QuizScreen
          currentQuestion={questions[currentIdx]}
          currentIndex={currentIdx}
          totalQuestions={questions.length}
          timeLeft={timeLeft}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswerIndex={selectedAnswerIdx}
        />
      )}

      {/* READY COUNTDOWN 3-2-1-GO */}
      <ReadyOverlay number={readyNumber} isVisible={isReadyActive} />

      {/* VIEW 3: CHALLENGE COMPLETE SCREEN */}
      {view === 'complete' && (
        <CompleteScreen
          isTimeUp={isTimeUp}
          onOpenScore={handleOpenScoreModal}
        />
      )}

      {/* SIGNUP / UNLOCK MODAL */}
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSubmit={handleProfileSubmit}
        initialProfile={userProfile}
      />

      {/* VIEW 4: RESULTS SCREEN */}
      {view === 'results' && (
        <ResultsScreen
          score={score}
          totalQuestions={questions.length || 10}
          userProfile={userProfile}
          answerRecords={answerRecords}
          sessionHistory={sessionHistory}
          onRetry={handleRetry}
          onOpenReview={() => setIsReviewOpen(true)}
        />
      )}

      {/* ANSWER REVIEW MODAL */}
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        records={answerRecords}
      />

      {/* CELEBRATION SHOCKWAVE & CONFETTI */}
      {showCelebration && (
        <div className="celebration active">
          <div className="burst" />
          {Array.from({ length: 70 }).map((_, i) => {
            const colors = ['#20e7ff', '#ffd43b', '#ff8a1f', '#35e58b', '#ff435d'];
            const bg = colors[i % colors.length];
            const left = `${Math.random() * 100}%`;
            const duration = `${2 + Math.random() * 2.5}s`;
            const delay = `${Math.random() * 0.7}s`;
            return (
              <span
                key={i}
                className="confetti-piece"
                style={{
                  left,
                  backgroundColor: bg,
                  animationDuration: duration,
                  animationDelay: delay,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
