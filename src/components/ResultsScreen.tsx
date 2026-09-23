import React, { useState, useMemo } from 'react';
import { ExternalLink, RotateCcw, CheckSquare, Sparkles, TrendingUp, Award, Activity, Download } from 'lucide-react';
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
  onRetry: () => void;
  onOpenReview: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalQuestions,
  userProfile: _userProfile,
  answerRecords: _answerRecords,
  sessionHistory,
  onRetry,
  onOpenReview,
}) => {
  const [rating, setRating] = useState<number>(() => {
    const saved = localStorage.getItem('civil_quiz_user_rating');
    return saved ? Number(saved) : 5;
  });
  const [hasRated, setHasRated] = useState<boolean>(false);

  const percentage = Math.round((score / totalQuestions) * 100);

  let title = 'GREAT JOB!';
  let message = 'Strong performance across Civil Engineering topics.';

  if (score >= 9) {
    title = 'EXCELLENT RUN!';
    message = 'Outstanding speed and accuracy across all Civil Engineering disciplines!';
  } else if (score >= 7) {
    title = 'GREAT JOB!';
    message = 'Strong performance across Civil Engineering core concepts and formulas.';
  } else if (score >= 5) {
    title = 'GOOD RUN!';
    message = 'A solid attempt. Focus on revising formula applications and code provisions.';
  } else {
    title = 'KEEP PRACTISING!';
    message = 'Use the specialized Civil Engineering notes below and run the Quick Fire again!';
  }

  const handleStarClick = (rateVal: number) => {
    setRating(rateVal);
    setHasRated(true);
    localStorage.setItem('civil_quiz_user_rating', String(rateVal));
    sound.playBeep(650, 0.08, 'sine', 0.2);
  };

  const handleRetryClick = () => {
    sound.buttonClick();
    onRetry();
  };

  const handleReviewClick = () => {
    sound.buttonClick();
    onOpenReview();
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

      // Check if previous entry is identical in time and score (to eliminate double clicks)
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
          score,
          total: totalQuestions,
          percentage,
          date: 'Current Attempt',
        },
      ];
    }

    // Determine starting run number so the last 5 runs are strictly sequential
    // e.g. If 5 total: Run 1, Run 2, Run 3, Run 4, Run 5
    // e.g. If 7 total: Run 3, Run 4, Run 5, Run 6, Run 7
    const startRunNum = Math.max(1, totalRuns - last5Raw.length + 1);

    return last5Raw.map((item, idx) => {
      const runNum = startRunNum + idx;
      return {
        label: `Run ${runNum}`,
        shortLabel: `R${runNum}`,
        score: item.score,
        total: item.total || 10,
        percentage: item.percentage || Math.round((item.score / (item.total || 10)) * 100),
        date: item.date || `Run ${runNum}`,
      };
    });
  }, [last5Raw, totalRuns, score, totalQuestions, percentage]);

  const avgScore = (
    chartData.reduce((acc, curr) => acc + curr.score, 0) / chartData.length
  ).toFixed(1);

  const highestScore = Math.max(...chartData.map((d) => d.score));

  const firstScore = chartData[0]?.score ?? score;
  const lastScore = chartData[chartData.length - 1]?.score ?? score;
  const diff = lastScore - firstScore;

  // Custom Chart Tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#0284c7] text-white p-2.5 rounded shadow-xl border border-white/40 text-xs">
          <div className="font-extrabold text-amber-300 uppercase tracking-wider">{data.label}</div>
          <div className="text-white font-bold text-sm mt-0.5">
            Score: {data.score} / {data.total} ({data.percentage}%)
          </div>
          <div className="text-sky-100 text-[10px] mt-0.5">{data.date}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="view results-screen active flex items-center justify-center min-h-screen p-3 sm:p-5 z-20 overflow-y-auto">
      <div className="results-layout max-h-[92vh] w-full max-w-[980px] shadow-2xl">
        {/* SCORE SIDEBAR */}
        <div className="score-side">
          <div className="score-caption">FINAL SCORE</div>

          <div className="score-number" id="scoreNumber">
            {score} / {totalQuestions}
          </div>

          <div className="score-percent" id="scorePercent">
            {percentage}%
          </div>

          <div className="mt-5 w-full space-y-2">
            <button
              onClick={handleReviewClick}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-black uppercase tracking-wider bg-white/15 hover:bg-white/25 border border-white/40 text-white rounded cursor-pointer transition-all shadow-md"
            >
              <CheckSquare className="w-3.5 h-3.5 text-amber-300" />
              Review Answers
            </button>
          </div>

          {/* Quick Stats in Sidebar */}
          <div className="mt-5 pt-4 border-t border-white/20 w-full grid grid-cols-2 gap-2 text-center text-xs">
            <div className="bg-black/15 p-2 rounded border border-white/10">
              <div className="text-[10px] text-sky-200 uppercase font-bold">5-Run Avg</div>
              <div className="text-base font-black text-white">{avgScore} / 10</div>
            </div>
            <div className="bg-black/15 p-2 rounded border border-white/10">
              <div className="text-[10px] text-sky-200 uppercase font-bold">Sessions</div>
              <div className="text-base font-black text-amber-300">{chartData.length} Completed</div>
            </div>
          </div>
        </div>

        {/* RESULTS CONTENT */}
        <div className="result-content flex flex-col justify-between overflow-y-auto max-h-[88vh] p-5 sm:p-7 bg-white text-slate-800">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="result-title text-slate-900 font-black" id="resultTitle">
                  {title}
                </span>
                {score >= 8 && <Sparkles className="w-5 h-5 text-amber-500 animate-spin-slow" />}
              </div>

              {diff !== 0 && chartData.length > 1 && (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>
                    {diff > 0 ? `+${diff}` : diff} pts vs first session
                  </span>
                </div>
              )}
            </div>

            <div className="result-message text-slate-600 text-sm mt-1" id="resultMessage">
              {message}
            </div>

            {/* SCORE PROGRESSION LINE CHART (LAST 5 SESSIONS) */}
            <div className="mt-4 p-3.5 bg-gradient-to-br from-sky-50 to-blue-50/60 rounded-xl border border-sky-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-sky-900 tracking-wide uppercase">
                  <Activity className="w-4 h-4 text-sky-600" />
                  Score Progression (Last 5 Sessions)
                </div>
                <div className="text-[11px] font-bold text-slate-500">
                  Target Benchmark: <span className="text-emerald-600 font-extrabold">7 / 10 (70%)</span>
                </div>
              </div>

              <div className="w-full h-[155px] pt-1">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 10, right: 18, left: -22, bottom: 4 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" vertical={false} />
                    <XAxis
                      dataKey="label"
                      stroke="#64748b"
                      tick={{ fill: '#475569', fontSize: 11, fontWeight: 700 }}
                      axisLine={{ stroke: '#94a3b8' }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 10]}
                      ticks={[0, 2, 4, 6, 8, 10]}
                      stroke="#64748b"
                      tick={{ fill: '#475569', fontSize: 10, fontWeight: 600 }}
                      axisLine={{ stroke: '#94a3b8' }}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine
                      y={7}
                      stroke="#10b981"
                      strokeDasharray="4 4"
                      label={{
                        value: '70% PASS',
                        fill: '#059669',
                        fontSize: 9,
                        position: 'insideTopRight',
                        fontWeight: 700,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#0284c7"
                      strokeWidth={3}
                      dot={{ r: 5, fill: '#f59e0b', stroke: '#0284c7', strokeWidth: 2 }}
                      activeDot={{ r: 7, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1 pt-1.5 border-t border-sky-200/50">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  Your Score Points
                </span>
                <span>
                  {chartData.length} of 5 recent attempts plotted
                </span>
              </div>
            </div>

            {/* QUICK STUDY RESOURCES */}
            <div className="resource-title text-sky-800 font-extrabold text-[11px] tracking-wider uppercase mt-4">
              CONTINUE PRACTISING WITH TESTBOOK
            </div>

            <div className="resource-links mt-2 grid grid-cols-2 gap-2">
              <a
                className="resource-link flex items-center justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg text-xs font-bold text-slate-700 hover:text-sky-900 transition-all group shadow-xs"
                href="https://testbook.com/civil-engineering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Civil Engineering Hub</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                className="resource-link flex items-center justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg text-xs font-bold text-slate-700 hover:text-sky-900 transition-all group shadow-xs"
                href="https://testbook.com/rrb-je-civil/notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>RRB JE Civil Notes</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                className="resource-link flex items-center justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg text-xs font-bold text-slate-700 hover:text-sky-900 transition-all group shadow-xs"
                href="https://testbook.com/ssc-je-ce/notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>SSC JE Civil Notes</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                className="resource-link flex items-center justify-between p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 rounded-lg text-xs font-bold text-slate-700 hover:text-sky-900 transition-all group shadow-xs"
                href="https://testbook.com/civil-engineering/rcc-notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>RCC Formula Notes</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* RATING */}
            <div className="rating-title flex items-center justify-between mt-3 text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
              <span>RATE THIS QUICK FIRE CHALLENGE</span>
              {hasRated && <span className="text-xs text-emerald-600 font-bold">Thanks for your rating!</span>}
            </div>

            <div className="stars flex gap-1.5 mt-1" id="stars">
              {[1, 2, 3, 4, 5].map((starVal) => (
                <button
                  key={starVal}
                  type="button"
                  onClick={() => handleStarClick(starVal)}
                  data-rating={starVal}
                  className={`star text-2xl cursor-pointer transition-transform hover:scale-115 ${
                    starVal <= rating ? 'text-amber-400' : 'text-slate-300'
                  }`}
                  title={`${starVal} Star`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="result-actions pt-3 mt-3 border-t border-slate-200 flex gap-2">
            <button
              onClick={handleRetryClick}
              className="result-button primary flex-1 py-3 px-3 sm:px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              id="retryButton"
            >
              <RotateCcw className="w-4 h-4" />
              TRY AGAIN
            </button>

            <a
              className="result-button flex-1 py-3 px-3 sm:px-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              href="https://testbook.com/super-coaching/rrb-je-civil-complete-preparation-course"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>PREPARE MORE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/civil-engineering-quiz.zip"
              download="civil-engineering-quiz.zip"
              title="Download Complete Project ZIP"
              className="py-3 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-300 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">ZIP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
