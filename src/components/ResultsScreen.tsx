import React, { useState, useEffect, useMemo } from 'react';
import {
  ExternalLink,
  RotateCcw,
  CheckSquare,
  Sparkles,
  TrendingUp,
  Award,
  Activity,
  FileText,
  Lock,
  Unlock,
  Layers,
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import { AnswerRecord, UserProfile, SessionScoreRecord } from '../types';
import { sound } from '../utils/sound';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  userProfile: UserProfile;
  answerRecords: AnswerRecord[];
  sessionHistory: SessionScoreRecord[];
  isUnlocked: boolean;
  onUnlockRequest: () => void;
  onRetry: () => void;
  onOpenReview: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalQuestions,
  userProfile: _userProfile,
  answerRecords: _answerRecords,
  sessionHistory,
  isUnlocked,
  onUnlockRequest,
  onRetry,
  onOpenReview,
}) => {
  const [rating, setRating] = useState<number>(() => {
    const saved = localStorage.getItem('civil_quiz_user_rating');
    return saved ? Number(saved) : 5;
  });
  const [hasRated, setHasRated] = useState<boolean>(false);

  const targetPercent = Math.round((score / totalQuestions) * 100);

  // Animated count-up states initialized with actual score so background scorecard is bright & loaded
  const [displayScore, setDisplayScore] = useState<number>(score);
  const [displayPercent, setDisplayPercent] = useState<number>(targetPercent);

  // Animate numbers celebratory count-up when unlocked
  useEffect(() => {
    if (!isUnlocked) {
      setDisplayScore(score);
      setDisplayPercent(targetPercent);
      return;
    }

    const duration = 1000; // ms
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setDisplayScore(Math.round(ease * score));
      setDisplayPercent(Math.round(ease * targetPercent));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayScore(score);
        setDisplayPercent(targetPercent);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isUnlocked, score, targetPercent]);

  // Positive messaging (never negative)
  let title = 'GREAT JOB!';
  let message = 'Strong performance across Civil Engineering core concepts!';

  if (score >= 9) {
    title = 'OUTSTANDING RUN!';
    message = 'Mastery level speed and accuracy across all Civil Engineering disciplines!';
  } else if (score >= 7) {
    title = 'GREAT JOB!';
    message = 'Solid engineering reasoning and high-speed accuracy!';
  } else if (score >= 5) {
    title = 'GOOD EFFORT!';
    message = 'A solid attempt. Revise key formulas and run another Quick Fire sprint!';
  } else {
    title = 'KEEP BUILDING!';
    message = 'Every attempt sharpens your speed. Review the notes below and try again!';
  }

  const handleStarClick = (rateVal: number) => {
    setRating(rateVal);
    setHasRated(true);
    localStorage.setItem('civil_quiz_user_rating', String(rateVal));
    sound.playBeep(650, 0.08, 'sine', 0.2);
  };

  // Prepare Deduplicated & Sequenced Last 5 Sessions Data for the Line Chart
  const cleanedHistory = useMemo(() => {
    if (!sessionHistory || sessionHistory.length === 0) return [];
    const list: typeof sessionHistory = [];
    const seenIds = new Set<string>();

    sessionHistory.forEach((item) => {
      if (!item || typeof item.score !== 'number') return;
      if (item.id && seenIds.has(item.id)) return;
      if (item.id) seenIds.add(item.id);

      const prev = list[list.length - 1];
      if (prev && prev.date === item.date && prev.score === item.score && prev.percentage === item.percentage) {
        return;
      }
      list.push(item);
    });

    return list;
  }, [sessionHistory]);

  const totalRuns = cleanedHistory.length;
  const last5Raw = useMemo(() => cleanedHistory.slice(-5), [cleanedHistory]);

  const chartData = useMemo(() => {
    if (last5Raw.length === 0) {
      return [
        {
          label: 'Run 1',
          shortLabel: 'R1',
          score: score,
          total: totalQuestions,
          percentage: targetPercent,
          date: 'Current Attempt',
        },
      ];
    }

    const startRunNum = Math.max(1, totalRuns - last5Raw.length + 1);

    return last5Raw.map((item, index) => {
      const runNumber = startRunNum + index;
      return {
        ...item,
        label: `Run ${runNumber}`,
        shortLabel: `R${runNumber}`,
      };
    });
  }, [last5Raw, totalRuns, score, totalQuestions, targetPercent, isUnlocked]);

  // Circular progress math (radius: 54, circum: ~339.3)
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayPercent / 100) * circumference;

  return (
    <section className="view results-screen active flex items-center justify-center min-h-screen p-2 sm:p-4 z-20 overflow-y-auto">
      <div className="results-layout w-full max-w-[1100px] my-auto bg-white border border-slate-300 rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* LEFT COLUMN: SCORECARD PREVIEW & RING */}
        <div className="score-side md:col-span-5 bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white p-5 sm:p-7 flex flex-col items-center justify-between text-center relative border-b md:border-b-0 md:border-r border-sky-800/40">
          {/* Subtle blueprint grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(32,231,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(32,231,255,0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* TOP TAG */}
          <div className="relative z-10 w-full flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#ffd43b] flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#ffd43b]" />
              CIVIL QUICK FIRE
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 bg-sky-900/60 px-2 py-0.5 rounded border border-sky-400/30">
              10 QS SPRINT
            </span>
          </div>

          {/* MAIN CIRCULAR SCORE RING */}
          <div className="relative z-10 my-4 flex flex-col items-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 130 130">
                {/* Background Ring */}
                <circle
                  cx="65"
                  cy="65"
                  r={radius}
                  fill="transparent"
                  stroke="#1e293b"
                  strokeWidth="10"
                />
                {/* Animated Progress Ring */}
                <circle
                  cx="65"
                  cy="65"
                  r={radius}
                  fill="transparent"
                  stroke={score >= 7 ? '#35e58b' : '#20e7ff'}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              {/* Inside Circle Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {displayScore}
                  <span className="text-lg sm:text-xl font-bold text-sky-300">/10</span>
                </span>
                <span className="text-xs font-black text-[#ffd43b] tracking-wider mt-0.5">
                  {displayPercent}% ACCURACY
                </span>
              </div>
            </div>

            {/* STATUS TITLE & MESSAGE */}
            <div className="mt-2 text-center">
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                {title}
              </div>
              <div className="text-xs text-sky-200 mt-1 max-w-[260px] mx-auto leading-snug">
                {message}
              </div>
            </div>
          </div>

          {/* STATS TILES (ACCURACY, CORRECT, TOTAL) */}
          <div className="relative z-10 w-full grid grid-cols-3 gap-2 my-2">
            <div className="bg-slate-800/80 border border-sky-400/20 p-2.5 rounded-lg text-center">
              <div className="text-[10px] font-black uppercase tracking-wider text-sky-300">
                ACCURACY
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5">
                {displayPercent}%
              </div>
            </div>

            <div className="bg-slate-800/80 border border-sky-400/20 p-2.5 rounded-lg text-center">
              <div className="text-[10px] font-black uppercase tracking-wider text-sky-300">
                CORRECT
              </div>
              <div className="text-base sm:text-lg font-black text-[#35e58b] mt-0.5">
                {displayScore}
              </div>
            </div>

            <div className="bg-slate-800/80 border border-sky-400/20 p-2.5 rounded-lg text-center">
              <div className="text-[10px] font-black uppercase tracking-wider text-sky-300">
                QUESTIONS
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5">
                10
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="relative z-10 w-full flex flex-col gap-2 mt-2">
            {!isUnlocked ? (
              <>
                <button
                  onClick={onUnlockRequest}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#ffd43b] via-[#ff951f] to-[#ff6f00] hover:from-[#ffe066] hover:to-[#ff851f] text-[#041427] font-black text-xs sm:text-sm uppercase tracking-widest rounded-lg shadow-[0_0_20px_rgba(255,149,31,0.5)] cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <Unlock className="w-4 h-4 text-[#041427]" />
                  <span>VIEW MY SCORE</span>
                </button>

                <div className="flex gap-2 w-full">
                  <button
                    onClick={onOpenReview}
                    className="flex-1 py-2 px-3 bg-sky-800 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <CheckSquare className="w-3.5 h-3.5" />
                    <span>Review (10)</span>
                  </button>
                  <button
                    onClick={onRetry}
                    className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-sky-200 border border-sky-400/30 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex gap-2 w-full">
                <button
                  onClick={onOpenReview}
                  className="flex-1 py-2.5 px-3 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>Review (10)</span>
                </button>

                <button
                  onClick={onRetry}
                  className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-sky-200 border border-sky-400/30 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: PROGRESSION CHART & STUDY RESOURCES */}
        <div className="md:col-span-7 bg-white p-5 sm:p-6 flex flex-col justify-between text-left">
          <div>
            {/* PERFORMANCE GRAPH HEADER */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-black tracking-wider text-slate-800 uppercase">
                <TrendingUp className="w-4 h-4 text-sky-600" />
                <span>PROGRESSION (LAST 5 SESSIONS)</span>
              </div>
              <span className="text-[11px] font-bold text-slate-500">
                Target: ≥ 70%
              </span>
            </div>

            {/* RECHARTS LINE GRAPH */}
            <div className="h-36 sm:h-40 w-full bg-slate-50/80 border border-slate-200 rounded-lg p-2 relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" vertical={false} />
                  <XAxis
                    dataKey="shortLabel"
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                    axisLine={{ stroke: '#94a3b8' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 10]}
                    ticks={[0, 2, 4, 6, 8, 10]}
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                    axisLine={{ stroke: '#94a3b8' }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderRadius: '8px',
                      border: '1px solid #38bdf8',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                    formatter={(val: any) => [`${val ?? 0} / 10 (${Number(val ?? 0) * 10}%)`, 'Score']}
                    labelFormatter={(label) => `Session ${label}`}
                  />
                  <ReferenceLine y={7} stroke="#22c55e" strokeDasharray="4 4" />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#0284c7"
                    strokeWidth={3}
                    dot={{ fill: '#0284c7', stroke: '#fff', strokeWidth: 2, r: 4 }}
                    activeDot={{ fill: '#ffd43b', stroke: '#0284c7', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* TESTBOOK STUDY RESOURCES: STRICT 3x2 on Desktop, 2x3 on Mobile */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-black tracking-wider text-slate-800 uppercase flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>TESTBOOK CIVIL STUDY RESOURCES</span>
                </div>
                <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">
                  PDF & TESTS
                </span>
              </div>

              {/* 3 cols x 2 rows (desktop) and 2 cols x 3 rows (mobile) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {/* 1. Test Series */}
                <a
                  href="https://testbook.com/ae-je-civil-previous-year/test-series/my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg transition-all group shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-800 group-hover:text-sky-900 line-clamp-1">
                    AE/JE Test Series
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-sky-600 font-semibold">
                    <span>Mock Tests</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>

                {/* 2. Building Construction Notes */}
                <a
                  href="https://testbook.com/pdf-viewer?u=https:%2F%2Fcdn.testbook.com%2F1746257479223-Building%20Construction,%20Maintenance%20Notes.pdf%2F1746257478.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg transition-all group shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-800 group-hover:text-sky-900 line-clamp-1">
                    Building Const. Notes
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-rose-600 font-semibold">
                    <span>PDF Viewer</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>

                {/* 3. Concrete Technology Notes */}
                <a
                  href="https://testbook.com/pdf-viewer?u=https:%2F%2Fcdn.testbook.com%2F1746257479224-Concrete%20Technology%20Notes.pdf%2F1746257478.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg transition-all group shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-800 group-hover:text-sky-900 line-clamp-1">
                    Concrete Tech Notes
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-rose-600 font-semibold">
                    <span>PDF Viewer</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>

                {/* 4. Engineering Mechanics Notes */}
                <a
                  href="https://testbook.com/pdf-viewer?u=https:%2F%2Fcdn.testbook.com%2F1746257479224-Engineering%20Mechanics%20Notes.pdf%2F1746257478.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg transition-all group shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-800 group-hover:text-sky-900 line-clamp-1">
                    Engg. Mechanics Notes
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-rose-600 font-semibold">
                    <span>PDF Viewer</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>

                {/* 5. Formulas & Surveying Notes */}
                <a
                  href="https://testbook.com/pdf-viewer?u=https:%2F%2Fcdn.testbook.com%2F1746257479224-Surveying%20Notes.pdf%2F1746257478.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg transition-all group shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-800 group-hover:text-sky-900 line-clamp-1">
                    Surveying & Formulas
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-rose-600 font-semibold">
                    <span>PDF Viewer</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>

                {/* 6. Civil Engineering Hub */}
                <a
                  href="https://testbook.com/civil-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg transition-all group shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-800 group-hover:text-sky-900 line-clamp-1">
                    Civil Engineering Hub
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-sky-600 font-semibold">
                    <span>Courses & Exams</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR: RATING & PREPARE MORE CTA */}
          <div className="pt-4 border-t border-slate-200 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Rate:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className={`text-base sm:text-lg cursor-pointer transition-transform hover:scale-125 ${
                    star <= rating ? 'text-amber-400' : 'text-slate-300'
                  }`}
                  title={`${star} Star`}
                >
                  ★
                </button>
              ))}
              {hasRated && (
                <span className="text-[10px] text-emerald-600 font-bold ml-1">
                  Saved!
                </span>
              )}
            </div>

            {/* PREPARE MORE BUTTON */}
            <a
              href="https://testbook.com/ae-je-civil-previous-year/test-series/my"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <span>PREPARE MORE ON TESTBOOK</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
