import React from 'react';
import { Award, Timer } from 'lucide-react';
import { sound } from '../utils/sound';

interface CompleteScreenProps {
  isTimeUp: boolean;
  onOpenScore: () => void;
}

export const CompleteScreen: React.FC<CompleteScreenProps> = ({ isTimeUp, onOpenScore }) => {
  const handleClick = () => {
    sound.buttonClick();
    onOpenScore();
  };

  return (
    <section className="view complete-screen active flex items-center justify-center min-h-screen p-4 z-30">
      <div className="complete-card">
        <div className="complete-small flex items-center justify-center gap-1.5 uppercase font-black">
          {isTimeUp ? <Timer className="w-3.5 h-3.5 text-[#ff8a1f]" /> : <Award className="w-3.5 h-3.5 text-[#20e7ff]" />}
          CHALLENGE COMPLETE
        </div>

        <div className="complete-title text-white uppercase font-black mt-2" id="completeTitle">
          {isTimeUp ? "TIME'S UP" : 'QUIZ COMPLETED'}
        </div>

        <div className="complete-sub max-w-md mx-auto text-[#a7c5d2] text-sm sm:text-base leading-relaxed mt-3">
          The fast-paced Civil Engineering Quick Fire run has finished. Unlock your performance breakdown, accuracy percentage, and detailed answers review.
        </div>

        <button
          onClick={handleClick}
          className="complete-button uppercase font-black mt-6 tracking-widest text-sm sm:text-base cursor-pointer hover:bg-[#0c3e66] hover:border-[#ffd43b] transition-all"
          id="scoreButton"
        >
          VIEW MY SCORE
        </button>
      </div>
    </section>
  );
};
