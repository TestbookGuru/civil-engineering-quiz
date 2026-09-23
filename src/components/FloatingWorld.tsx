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

      {/* CITY */}
      <div className="city fixed bottom-[14%] left-0 right-0 h-[31%] z-0 pointer-events-none">
        <div className="building b1" />
        <div className="building b2" />
        <div className="building b3" />
        <div className="building b4" />
        <div className="building b5" />
        <div className="building b6" />
      </div>

      {/* GROUND */}
      <div className="ground fixed -left-[10%] -right-[10%] -bottom-[8%] h-[40%] z-0">
        <div className="ground-grid" />
      </div>

      {/* FLOATING CIVIL ENGINEERING OBJECTS */}
      <div className="floating-world fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* CRANE - Top Left */}
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

        {/* BRIDGE - Bottom Right */}
        <div
          className={`world-object object-bridge transition-opacity duration-300 ${
            view === 'quiz' ? 'opacity-70 scale-90' : 'opacity-80'
          }`}
          style={{
            transform: `translate3d(${parallaxX * 0.28}px, ${parallaxY * 0.28}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 320 160">
            <defs>
              <linearGradient id="bridgeMetal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#dbf8ff" />
                <stop offset="0.5" stopColor="#397b98" />
                <stop offset="1" stopColor="#0e3855" />
              </linearGradient>
            </defs>
            <path d="M15 75 H305" stroke="#ffd43b" strokeWidth="9" fill="none" />
            <path d="M20 75 Q90 145 160 75 Q230 5 300 75" fill="none" stroke="url(#bridgeMetal)" strokeWidth="5" />
            <line x1="65" y1="75" x2="65" y2="122" stroke="#83d5e7" strokeWidth="5" />
            <line x1="160" y1="75" x2="160" y2="122" stroke="#83d5e7" strokeWidth="5" />
            <line x1="255" y1="75" x2="255" y2="122" stroke="#83d5e7" strokeWidth="5" />
            <path d="M0 128 H320" stroke="#20e7ff" strokeWidth="5" />
            <path d="M0 139 H320" stroke="#476b7c" strokeWidth="12" />
          </svg>
        </div>

        {/* EXCAVATOR - Bottom Left */}
        <div
          className={`world-object object-excavator transition-opacity duration-300 ${
            view === 'quiz' ? 'opacity-70 scale-90' : 'opacity-88'
          }`}
          style={{
            transform: `translate3d(${parallaxX * 0.55}px, ${parallaxY * 0.55}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 230 170">
            <defs>
              <linearGradient id="excavatorYellow" x1="0" x2="1">
                <stop offset="0" stopColor="#ffbf26" />
                <stop offset="0.5" stopColor="#ff8b14" />
                <stop offset="1" stopColor="#b95c0c" />
              </linearGradient>
            </defs>
            <rect x="38" y="125" width="135" height="22" rx="9" fill="#182b37" />
            <circle cx="62" cy="145" r="19" fill="#09131c" stroke="#ffb321" strokeWidth="5" />
            <circle cx="145" cy="145" r="19" fill="#09131c" stroke="#ffb321" strokeWidth="5" />
            <path d="M55 124 L76 75 L128 75 L156 122 Z" fill="url(#excavatorYellow)" stroke="#ffd43b" strokeWidth="3" />
            <path d="M90 75 L105 45 L137 53 L129 78" fill="#263b48" stroke="#ffd43b" strokeWidth="3" />
            <path d="M128 72 L164 44 L187 60 L160 83" fill="none" stroke="#ff9c1c" strokeWidth="13" strokeLinecap="round" />
            <path d="M182 57 L212 79 L195 105 L168 82" fill="#ff9c1c" stroke="#ffd43b" strokeWidth="3" />
            <path d="M191 102 L218 105 L208 126 L180 119" fill="#e8780c" stroke="#ffd43b" strokeWidth="3" />
          </svg>
        </div>

        {/* SURVEY TOTAL STATION - Top Right */}
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

        {/* BLUEPRINT (shown on non-quiz screens) */}
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

        {/* CONCRETE COLUMN (shown on non-quiz screens) */}
        <div
          className={`world-object object-column ${view === 'quiz' ? 'hidden' : 'block'}`}
          style={{
            transform: `translate3d(${parallaxX * 0.65}px, ${parallaxY * 0.65}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 100 210">
            <defs>
              <linearGradient id="concrete" x1="0" x2="1">
                <stop offset="0" stopColor="#6e7e87" />
                <stop offset="0.5" stopColor="#c9d3d7" />
                <stop offset="1" stopColor="#596870" />
              </linearGradient>
            </defs>
            <rect x="20" y="15" width="60" height="175" fill="url(#concrete)" stroke="#e5f4f7" strokeWidth="2" />
            <g stroke="#d93d36" strokeWidth="3">
              <line x1="30" y1="8" x2="30" y2="198" />
              <line x1="48" y1="8" x2="48" y2="198" />
              <line x1="66" y1="8" x2="66" y2="198" />
            </g>
            <g stroke="#ff8a1f" strokeWidth="3">
              <line x1="16" y1="35" x2="84" y2="35" />
              <line x1="16" y1="75" x2="84" y2="75" />
              <line x1="16" y1="115" x2="84" y2="115" />
              <line x1="16" y1="155" x2="84" y2="155" />
            </g>
          </svg>
        </div>

        {/* I BEAM (shown on non-quiz screens) */}
        <div
          className={`world-object object-beam ${view === 'quiz' ? 'hidden' : 'block'}`}
          style={{
            transform: `translate3d(${parallaxX * 0.38}px, ${parallaxY * 0.38}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 220 100">
            <path d="M15 15 H205 V31 H125 V69 H205 V85 H15 V69 H95 V31 H15 Z" fill="url(#craneMetal)" stroke="#dffbff" strokeWidth="2" />
            <line x1="20" y1="50" x2="200" y2="50" stroke="#20e7ff" strokeWidth="2" strokeDasharray="8 6" />
          </svg>
        </div>

        {/* ROAD ROLLER (shown on non-quiz screens) */}
        <div
          className={`world-object object-roller ${view === 'quiz' ? 'hidden' : 'block'}`}
          style={{
            transform: `translate3d(${parallaxX * 0.6}px, ${parallaxY * 0.6}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 190 150">
            <circle cx="45" cy="112" r="30" fill="#d6e0e2" stroke="#ffd43b" strokeWidth="5" />
            <circle cx="45" cy="112" r="12" fill="#31434c" />
            <circle cx="150" cy="112" r="24" fill="#172933" stroke="#ff8a1f" strokeWidth="5" />
            <path d="M35 80 H138 L161 105 H24 Z" fill="#ff9c1c" stroke="#ffd43b" strokeWidth="3" />
            <path d="M100 80 V35 H138 V80" fill="#203946" stroke="#dffbff" strokeWidth="3" />
            <rect x="108" y="43" width="22" height="18" fill="#75dcf0" fillOpacity="0.4" />
          </svg>
        </div>

        {/* REBAR (shown on non-quiz screens) */}
        <div
          className={`world-object object-rebar ${view === 'quiz' ? 'hidden' : 'block'}`}
          style={{
            transform: `translate3d(${parallaxX * 0.9}px, ${parallaxY * 0.9}px, 0)`,
          }}
        >
          <svg className="world-art" viewBox="0 0 170 110">
            <g fill="none" strokeWidth="6">
              <path d="M15 88 L150 22" stroke="#9caeb5" />
              <path d="M25 100 L160 34" stroke="#d4e0e3" />
              <path d="M5 74 L140 8" stroke="#6d838e" />
            </g>
            <g stroke="#ff8a1f" strokeWidth="3">
              <line x1="35" y1="69" x2="48" y2="95" />
              <line x1="62" y1="56" x2="75" y2="82" />
              <line x1="89" y1="43" x2="102" y2="69" />
              <line x1="116" y1="30" x2="129" y2="56" />
            </g>
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
