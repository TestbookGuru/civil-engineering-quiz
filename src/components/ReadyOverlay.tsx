import React from 'react';

interface ReadyOverlayProps {
  number: string;
  isVisible: boolean;
}

export const ReadyOverlay: React.FC<ReadyOverlayProps> = ({ number, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="ready-overlay active">
      <div key={number} className="ready-number">
        {number}
      </div>
    </div>
  );
};
