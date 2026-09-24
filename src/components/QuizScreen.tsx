import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { ActiveQuestion } from '../types';

interface QuizScreenProps {
  currentQuestion: ActiveQuestion;
  currentIndex: number;
  totalQuestions: number;
  timeLeft: number;
  onSelectAnswer: (index: number) => void;
  selectedAnswerIndex: number | null;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  timeLeft,
  onSelectAnswer,
  selectedAnswerIndex,
}) => {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((prev) => prev + 1);
  }, [currentIndex]);

  const timerWarningClass = timeLeft <= 5 ? 'danger' : timeLeft <= 15 ? 'warning' : '';

  return (
    <section className="view quiz-screen active flex items-center justify-center min-h-screen w-full p-2 sm:p-4 z-20">
      <div className="quiz-hud w-full max-w-[1120px] max-h-[94vh] flex flex-col">
        {/* TOP HUD BAR */}
        <div className="hud-top">
          <div className="hud-brand">
            <span className="brand-mark" />
            <span className="tracking-widest font-black">QUICK FIRE</span>
          </div>

          {/* Progress Segments */}
          <div className="progress-wrap" id="progressWrap">
            {Array.from({ length: totalQuestions }).map((_, idx) => {
              const isDone = idx < currentIndex;
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`progress-segment ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}
                />
              );
            })}
          </div>

          {/* Right Timer Box */}
          <div className="flex items-center gap-2 justify-self-end">
            <div
              key={animKey}
              className={`timer-box ${timerWarningClass}`}
              id="timerBox"
            >
              <div className="timer-label">TIME LEFT</div>
              <div className="timer-number flex items-center justify-center gap-1" id="timerNumber">
                {timeLeft <= 5 && <AlertTriangle className="w-4 h-4 text-[#ff435d] animate-pulse inline" />}
                {timeLeft}s
              </div>
            </div>
          </div>
        </div>

        {/* QUESTION PANEL */}
        <div className="question-panel relative my-auto">
          <span className="corner tl" />
          <span className="corner br" />

          <div className="question-meta">
            <div className="question-number text-[#ffd43b] text-xs sm:text-sm font-black tracking-widest" id="questionNumber">
              QUESTION {String(currentIndex + 1).padStart(2, '0')}
            </div>

            <div className="question-tag uppercase text-[9px] sm:text-[10px] tracking-wider px-2 py-0.5 border border-[#20e7ff]/40 text-[#77e8f6] font-extrabold rounded-xs">
              {currentQuestion.category || 'CIVIL ENGINEERING'}
            </div>
          </div>

          <div className="question-text text-white font-extrabold tracking-tight mt-1 mb-2" id="questionText">
            {currentQuestion.q}
          </div>

          {/* ANSWERS GRID */}
          <div className="answers grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6" id="answers">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswerIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectAnswer(idx)}
                  disabled={selectedAnswerIndex !== null}
                  className={`answer-btn cursor-pointer select-none text-left ${
                    isSelected ? 'selected' : ''
                  }`}
                >
                  <span className="answer-key">{idx + 1}</span>
                  <span className="answer-text">{option.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* HUD FOOTER */}
        <div className="quiz-footer flex justify-end">
          <div className="question-counter font-black" id="questionCounter">
            QUESTION {currentIndex + 1} / {totalQuestions}
          </div>
        </div>
      </div>
    </section>
  );
};
