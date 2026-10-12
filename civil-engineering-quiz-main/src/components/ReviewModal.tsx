import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { AnswerRecord } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  records: AnswerRecord[];
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, records }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  if (!isOpen || records.length === 0) return null;

  const item = records[currentIdx];

  return (
    <div className="review-modal fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="review-card relative w-full max-w-2xl bg-gradient-to-br from-[#061d3a] to-[#082a4d] border border-[#20e7ff] p-5 sm:p-7 shadow-2xl rounded-sm my-auto">
        {/* Header */}
        <div className="review-header flex items-center justify-between border-b border-[#20e7ff]/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffd43b]">
              Question {currentIdx + 1} of {records.length}
            </span>
            <span className="text-[10px] px-2 py-0.5 border border-[#20e7ff]/40 text-[#20e7ff] uppercase font-bold rounded-xs">
              {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-white hover:text-[#ff435d] text-base font-black px-2 cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Question Text */}
        <div className="review-question text-base sm:text-lg font-bold text-white mb-4 leading-snug">
          {item.question}
        </div>

        {/* Options list */}
        <div className="review-options space-y-2 mb-5">
          {item.options.map((opt, oIdx) => {
            const isUserSelection = item.selectedIndex === oIdx;
            const isCorrectOption = opt.correct;

            let borderStyle = 'border-white/10 bg-[#041427]/60 text-[#cde4f0]';
            let icon = null;

            if (isCorrectOption) {
              borderStyle = 'border-[#35e58b] bg-[#35e58b]/15 text-[#b5ffdb] font-semibold';
              icon = <CheckCircle2 className="w-4 h-4 text-[#35e58b] shrink-0" />;
            } else if (isUserSelection && !item.isCorrect) {
              borderStyle = 'border-[#ff435d] bg-[#ff435d]/15 text-[#ffd3d8]';
              icon = <XCircle className="w-4 h-4 text-[#ff435d] shrink-0" />;
            }

            return (
              <div
                key={oIdx}
                className={`flex items-center justify-between p-2.5 sm:p-3 border rounded text-xs sm:text-sm transition-all ${borderStyle}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 flex items-center justify-center rounded bg-black/40 text-[11px] font-bold text-[#8ed8ea]">
                    {oIdx + 1}
                  </span>
                  <span>{opt.text}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {isUserSelection && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider bg-black/50 text-[#ffd43b]">
                      Your Choice
                    </span>
                  )}
                  {icon}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanation box */}
        {item.explanation && (
          <div className="review-explanation p-3 bg-[#0a2642]/80 border border-[#20e7ff]/30 rounded text-xs text-[#a0d2e8] leading-relaxed mb-5">
            <div className="flex items-center gap-1.5 text-[#ffd43b] font-bold mb-1 uppercase tracking-wider text-[10px]">
              <HelpCircle className="w-3.5 h-3.5" /> Concept Note:
            </div>
            {item.explanation}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="review-nav flex items-center justify-between pt-2 border-t border-white/10">
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#082949] hover:bg-[#0d3b66] disabled:opacity-30 disabled:pointer-events-none text-white border border-[#20e7ff]/40 rounded cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Previous
          </button>

          <span className="review-status text-xs text-[#7bbcd0] font-semibold">
            Status: {item.isCorrect ? (
              <span className="text-[#35e58b] font-bold">Correct (+1)</span>
            ) : item.selectedIndex === -1 ? (
              <span className="text-[#ffd43b]">Timed Out</span>
            ) : (
              <span className="text-[#ff435d] font-bold">Incorrect</span>
            )}
          </span>

          <button
            onClick={() => setCurrentIdx((prev) => Math.min(records.length - 1, prev + 1))}
            disabled={currentIdx === records.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#082949] hover:bg-[#0d3b66] disabled:opacity-30 disabled:pointer-events-none text-white border border-[#20e7ff]/40 rounded cursor-pointer transition-colors"
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
