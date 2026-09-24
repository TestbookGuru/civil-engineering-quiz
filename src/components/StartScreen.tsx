import React, { useState, useRef } from 'react';
import { BookOpen, Layers } from 'lucide-react';
import { sound } from '../utils/sound';
import { QUESTION_CATEGORIES } from '../data/questions';
import { BulldozerScene } from './BulldozerScene';

interface StartScreenProps {
  onStart: (category: string) => void;
  bestScore?: number;
  totalGames?: number;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');
  const [showTopics, setShowTopics] = useState<boolean>(false);
  const [isBulldozerExiting, setIsBulldozerExiting] = useState<boolean>(false);
  const startTriggeredRef = useRef<boolean>(false);

  const handleStart = () => {
    if (startTriggeredRef.current) return;
    startTriggeredRef.current = true;

    // Trigger Bulldozer engine rev & drive-out to the right
    sound.engineRev();
    sound.bulldozerHonk();
    setIsBulldozerExiting(true);

    // After the bulldozer drives out off-screen to the right, launch the quiz
    setTimeout(() => {
      onStart(selectedCategory);
    }, 1100);
  };

  return (
    <section className="view start-screen active flex flex-col items-center justify-start min-h-screen text-center z-10 px-4 pt-8 sm:pt-12 pb-[230px] sm:pb-[270px] md:pb-[310px] overflow-hidden">
      {/* Top Header Control Bar */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setShowTopics(!showTopics)}
          title="Browse Topics"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-[#082949]/80 border border-[#20e7ff]/40 hover:border-[#20e7ff] text-[#8ff4ff] rounded transition-all cursor-pointer shadow-lg"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{selectedCategory === 'All Topics' ? 'All 12 Topics' : selectedCategory}</span>
        </button>
      </div>

      <div className="start-content flex flex-col items-center max-w-4xl w-full my-auto z-10">
        <h1 className="game-title">
          CIVIL
          <span>ENGINEERING</span>
        </h1>

        <div className="mode-name tracking-[6px] sm:tracking-[8px]">
          QUICK FIRE
        </div>

        {/* Challenge Stats */}
        <div className="start-stats flex justify-center gap-3 sm:gap-6 flex-wrap my-4">
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
        <div className="flex flex-col items-center mt-2 mb-6">
          <button
            onClick={handleStart}
            disabled={isBulldozerExiting}
            className={`start-button cursor-pointer select-none transition-all ${
              isBulldozerExiting ? 'opacity-80 scale-95 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
            }`}
            id="startButton"
          >
            {isBulldozerExiting ? 'STARTING...' : 'PRESS START'}
          </button>
        </div>
      </div>

      {/* BULLDOZER WITH CIVIL ENGINEER ON THE BOTTOM ROAD */}
      <BulldozerScene isExiting={isBulldozerExiting} />

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

