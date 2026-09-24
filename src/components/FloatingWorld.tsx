import React from 'react';
import { GameView } from '../types';

interface FloatingWorldProps {
  parallaxX: number;
  parallaxY: number;
  view?: GameView;
}

export const FloatingWorld: React.FC<FloatingWorldProps> = ({ parallaxX, parallaxY, view = 'start' }) => {
  return (
    <>
      {/* SKY */}
      <div className="sky fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="sky-glow" />
        <div className="cloud c1" />
        <div className="cloud c2" />
      </div>

      {/* CIVIL ENGINEERING BOTTOM ROAD (Clean, unobstructed for the Bulldozer) */}
      <div className="fixed bottom-0 left-0 right-0 h-[100px] sm:h-[120px] md:h-[135px] z-0 pointer-events-none select-none">
        {/* Road Curb with Black & Yellow Safety Hazard Stripes */}
        <div
          className="w-full h-3 sm:h-3.5 shadow-md border-t border-b border-black/30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, #ffd43b, #ffd43b 14px, #0f172a 14px, #0f172a 28px)',
          }}
        />

        {/* Asphalt Highway Road Surface */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#253245] via-[#1a2433] to-[#0f1726] shadow-inner overflow-hidden">
          {/* Subtle asphalt texture grain */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #1a2433 1px)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px',
            }}
          />

          {/* Top Road Shoulder Yellow Line */}
          <div className="absolute top-2 left-0 right-0 h-1 bg-[#ffd43b] opacity-90 shadow-[0_0_8px_rgba(255,212,59,0.5)]" />

          {/* Highway Dashed Center Lane Marking */}
          <div className="absolute top-[48%] left-0 right-0 flex items-center justify-around overflow-hidden">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-12 sm:w-16 h-1.5 sm:h-2 bg-white/85 rounded-sm mx-3 sm:mx-5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.4)]"
              />
            ))}
          </div>

          {/* Bottom Solid White Edge Line */}
          <div className="absolute bottom-2 left-0 right-0 h-1 bg-white/70" />
        </div>
      </div>

      {/* FLOATING CIVIL ENGINEERING OBJECTS (Placed strictly in the sky, well above the road) */}
      <div className="floating-world fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* CRANE - Upper Left Sky */}
        <div
          className={`world-object object-crane transition-opacity duration-300 ${
            view === 'quiz' ? 'opacity-70 scale-90' : 'opacity-90'
          }`}
          style={{
            transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 240 180">
            <defs>
              <linearGradient id="craneMetal" x1="0" x2="1">
                <stop offset="0" stopColor="#b9eaf5" />
                <stop offset="0.5" stopColor="#4b8298" />
                <stop offset="1" stopColor="#dffbff" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#craneMetal)" strokeWidth="4">
              <line x1="25" y1="155" x2="70" y2="30" />
              <line x1="70" y1="30" x2="210" y2="30" />
              <line x1="70" y1="30" x2="70" y2="155" />
              <line x1="25" y1="155" x2="100" y2="155" />
              <line x1="70" y1="55" x2="38" y2="105" />
              <line x1="70" y1="80" x2="50" y2="120" />
              <line x1="70" y1="55" x2="120" y2="30" />
              <line x1="70" y1="80" x2="150" y2="30" />
              <line x1="145" y1="30" x2="145" y2="83" />
            </g>
            <rect x="137" y="78" width="17" height="28" fill="#ff9c1c" stroke="#ffd43b" strokeWidth="2" />
            <circle cx="70" cy="30" r="6" fill="#ffd43b" />
            <rect x="12" y="153" width="70" height="8" rx="2" fill="#ff8a1f" />
          </svg>
        </div>

        {/* SURVEY TOTAL STATION - Upper Right Sky */}
        <div
          className={`world-object object-survey transition-opacity duration-300 ${
            view === 'quiz' ? 'opacity-70 scale-90' : 'opacity-90'
          }`}
          style={{
            transform: `translate3d(${parallaxX * 0.8}px, ${parallaxY * 0.8}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 150 190">
            <g stroke="#bdeef7" strokeWidth="4" fill="none">
              <line x1="75" y1="70" x2="32" y2="180" />
              <line x1="75" y1="70" x2="75" y2="180" />
              <line x1="75" y1="70" x2="120" y2="180" />
            </g>
            <path d="M43 72 L108 72 L96 105 L54 105 Z" fill="#173c59" stroke="#20e7ff" strokeWidth="3" />
            <circle cx="75" cy="88" r="12" fill="#061522" stroke="#ffd43b" strokeWidth="3" />
            <rect x="56" y="54" width="39" height="19" rx="4" fill="#0a263e" stroke="#dffbff" strokeWidth="3" />
            <circle cx="75" cy="63" r="5" fill="#20e7ff" />
          </svg>
        </div>

        {/* BLUEPRINT - Upper Sky */}
        <div
          className={`world-object object-blueprint ${view === 'quiz' ? 'hidden' : 'block'}`}
          style={{
            transform: `translate3d(${parallaxX * 1.15}px, ${parallaxY * 1.15}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 210 160">
            <rect x="8" y="8" width="194" height="144" rx="3" fill="#dff7ff" fillOpacity="0.13" stroke="#a9edff" strokeWidth="2" />
            <g stroke="#20e7ff" strokeWidth="1" opacity="0.45">
              <line x1="20" y1="35" x2="190" y2="35" />
              <line x1="20" y1="65" x2="190" y2="65" />
              <line x1="20" y1="95" x2="190" y2="95" />
              <line x1="20" y1="125" x2="190" y2="125" />
              <line x1="50" y1="18" x2="50" y2="142" />
              <line x1="90" y1="18" x2="90" y2="142" />
              <line x1="130" y1="18" x2="130" y2="142" />
              <line x1="170" y1="18" x2="170" y2="142" />
            </g>
            <path d="M35 125 V70 H165 V125 M65 125 V90 H135 V125 M90 70 V40 H120 V70" fill="none" stroke="#d7faff" strokeWidth="3" />
            <path d="M20 20 H75" stroke="#ffd43b" strokeWidth="4" />
          </svg>
        </div>

        {/* ENGINEERING COMPASS - Upper Sky */}
        <div
          className={`world-object object-compass transition-opacity duration-300 ${
            view === 'quiz' ? 'opacity-70 scale-90' : 'opacity-85'
          }`}
          style={{
            transform: `translate3d(${parallaxX * 1.2}px, ${parallaxY * 1.2}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="48" fill="rgba(5,25,42,.75)" stroke="#20e7ff" strokeWidth="3" />
            <circle cx="60" cy="60" r="36" fill="none" stroke="#ffd43b" strokeWidth="2" strokeDasharray="4 5" />
            <path d="M60 20 L67 60 L60 100 L53 60 Z" fill="#ff8a1f" stroke="#fff" strokeWidth="2" />
            <circle cx="60" cy="60" r="5" fill="#20e7ff" />
          </svg>
        </div>
      </div>
    </>
  );
};
