import React, { useState, useEffect } from 'react';
import { sound } from '../utils/sound';

interface BulldozerSceneProps {
  isExiting: boolean;
}

export const BulldozerScene: React.FC<BulldozerSceneProps> = ({
  isExiting,
}) => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [speechText, setSpeechText] = useState<string>(
    'Hey Buddy! Ready to test your engineering skills?'
  );

  useEffect(() => {
    // Small delay to trigger smooth drive-in from the left to center
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isExiting) {
      setSpeechText("VROOOM! Let's Go! 🚧");
    }
  }, [isExiting]);

  const handleHonk = () => {
    sound.bulldozerHonk();
  };

  return (
    <div
      className="absolute bottom-[20px] sm:bottom-[28px] md:bottom-[35px] left-0 right-0 h-[210px] sm:h-[260px] md:h-[300px] pointer-events-none z-20 overflow-visible"
      aria-label="Bulldozer with Civil Engineer Mascot"
    >
      {/* BULLDOZER DRIVE-IN CONTAINER (Stops right in the center / in between) */}
      <div
        className={`absolute bottom-0 left-1/2 transition-transform duration-1000 ease-out pointer-events-auto ${
          isExiting
            ? 'transition-transform duration-[1200ms] ease-in translate-x-[110vw]'
            : hasEntered
            ? '-translate-x-1/2'
            : '-translate-x-[110vw]'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* SPEECH BUBBLE (Big, vibrant yellow hook font) */}
        <div
          className={`absolute -top-[100px] sm:-top-[115px] md:-top-[125px] left-[5%] sm:left-[12%] md:left-[16%] z-30 transition-all duration-300 pointer-events-none select-none ${
            hasEntered && !isExiting ? 'opacity-100 scale-100' : isExiting ? 'opacity-95 scale-105' : 'opacity-0 scale-90'
          }`}
          style={{
            animation: hasEntered && !isExiting ? 'bubbleFloat 3s ease-in-out infinite' : undefined,
          }}
        >
          <div className="relative bg-[#06182e] border-[3px] border-[#ffd43b] px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.8),0_0_24px_rgba(255,212,59,0.4)] w-max max-w-[280px] sm:max-w-[360px] md:max-w-[420px] text-center">
            {/* Speech bubble tail pointer pointing to the engineer */}
            <div className="absolute -bottom-3.5 left-14 sm:left-20 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#ffd43b]">
              <div className="absolute -top-[14px] -left-[8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[11px] border-t-[#06182e]" />
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black leading-snug tracking-tight text-[#ffd43b] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {speechText}
            </p>
          </div>
        </div>

        {/* BULLDOZER & CIVIL ENGINEER SVG (Large Size, Click to Honk!) */}
        <div
          onClick={handleHonk}
          className="cursor-pointer group select-none transition-transform hover:scale-[1.02] active:scale-[0.98]"
          title="Click to Honk!"
        >
          <svg
            className="w-[320px] sm:w-[410px] md:w-[490px] lg:w-[540px] h-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.55)]"
            viewBox="0 0 320 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metal & Yellow Gradients */}
              <linearGradient id="dozerYellow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffb703" />
                <stop offset="60%" stopColor="#fb8500" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              <linearGradient id="dozerYellowHighlight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffe680" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>

              <linearGradient id="bladeSteel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffd147" />
                <stop offset="45%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              <linearGradient id="chromePiston" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              <linearGradient id="trackDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <linearGradient id="cabGlass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.75" />
              </linearGradient>

              {/* Hazard Pattern for Blade Edge */}
              <pattern id="hazardStripe" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="10" height="20" fill="#ffd43b" />
                <rect x="10" width="10" height="20" fill="#1e293b" />
              </pattern>
            </defs>

            {/* EXHAUST SMOKE PUFFS (Animated) */}
            <g className="smoke-puffs">
              <circle
                cx="155"
                cy="18"
                r="6"
                fill="#cbd5e1"
                fillOpacity="0.6"
                className="animate-ping"
                style={{ animationDuration: '1.8s' }}
              />
              <circle
                cx="162"
                cy="8"
                r="9"
                fill="#94a3b8"
                fillOpacity="0.4"
                className="animate-pulse"
                style={{ animationDuration: '2.2s' }}
              />
            </g>

            {/* EXHAUST PIPE */}
            <path d="M152 25 L152 58" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
            <path d="M150 25 L157 23" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="152" cy="58" rx="4" ry="2" fill="#0f172a" />

            {/* REAR CHASSIS / COUNTERWEIGHT */}
            <path
              d="M62 76 L82 76 L82 112 L60 112 Q58 92 62 76 Z"
              fill="#d97706"
              stroke="#b45309"
              strokeWidth="2"
            />
            {/* Rear Tow Hook / Hitch */}
            <rect x="52" y="98" width="10" height="8" rx="2" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
            <circle cx="56" cy="102" r="2" fill="#0f172a" />

            {/* OPERATOR CAB (ROPS Canopy Structure) */}
            {/* Cab Roof */}
            <path
              d="M74 38 L142 38 L146 46 L70 46 Z"
              fill="url(#dozerYellow)"
              stroke="#b45309"
              strokeWidth="2"
            />
            {/* Yellow Roof Highlight */}
            <path d="M76 40 L140 40" stroke="url(#dozerYellowHighlight)" strokeWidth="2" strokeLinecap="round" />

            {/* Safety Amber Beacon Light on Roof */}
            <rect x="100" y="32" width="12" height="6" rx="2" fill="#f59e0b" stroke="#ffd43b" strokeWidth="1.5" className="animate-pulse" />
            <circle cx="106" cy="35" r="2" fill="#fff" />

            {/* Cab Pillars / Roll Cage Bars */}
            <line x1="75" y1="46" x2="68" y2="108" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="140" y1="46" x2="136" y2="108" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="108" y1="46" x2="108" y2="108" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

            {/* CAB WINDOW (GLASS) */}
            <path d="M86 46 L134 46 L131 92 L80 92 Z" fill="url(#cabGlass)" stroke="#38bdf8" strokeWidth="1.5" />

            {/* ======================================================== */}
            {/* CIVIL ENGINEER MASCOT (Inside the Bulldozer Cab!)        */}
            {/* ======================================================== */}
            <g id="engineerInCab">
              {/* Vest Body */}
              <path d="M96 74 C92 74 88 80 88 92 L124 92 C124 80 120 74 116 74 Z" fill="#ff6b00" />
              {/* Reflective Neon Vest Stripes */}
              <line x1="97" y1="74" x2="97" y2="92" stroke="#a3e635" strokeWidth="3" />
              <line x1="115" y1="74" x2="115" y2="92" stroke="#a3e635" strokeWidth="3" />
              <line x1="88" y1="84" x2="124" y2="84" stroke="#a3e635" strokeWidth="2.5" />

              {/* Neck & Cheerful Head */}
              <circle cx="106" cy="62" r="13" fill="#fbd2a9" />

              {/* Friendly Eyes */}
              <ellipse cx="102" cy="60" rx="2" ry="2.5" fill="#091b29" />
              <circle cx="103" cy="59" r="0.8" fill="#ffffff" />
              <ellipse cx="110" cy="60" rx="2" ry="2.5" fill="#091b29" />
              <circle cx="111" cy="59" r="0.8" fill="#ffffff" />

              {/* Cheerful Eyebrows */}
              <path d="M99 56 Q102 54 105 56" stroke="#5d3916" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M107 56 Q110 54 113 56" stroke="#5d3916" strokeWidth="1.2" fill="none" strokeLinecap="round" />

              {/* Rosy Cheeks */}
              <ellipse cx="98" cy="65" rx="2" ry="1.2" fill="#fb7185" fillOpacity="0.6" />
              <ellipse cx="114" cy="65" rx="2" ry="1.2" fill="#fb7185" fillOpacity="0.6" />

              {/* Big Happy Smile */}
              <path d="M101 64 Q106 70 111 64" stroke="#091b29" strokeWidth="1.8" fill="#ffffff" strokeLinecap="round" />

              {/* Hardhat Helmet */}
              <path d="M93 57 C93 47 119 47 119 57 Z" fill="#ffd43b" stroke="#eab308" strokeWidth="1.5" />
              {/* Helmet Visor Rim */}
              <path d="M90 57 H122 Q123 59 120 60 H92 Q89 59 90 57 Z" fill="#eab308" />
              {/* Engineer Badge */}
              <circle cx="106" cy="52" r="2.5" fill="#ffffff" />
              <path d="M104.5 52 H107.5 M106 50.5 V53.5" stroke="#0284c7" strokeWidth="0.8" />

              {/* Steady Hands Gripping Bulldozer Operator Controls (No Waving) */}
              <g id="operatorSteadyHands">
                {/* Left Arm to control console */}
                <path d="M92 80 Q88 88 95 93" stroke="#ff6b00" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <circle cx="95" cy="93" r="3.5" fill="#ffd43b" stroke="#ca8a04" strokeWidth="1" />
                {/* Right Arm to control lever */}
                <path d="M118 80 Q122 88 116 93" stroke="#ff6b00" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <circle cx="116" cy="93" r="3.5" fill="#ffd43b" stroke="#ca8a04" strokeWidth="1" />
                {/* Control Levers */}
                <line x1="95" y1="93" x2="95" y2="101" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="116" y1="93" x2="116" y2="101" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </g>

            {/* CAB WINDOW FRAME HIGHLIGHT */}
            <line x1="88" y1="48" x2="108" y2="88" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />

            {/* ENGINE HOOD (Yellow Body) */}
            <path
              d="M138 58 L212 66 L218 108 L138 108 Z"
              fill="url(#dozerYellow)"
              stroke="#b45309"
              strokeWidth="2"
            />
            {/* Hood Top Highlight */}
            <path d="M140 60 L210 68" stroke="url(#dozerYellowHighlight)" strokeWidth="3" strokeLinecap="round" />

            {/* Engine Louvers / Air Vents */}
            <line x1="168" y1="74" x2="202" y2="78" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <line x1="168" y1="82" x2="202" y2="86" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <line x1="168" y1="90" x2="202" y2="94" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

            {/* FRONT HYDRAULIC PUSH ARMS & PISTONS */}
            {/* Rear Pivot on track frame */}
            <circle cx="95" cy="130" r="7" fill="#1e293b" stroke="#ffd43b" strokeWidth="2" />
            {/* Heavy Push Arm to blade */}
            <path
              d="M95 130 L220 134 L258 126 L262 136 L216 142 L95 136 Z"
              fill="#f59e0b"
              stroke="#b45309"
              strokeWidth="1.5"
            />
            {/* Hydraulic Lift Cylinder */}
            <path d="M155 86 L224 122" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
            <path d="M175 97 L222 121" stroke="url(#chromePiston)" strokeWidth="4.5" strokeLinecap="round" />

            {/* BULLDOZER BLADE (Heavy-Duty Curved Steel) */}
            {/* Blade Backing */}
            <path
              d="M255 78 L272 74 L276 150 L256 150 Z"
              fill="#92400e"
            />
            {/* Curved Front Blade Moldboard */}
            <path
              d="M260 72 C285 88 285 138 262 152 L285 152 C305 136 305 84 278 72 Z"
              fill="url(#bladeSteel)"
              stroke="#78350f"
              strokeWidth="2"
            />
            {/* Blade Top Reinforcement Spill Guard */}
            <path d="M262 72 L278 72 L282 66 L264 66 Z" fill="#b45309" stroke="#78350f" strokeWidth="1" />
            {/* Blade Cutting Edge (Base wear-plate) with Hazard Pattern */}
            <rect x="264" y="146" width="22" height="6" fill="url(#hazardStripe)" stroke="#0f172a" strokeWidth="1" />
            {/* Corner Blade Teeth / End Bits */}
            <polygon points="284,146 294,152 284,152" fill="#475569" stroke="#0f172a" strokeWidth="1" />

            {/* CONTINUOUS CRAWLER TRACK SYSTEM */}
            {/* Track Frame Housing */}
            <rect
              x="52"
              y="114"
              width="170"
              height="38"
              rx="19"
              fill="url(#trackDark)"
              stroke="#0f172a"
              strokeWidth="4"
            />

            {/* Drive Sprocket (Rear) */}
            <circle cx="70" cy="133" r="15" fill="#1e293b" stroke="#475569" strokeWidth="3" />
            <circle cx="70" cy="133" r="6" fill="#ffd43b" />
            {/* Sprocket Teeth */}
            <path d="M70 115 V119 M70 147 V151 M52 133 H56 M84 133 H88" stroke="#ffd43b" strokeWidth="3" />

            {/* Front Idler Wheel */}
            <circle cx="202" cy="133" r="15" fill="#1e293b" stroke="#475569" strokeWidth="3" />
            <circle cx="202" cy="133" r="6" fill="#ffd43b" />
            {/* Idler Spokes */}
            <line x1="192" y1="123" x2="212" y2="143" stroke="#475569" strokeWidth="2.5" />
            <line x1="192" y1="143" x2="212" y2="123" stroke="#475569" strokeWidth="2.5" />

            {/* Track Rollers (Bottom Bogies) */}
            <circle cx="100" cy="136" r="10" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />
            <circle cx="100" cy="136" r="3.5" fill="#ffd43b" />

            <circle cx="127" cy="136" r="10" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />
            <circle cx="127" cy="136" r="3.5" fill="#ffd43b" />

            <circle cx="154" cy="136" r="10" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />
            <circle cx="154" cy="136" r="3.5" fill="#ffd43b" />

            <circle cx="178" cy="136" r="10" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />
            <circle cx="178" cy="136" r="3.5" fill="#ffd43b" />

            {/* Top Carrier Return Roller */}
            <circle cx="138" cy="116" r="6" fill="#0f172a" stroke="#64748b" strokeWidth="2" />

            {/* Track Shoes / Grouser Cleats (Treads) */}
            <g stroke="#64748b" strokeWidth="2" strokeLinecap="round">
              <line x1="68" y1="152" x2="74" y2="152" />
              <line x1="84" y1="152" x2="90" y2="152" />
              <line x1="100" y1="152" x2="106" y2="152" />
              <line x1="116" y1="152" x2="122" y2="152" />
              <line x1="132" y1="152" x2="138" y2="152" />
              <line x1="148" y1="152" x2="154" y2="152" />
              <line x1="164" y1="152" x2="170" y2="152" />
              <line x1="180" y1="152" x2="186" y2="152" />
              <line x1="196" y1="152" x2="202" y2="152" />
            </g>

            {/* Dust & Gravel specks thrown by blade (subtle action) */}
            <circle cx="288" cy="148" r="2" fill="#d97706" />
            <circle cx="295" cy="144" r="1.5" fill="#f59e0b" />
            <circle cx="282" cy="154" r="2.5" fill="#78350f" />
            <circle cx="298" cy="151" r="1.8" fill="#b45309" />
          </svg>
        </div>
      </div>
    </div>
  );
};
