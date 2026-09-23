import React, { useState } from 'react';
import { BookOpen, Award, Layers, Download } from 'lucide-react';
import { sound } from '../utils/sound';
import { QUESTION_CATEGORIES } from '../data/questions';

interface StartScreenProps {
  onStart: (category: string) => void;
  bestScore?: number;
  totalGames?: number;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');
  const [showTopics, setShowTopics] = useState<boolean>(false);

  const handleStart = () => {
    sound.buttonClick();
    onStart(selectedCategory);
  };

  return (
    <section className="view start-screen active flex flex-col items-center justify-center min-h-screen text-center z-10 px-4">
      {/* Top Header Control Bar */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
        <a
          href="/civil-engineering-quiz.zip"
          download="civil-engineering-quiz.zip"
          title="Download Complete Project ZIP"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-[#082949]/80 border border-[#20e7ff]/40 hover:border-[#20e7ff] text-[#8ff4ff] rounded transition-all cursor-pointer shadow-lg hover:bg-[#082949]"
        >
          <Download className="w-3.5 h-3.5 text-[#20e7ff]" />
          <span className="hidden sm:inline">Download ZIP</span>
        </a>

        <button
          onClick={() => setShowTopics(!showTopics)}
          title="Browse Topics"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-[#082949]/80 border border-[#20e7ff]/40 hover:border-[#20e7ff] text-[#8ff4ff] rounded transition-all cursor-pointer shadow-lg"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{selectedCategory === 'All Topics' ? 'All 12 Topics' : selectedCategory}</span>
        </button>
      </div>

      <div className="start-content">
        <h1 className="game-title">
          CIVIL
          <span>ENGINEERING</span>
        </h1>

        <div className="mode-name tracking-[6px] sm:tracking-[8px]">
          QUICK FIRE
        </div>

        <div className="start-stats flex justify-center gap-3 sm:gap-4 my-6 flex-wrap">
          <div className="stat-box">
            <div className="stat-number">10</div>
            <div className="stat-label">QUESTIONS</div>
          </div>

          <div className="stat-box">
            <div className="stat-number">50s</div>
            <div className="stat-label">TIME</div>
          </div>
        </div>

        {/* Start Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleStart}
            className="start-button cursor-pointer select-none"
            id="startButton"
          >
            PRESS START
          </button>

          <div className="start-hint text-[#8ec7dc] tracking-wider text-xs">
            {selectedCategory === 'All Topics'
              ? '200 HIGH-YIELD QUESTIONS • SPEED & REASONING'
              : `MODE: ${selectedCategory.toUpperCase()} SPRINT`}
          </div>
        </div>

        {/* Instructions strip */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[11px] text-[#78a5b8] uppercase tracking-widest">
          <span className="hidden sm:inline">Use Keys 1, 2, 3, 4 for instantaneous answering</span>
          <span className="hidden sm:inline">•</span>
          <span>Fast Pace • Instant Scoring</span>
        </div>
      </div>

      {/* Topic selection modal */}
      {showTopics && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-gradient-to-br from-[#051d38] to-[#093557] border border-[#20e7ff] p-6 shadow-2xl rounded-sm">
            <div className="flex items-center justify-between mb-4 border-b border-[#20e7ff]/30 pb-3">
              <div className="flex items-center gap-2 text-[#20e7ff] text-xs font-black tracking-widest uppercase">
                <BookOpen className="w-4 h-4" />
                Select Civil Topic
              </div>
              <button
                onClick={() => setShowTopics(false)}
                className="text-white hover:text-[#ffd43b] font-bold text-sm px-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1.5 max-h-[55vh] overflow-y-auto pr-1">
              <button
                onClick={() => {
                  setSelectedCategory('All Topics');
                  setShowTopics(false);
                }}
                className={`text-left px-3 py-2 text-xs font-semibold rounded border transition-all cursor-pointer ${
                  selectedCategory === 'All Topics'
                    ? 'bg-[#20e7ff]/20 border-[#20e7ff] text-[#20e7ff]'
                    : 'bg-[#04162a]/60 border-transparent hover:border-[#20e7ff]/40 text-[#c7e5f0]'
                }`}
              >
                ★ All 12 Civil Engineering Disciplines (Full 200 Question Pool)
              </button>

              {QUESTION_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowTopics(false);
                  }}
                  className={`text-left px-3 py-2 text-xs font-semibold rounded border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#20e7ff]/20 border-[#20e7ff] text-[#20e7ff]'
                      : 'bg-[#04162a]/60 border-transparent hover:border-[#20e7ff]/40 text-[#c7e5f0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowTopics(false)}
              className="w-full mt-4 py-2 bg-[#ff8a1f] hover:bg-[#ffa03f] text-[#061225] font-black text-xs uppercase tracking-widest cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
