import React from 'react';

interface CuteBearsProps {
  scene: 'comforting' | 'together' | 'side-by-side';
  className?: string;
}

export function CuteBears({ scene, className = '' }: CuteBearsProps) {
  if (scene === 'comforting') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg
          viewBox="0 0 320 220"
          className="w-full max-w-[280px] sm:max-w-[320px] h-auto drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground / Rug */}
          <ellipse cx="160" cy="200" rx="140" ry="14" fill="#eedec9" opacity="0.6" />
          <ellipse cx="160" cy="200" rx="110" ry="9" fill="#e2cfb7" opacity="0.4" />

          {/* Steaming Mug */}
          <g transform="translate(145, 175)">
            <rect x="0" y="5" width="22" height="18" rx="4" fill="#faf5ec" stroke="#b09b85" strokeWidth="1.5" />
            <path d="M22 8c4 0 6 3 6 6s-2 6-6 6" stroke="#b09b85" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Gentle steam */}
            <path d="M7 1c-1-3 1-5 0-7" stroke="#caa992" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <path d="M14 0c1-3-1-5 0-7" stroke="#caa992" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="11" cy="7" rx="8" ry="2" fill="#d49b77" />
          </g>

          {/* LEFT BEAR (Being comforted, looking down softly) */}
          <g id="left-bear">
            {/* Body */}
            <path
              d="M75 195 C75 140 100 135 125 135 C150 135 155 155 150 195 Z"
              fill="#d9bba0"
              stroke="#8a694f"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Tummy */}
            <ellipse cx="115" cy="170" rx="18" ry="20" fill="#edd9c7" />

            {/* Left Ear */}
            <circle cx="90" cy="85" r="14" fill="#d9bba0" stroke="#8a694f" strokeWidth="2" />
            <circle cx="90" cy="85" r="7" fill="#edd9c7" />

            {/* Right Ear */}
            <circle cx="132" cy="88" r="14" fill="#d9bba0" stroke="#8a694f" strokeWidth="2" />
            <circle cx="132" cy="88" r="7" fill="#edd9c7" />

            {/* Head */}
            <circle cx="110" cy="108" r="30" fill="#d9bba0" stroke="#8a694f" strokeWidth="2" />

            {/* Snout */}
            <ellipse cx="108" cy="116" rx="12" ry="9" fill="#edd9c7" />
            <ellipse cx="108" cy="112" rx="4" ry="2.5" fill="#5a4233" />
            <path d="M108 115v4" stroke="#5a4233" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M105 120q3 2 6 0" stroke="#5a4233" strokeWidth="1.2" strokeLinecap="round" />

            {/* Gentle softly closed eyes (reflective, vulnerable) */}
            <path d="M96 106q4 3 8 0" stroke="#5a4233" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M118 107q4 3 8 0" stroke="#5a4233" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Blush cheeks */}
            <ellipse cx="94" cy="115" rx="5" ry="3.5" fill="#f2a89f" opacity="0.6" />
            <ellipse cx="124" cy="116" rx="5" ry="3.5" fill="#f2a89f" opacity="0.6" />

            {/* Soft knitted scarf */}
            <path
              d="M90 133 C95 128 125 128 135 133 C138 139 125 145 110 144 C95 143 88 137 90 133 Z"
              fill="#c49a88"
              stroke="#8a5e4b"
              strokeWidth="1.5"
            />
            <path d="M125 135 L129 160 L118 162 L115 136 Z" fill="#b58775" stroke="#8a5e4b" strokeWidth="1.2" />
          </g>

          {/* RIGHT BEAR (Comforting, leaning in gently with hand on left bear's shoulder) */}
          <g id="right-bear">
            {/* Body */}
            <path
              d="M170 195 C165 140 195 130 220 130 C245 130 255 150 250 195 Z"
              fill="#cfa98b"
              stroke="#7c583f"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Tummy */}
            <ellipse cx="215" cy="170" rx="18" ry="21" fill="#e8cfb8" />

            {/* Ears */}
            <circle cx="188" cy="80" r="14" fill="#cfa98b" stroke="#7c583f" strokeWidth="2" />
            <circle cx="188" cy="80" r="7" fill="#e8cfb8" />

            <circle cx="230" cy="82" r="14" fill="#cfa98b" stroke="#7c583f" strokeWidth="2" />
            <circle cx="230" cy="82" r="7" fill="#e8cfb8" />

            {/* Head */}
            <circle cx="208" cy="102" r="29" fill="#cfa98b" stroke="#7c583f" strokeWidth="2" />

            {/* Snout */}
            <ellipse cx="204" cy="110" rx="11" ry="8" fill="#e8cfb8" />
            <ellipse cx="203" cy="107" rx="3.5" ry="2.2" fill="#503728" />
            <path d="M203 109v3" stroke="#503728" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M200 114q3 2 6 0" stroke="#503728" strokeWidth="1.2" strokeLinecap="round" />

            {/* Kind, gentle caring eyes */}
            <circle cx="196" cy="100" r="2.5" fill="#503728" />
            <circle cx="195" cy="99" r="0.9" fill="#ffffff" />
            <circle cx="216" cy="101" r="2.5" fill="#503728" />
            <circle cx="215" cy="100" r="0.9" fill="#ffffff" />

            {/* Blush */}
            <ellipse cx="190" cy="108" rx="5" ry="3.5" fill="#f2a89f" opacity="0.6" />
            <ellipse cx="220" cy="109" rx="5" ry="3.5" fill="#f2a89f" opacity="0.6" />

            {/* Comforting Arm reaching out across to left bear's back */}
            <path
              d="M185 140 C165 140 148 142 135 148 C132 153 138 158 144 156 C156 153 172 150 185 152 Z"
              fill="#cfa98b"
              stroke="#7c583f"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Gentle paw resting on shoulder */}
            <ellipse cx="137" cy="151" rx="6.5" ry="5" fill="#cfa98b" stroke="#7c583f" strokeWidth="1.5" />
          </g>

          {/* Floating tiny soft heart */}
          <g transform="translate(155, 60)">
            <path
              d="M10 18 C10 18 2 13 2 7.5 C2 4.5 4.5 2 7.5 2 C9.2 2 10 3 10 3 C10 3 10.8 2 12.5 2 C15.5 2 18 4.5 18 7.5 C18 13 10 18 10 18 Z"
              fill="#e39a8e"
              opacity="0.85"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (scene === 'together') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg
          viewBox="0 0 300 200"
          className="w-full max-w-[260px] sm:max-w-[290px] h-auto drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Quilt / Picnic Blanket */}
          <path
            d="M40 185 C40 175 260 175 260 185 C260 195 40 195 40 185 Z"
            fill="#ebd5c1"
            stroke="#bda48d"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* Little flowers on ground */}
          <circle cx="55" cy="180" r="3" fill="#f8e7b9" />
          <circle cx="55" cy="180" r="1" fill="#c7914f" />
          <circle cx="245" cy="182" r="3" fill="#f5c2b8" />
          <circle cx="245" cy="182" r="1" fill="#ba6a5e" />

          {/* Bear 1 (Left, honey warm) */}
          <g transform="translate(15, 0)">
            <circle cx="100" cy="76" r="13" fill="#dfbfa3" stroke="#8a694f" strokeWidth="2" />
            <circle cx="100" cy="76" r="6" fill="#f2decd" />
            <circle cx="138" cy="78" r="13" fill="#dfbfa3" stroke="#8a694f" strokeWidth="2" />
            <circle cx="138" cy="78" r="6" fill="#f2decd" />

            <path
              d="M90 180 C88 130 115 125 135 125 C155 125 160 145 158 180 Z"
              fill="#dfbfa3"
              stroke="#8a694f"
              strokeWidth="2"
            />
            <circle cx="120" cy="98" r="27" fill="#dfbfa3" stroke="#8a694f" strokeWidth="2" />

            <ellipse cx="120" cy="106" rx="10" ry="7" fill="#f2decd" />
            <ellipse cx="120" cy="103" rx="3.5" ry="2.2" fill="#503728" />
            <path d="M120 105v3" stroke="#503728" strokeWidth="1.2" />
            <path d="M117 110q3 2 6 0" stroke="#503728" strokeWidth="1.2" fill="none" />

            <circle cx="112" cy="95" r="2.5" fill="#503728" />
            <circle cx="128" cy="96" r="2.5" fill="#503728" />
            <ellipse cx="107" cy="104" rx="4.5" ry="3" fill="#f4aba2" opacity="0.6" />
            <ellipse cx="133" cy="105" rx="4.5" ry="3" fill="#f4aba2" opacity="0.6" />
          </g>

          {/* Bear 2 (Right, soft biscuit) */}
          <g transform="translate(15, 0)">
            <circle cx="155" cy="78" r="13" fill="#d4ad8e" stroke="#7c583f" strokeWidth="2" />
            <circle cx="155" cy="78" r="6" fill="#ebd2bd" />
            <circle cx="193" cy="76" r="13" fill="#d4ad8e" stroke="#7c583f" strokeWidth="2" />
            <circle cx="193" cy="76" r="6" fill="#ebd2bd" />

            <path
              d="M148 180 C146 135 170 125 190 125 C210 125 218 140 216 180 Z"
              fill="#d4ad8e"
              stroke="#7c583f"
              strokeWidth="2"
            />
            <circle cx="174" cy="98" r="27" fill="#d4ad8e" stroke="#7c583f" strokeWidth="2" />

            <ellipse cx="174" cy="106" rx="10" ry="7" fill="#ebd2bd" />
            <ellipse cx="174" cy="103" rx="3.5" ry="2.2" fill="#503728" />
            <path d="M174 105v3" stroke="#503728" strokeWidth="1.2" />
            <path d="M171 110q3 2 6 0" stroke="#503728" strokeWidth="1.2" fill="none" />

            <circle cx="166" cy="96" r="2.5" fill="#503728" />
            <circle cx="182" cy="95" r="2.5" fill="#503728" />
            <ellipse cx="161" cy="105" rx="4.5" ry="3" fill="#f4aba2" opacity="0.6" />
            <ellipse cx="187" cy="104" rx="4.5" ry="3" fill="#f4aba2" opacity="0.6" />
          </g>

          {/* Little paw holding or touching gently in center */}
          <ellipse cx="162" cy="155" rx="6" ry="5" fill="#dfbfa3" stroke="#8a694f" strokeWidth="1.5" />
          <ellipse cx="168" cy="156" rx="6" ry="5" fill="#d4ad8e" stroke="#7c583f" strokeWidth="1.5" />

          {/* Tiny gentle star & heart above */}
          <path
            d="M162 48l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z"
            fill="#e2ba7c"
            opacity="0.8"
          />
        </svg>
      </div>
    );
  }

  // Scene 3: side-by-side (Final Screen)
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 300 200"
        className="w-full max-w-[260px] sm:max-w-[290px] h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft shadow */}
        <ellipse cx="150" cy="180" rx="100" ry="10" fill="#e5d4c1" opacity="0.5" />

        {/* Left Bear */}
        <g transform="translate(10, 0)">
          <circle cx="102" cy="80" r="13" fill="#d9bba0" stroke="#8a694f" strokeWidth="2" />
          <circle cx="102" cy="80" r="6" fill="#edd9c7" />
          <circle cx="138" cy="82" r="13" fill="#d9bba0" stroke="#8a694f" strokeWidth="2" />
          <circle cx="138" cy="82" r="6" fill="#edd9c7" />

          <path
            d="M92 178 C90 135 115 130 135 130 C155 130 160 145 158 178 Z"
            fill="#d9bba0"
            stroke="#8a694f"
            strokeWidth="2"
          />
          <circle cx="120" cy="102" r="27" fill="#d9bba0" stroke="#8a694f" strokeWidth="2" />

          <ellipse cx="120" cy="110" rx="10" ry="7" fill="#edd9c7" />
          <ellipse cx="120" cy="107" rx="3.5" ry="2.2" fill="#503728" />
          <path d="M120 109v3" stroke="#503728" strokeWidth="1.2" />
          <path d="M117 114q3 2 6 0" stroke="#503728" strokeWidth="1.2" fill="none" />

          {/* Calm peaceful eyes */}
          <path d="M110 100q3 2 6 0" stroke="#503728" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M124 100q3 2 6 0" stroke="#503728" strokeWidth="2" strokeLinecap="round" fill="none" />

          <ellipse cx="108" cy="109" rx="4.5" ry="3" fill="#f4aba2" opacity="0.65" />
          <ellipse cx="132" cy="109" rx="4.5" ry="3" fill="#f4aba2" opacity="0.65" />
        </g>

        {/* Right Bear */}
        <g transform="translate(10, 0)">
          <circle cx="162" cy="82" r="13" fill="#cfa98b" stroke="#7c583f" strokeWidth="2" />
          <circle cx="162" cy="82" r="6" fill="#e8cfb8" />
          <circle cx="198" cy="80" r="13" fill="#cfa98b" stroke="#7c583f" strokeWidth="2" />
          <circle cx="198" cy="80" r="6" fill="#e8cfb8" />

          <path
            d="M152 178 C150 135 172 130 192 130 C212 130 218 145 216 178 Z"
            fill="#cfa98b"
            stroke="#7c583f"
            strokeWidth="2"
          />
          <circle cx="180" cy="102" r="27" fill="#cfa98b" stroke="#7c583f" strokeWidth="2" />

          <ellipse cx="180" cy="110" rx="10" ry="7" fill="#e8cfb8" />
          <ellipse cx="180" cy="107" rx="3.5" ry="2.2" fill="#503728" />
          <path d="M180 109v3" stroke="#503728" strokeWidth="1.2" />
          <path d="M177 114q3 2 6 0" stroke="#503728" strokeWidth="1.2" fill="none" />

          <path d="M170 100q3 2 6 0" stroke="#503728" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M184 100q3 2 6 0" stroke="#503728" strokeWidth="2" strokeLinecap="round" fill="none" />

          <ellipse cx="168" cy="109" rx="4.5" ry="3" fill="#f4aba2" opacity="0.65" />
          <ellipse cx="192" cy="109" rx="4.5" ry="3" fill="#f4aba2" opacity="0.65" />
        </g>

        {/* Delicate hand-folded paper flower between them */}
        <g transform="translate(150, 140)">
          <path d="M0 22 C-2 15 -1 8 0 0" stroke="#7d8f69" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="-4" cy="12" rx="4" ry="2.5" fill="#99ac83" transform="rotate(-30 -4 12)" />
          {/* Petals */}
          <circle cx="0" cy="-2" r="4" fill="#faf2ea" stroke="#d5bfa8" strokeWidth="1" />
          <circle cx="-3" cy="1" r="4" fill="#faf2ea" stroke="#d5bfa8" strokeWidth="1" />
          <circle cx="3" cy="1" r="4" fill="#faf2ea" stroke="#d5bfa8" strokeWidth="1" />
          <circle cx="0" cy="1" r="3" fill="#e8bb65" />
        </g>

        {/* Soft pastel heart floating above */}
        <g transform="translate(141, 45)">
          <path
            d="M9 16 C9 16 2 11.5 2 6.5 C2 3.8 4.2 1.8 6.8 1.8 C8.2 1.8 9 2.7 9 2.7 C9 2.7 9.8 1.8 11.2 1.8 C13.8 1.8 16 3.8 16 6.5 C16 11.5 9 16 9 16 Z"
            fill="#e2a095"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
}
