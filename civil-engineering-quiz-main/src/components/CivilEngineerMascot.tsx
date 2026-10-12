import React from 'react';
import { Sparkles } from 'lucide-react';

interface CivilEngineerMascotProps {
  className?: string;
}

export const CivilEngineerMascot: React.FC<CivilEngineerMascotProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
    >
      {/* Speech Bubble Greeting */}
      <div className="mb-2 relative">
        <div className="bg-[#051d38]/95 border border-[#20e7ff] text-[#e0f7fa] px-3.5 py-1.5 rounded-xl shadow-[0_0_15px_rgba(32,231,255,0.35)] backdrop-blur-md text-[11px] sm:text-xs font-bold tracking-wide flex items-center gap-1.5 whitespace-nowrap leading-snug">
          <Sparkles className="w-3.5 h-3.5 text-[#ffd43b] shrink-0 animate-pulse" />
          <span>Hey Engineer! Ready for Quick Fire? 👋</span>
        </div>
        {/* Pointer */}
        <div className="w-2.5 h-2.5 bg-[#051d38] border-r border-b border-[#20e7ff] rotate-45 mx-auto -mt-1.5 shadow-sm" />
      </div>

      {/* Engineer Character Container with Idle Floating and Arm Waving */}
      <div className="engineer-float relative">
        <svg
          viewBox="0 0 200 240"
          className="w-36 sm:w-44 md:w-52 h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
        >
          <defs>
            {/* Hardhat Gradient */}
            <linearGradient id="hardhatYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffeb3b" />
              <stop offset="50%" stopColor="#fbc02d" />
              <stop offset="100%" stopColor="#f57f17" />
            </linearGradient>

            {/* Safety Vest Orange */}
            <linearGradient id="vestOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff7043" />
              <stop offset="70%" stopColor="#f4511e" />
              <stop offset="100%" stopColor="#d84315" />
            </linearGradient>

            {/* Reflective Strip Gradient */}
            <linearGradient id="reflectiveSilver" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#cffafe" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#a5f3fc" />
            </linearGradient>

            {/* Blue Denim / Utility Shirt */}
            <linearGradient id="shirtBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0f1f33" />
            </linearGradient>

            {/* Skin Tone */}
            <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffdfba" />
              <stop offset="100%" stopColor="#f1b98a" />
            </linearGradient>
          </defs>

          {/* Ground Soft Shadow */}
          <ellipse cx="100" cy="232" rx="46" ry="7" fill="rgba(3, 19, 40, 0.45)" />

          {/* LEGS & BOOTS */}
          <g id="engineer-legs">
            {/* Left Leg */}
            <path d="M78 160 L74 212 L92 212 L94 160 Z" fill="#1b2838" />
            {/* Right Leg */}
            <path d="M106 160 L108 212 L126 212 L122 160 Z" fill="#152230" />

            {/* Steel Toe Boots */}
            {/* Left Boot */}
            <path
              d="M70 210 C70 208, 93 208, 93 210 L94 222 C94 226, 64 226, 64 222 L64 218 C64 214, 70 210, 70 210 Z"
              fill="#b45309"
              stroke="#78350f"
              strokeWidth="1.5"
            />
            <rect x="62" y="222" width="34" height="4" rx="2" fill="#1c1917" />

            {/* Right Boot */}
            <path
              d="M107 210 C107 208, 130 208, 130 210 L136 218 C136 222, 136 226, 106 226 L106 222 Z"
              fill="#9a3412"
              stroke="#78350f"
              strokeWidth="1.5"
            />
            <rect x="105" y="222" width="34" height="4" rx="2" fill="#1c1917" />
          </g>

          {/* TORSO & HI-VIS VEST */}
          <g id="engineer-torso">
            {/* Utility Shirt */}
            <path d="M68 96 L132 96 L136 165 L64 165 Z" fill="url(#shirtBlue)" />

            {/* Safety High-Vis Vest Base */}
            <path
              d="M66 100 L86 100 L95 140 L105 140 L114 100 L134 100 L138 162 L62 162 Z"
              fill="url(#vestOrange)"
              stroke="#ea580c"
              strokeWidth="1.5"
            />

            {/* Reflective Vertical Stripes */}
            <path d="M80 100 L84 162 L90 162 L87 100 Z" fill="url(#reflectiveSilver)" opacity="0.95" />
            <path d="M120 100 L116 162 L110 162 L113 100 Z" fill="url(#reflectiveSilver)" opacity="0.95" />

            {/* Reflective Horizontal Stripe */}
            <rect x="63" y="142" width="74" height="7" fill="url(#reflectiveSilver)" opacity="0.95" />

            {/* Safety Vest Front Zipper / Opening */}
            <line x1="100" y1="140" x2="100" y2="162" stroke="#431407" strokeWidth="2" />

            {/* Civil Engineer ID Badge & Pen */}
            <rect x="70" y="112" width="14" height="18" rx="2" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <line x1="73" y1="116" x2="81" y2="116" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="73" y1="120" x2="79" y2="120" stroke="#64748b" strokeWidth="1" />
            <line x1="73" y1="124" x2="81" y2="124" stroke="#64748b" strokeWidth="1" />
            {/* Ballpoint pen clipped */}
            <line x1="88" y1="108" x2="88" y2="120" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />

            {/* Utility Belt */}
            <rect x="62" y="159" width="76" height="8" rx="1.5" fill="#1e293b" />
            <rect x="94" y="158" width="12" height="10" rx="1.5" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            {/* Measuring Tape on Belt */}
            <rect x="122" y="158" width="11" height="11" rx="2.5" fill="#eab308" stroke="#713f12" strokeWidth="1" />
          </g>

          {/* LEFT ARM (Holding Rolled Engineering Blueprint) */}
          <g id="engineer-left-arm">
            {/* Left Upper Arm */}
            <path d="M68 100 L48 132 L60 140 L76 108 Z" fill="url(#shirtBlue)" />
            {/* Left Forearm */}
            <path d="M50 132 L68 152 L78 142 L60 126 Z" fill="url(#skinTone)" />

            {/* Blueprint Scroll Tube */}
            <g transform="rotate(-28 65 142)">
              <rect x="30" y="136" width="68" height="14" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Technical Grid Blueprint Lines on Scroll */}
              <line x1="38" y1="139" x2="90" y2="139" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="38" y1="143" x2="90" y2="143" stroke="#bae6fd" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="38" y1="147" x2="86" y2="147" stroke="#bae6fd" strokeWidth="1" />
              {/* Scroll Rolled Edges */}
              <ellipse cx="30" cy="143" rx="3.5" ry="7" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
              <ellipse cx="98" cy="143" rx="3.5" ry="7" fill="#38bdf8" />
            </g>

            {/* Left Hand Holding Scroll */}
            <circle cx="68" cy="143" r="7" fill="url(#skinTone)" />
          </g>

          {/* HEAD, NECK & FACE */}
          <g id="engineer-head">
            {/* Neck */}
            <path d="M92 90 L108 90 L108 102 L92 102 Z" fill="url(#skinTone)" />

            {/* Head Contour */}
            <ellipse cx="100" cy="72" rx="22" ry="24" fill="url(#skinTone)" />
            {/* Ears */}
            <ellipse cx="78" cy="73" rx="4.5" ry="7" fill="url(#skinTone)" />
            <ellipse cx="122" cy="73" rx="4.5" ry="7" fill="url(#skinTone)" />

            {/* Eyebrows */}
            <path d="M88 64 Q94 61 98 64" fill="none" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M102 64 Q106 61 112 64" fill="none" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />

            {/* Eyes - Happy & Confident */}
            <ellipse cx="93" cy="71" rx="3.5" ry="4" fill="#0f172a" />
            <circle cx="94.5" cy="69.5" r="1.3" fill="#ffffff" />
            <ellipse cx="107" cy="71" rx="3.5" ry="4" fill="#0f172a" />
            <circle cx="108.5" cy="69.5" r="1.3" fill="#ffffff" />

            {/* Friendly Smile */}
            <path d="M93 81 Q100 89 107 81" fill="none" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="86" cy="76" r="3.5" fill="#f87171" opacity="0.35" />
            <circle cx="114" cy="76" r="3.5" fill="#f87171" opacity="0.35" />

            {/* Safety Glasses / Goggles resting stylishly on forehead */}
            <g id="safety-glasses">
              {/* Strap */}
              <path d="M78 58 Q100 52 122 58" fill="none" stroke="#0f172a" strokeWidth="3" />
              {/* Left Lens */}
              <rect
                x="83"
                y="50"
                width="15"
                height="10"
                rx="3"
                fill="#38bdf8"
                fillOpacity="0.75"
                stroke="#0284c7"
                strokeWidth="1.5"
              />
              {/* Right Lens */}
              <rect
                x="102"
                y="50"
                width="15"
                height="10"
                rx="3"
                fill="#38bdf8"
                fillOpacity="0.75"
                stroke="#0284c7"
                strokeWidth="1.5"
              />
              {/* Bridge */}
              <line x1="98" y1="54" x2="102" y2="54" stroke="#0284c7" strokeWidth="2" />
            </g>

            {/* CIVIL ENGINEER HARDHAT (YELLOW SAFETY HELMET) */}
            <g id="hardhat">
              {/* Helmet Dome Base */}
              <path
                d="M72 56 C72 26, 128 26, 128 56 Z"
                fill="url(#hardhatYellow)"
                stroke="#d97706"
                strokeWidth="2"
              />
              {/* Helmet Top Impact Ridge */}
              <path
                d="M96 26 C96 26, 100 24, 104 26 L105 52 L95 52 Z"
                fill="#fde047"
                stroke="#d97706"
                strokeWidth="1"
              />
              {/* Helmet Front Sturdy Brim */}
              <path
                d="M66 54 C74 50, 126 50, 134 54 C136 57, 132 60, 100 60 C68 60, 64 57, 66 54 Z"
                fill="#f59e0b"
                stroke="#b45309"
                strokeWidth="2"
              />
              {/* Front Safety Emblem / Cross Badge */}
              <circle cx="100" cy="42" r="5.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
              <path d="M100 39 V45 M97 42 H103" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          {/* RIGHT ARM (ANIMATED WAVING ARM & GLOVE) */}
          <g id="engineer-right-arm">
            {/* Right Shoulder & Upper Arm */}
            <path d="M130 102 L150 120 L140 128 L122 108 Z" fill="url(#shirtBlue)" />

            {/* Waving Forearm & Hand Group - Pivoting at Elbow (148, 124) */}
            <g className="engineer-waving-arm origin-[148px_124px]">
              {/* Forearm extending upwards */}
              <path
                d="M144 122 L166 82 L178 87 L154 130 Z"
                fill="url(#skinTone)"
                stroke="#ea580c"
                strokeWidth="0.5"
              />

              {/* Safety Cuff / Watch */}
              <rect x="162" y="80" width="16" height="5" rx="1.5" fill="#0284c7" />

              {/* Waving Hand & Fingers */}
              <g id="waving-hand" transform="translate(162, 48)">
                {/* Palm */}
                <ellipse cx="12" cy="24" rx="9" ry="10" fill="url(#skinTone)" />
                {/* Thumb */}
                <path
                  d="M4 25 C1 23, 2 17, 7 18 L10 22 Z"
                  fill="url(#skinTone)"
                  stroke="#ea580c"
                  strokeWidth="0.5"
                />
                {/* Index Finger */}
                <path
                  d="M6 16 C5 8, 10 7, 10 16 Z"
                  fill="url(#skinTone)"
                  stroke="#ea580c"
                  strokeWidth="0.5"
                />
                {/* Middle Finger (tallest) */}
                <path
                  d="M11 14 C11 5, 16 5, 16 14 Z"
                  fill="url(#skinTone)"
                  stroke="#ea580c"
                  strokeWidth="0.5"
                />
                {/* Ring Finger */}
                <path
                  d="M16 16 C16 7, 21 8, 20 16 Z"
                  fill="url(#skinTone)"
                  stroke="#ea580c"
                  strokeWidth="0.5"
                />
                {/* Pinky Finger */}
                <path
                  d="M20 19 C21 12, 25 14, 24 20 Z"
                  fill="url(#skinTone)"
                  stroke="#ea580c"
                  strokeWidth="0.5"
                />
              </g>

              {/* Friendly Waving Motion Waves (Cyan & Gold sparkle arcs) */}
              <path
                d="M186 52 C191 58, 191 66, 186 72"
                fill="none"
                stroke="#20e7ff"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M192 48 C200 58, 200 70, 192 80"
                fill="none"
                stroke="#ffd43b"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.75"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
