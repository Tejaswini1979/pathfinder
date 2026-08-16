export default function StudentIllustration() {
  return (
    <svg
      viewBox="0 0 560 560"
      role="img"
      aria-label="Illustration of a student planning their career with a graduation cap and books"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="grad-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="grad-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eef2ff" />
        </linearGradient>
        <linearGradient id="grad-pill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="14"
            floodColor="#4338ca"
            floodOpacity="0.14"
          />
        </filter>
      </defs>

      <circle cx="90" cy="100" r="110" fill="#e0e7ff" opacity="0.6" />
      <circle cx="472" cy="92" r="72" fill="#ede9fe" />
      <circle cx="472" cy="450" r="132" fill="#e0e7ff" opacity="0.7" />
      <circle cx="110" cy="468" r="82" fill="#ede9fe" opacity="0.7" />
      <circle cx="280" cy="300" r="180" fill="#eef2ff" opacity="0.55" />

      <g transform="translate(66,140) rotate(-8)">
        <rect width="128" height="88" rx="18" fill="url(#grad-card)" stroke="#e0e7ff" strokeWidth="2" filter="url(#soft)" />
        <rect x="20" y="46" width="18" height="28" rx="5" fill="#c7d2fe" />
        <rect x="48" y="30" width="18" height="44" rx="5" fill="#6366f1" />
        <rect x="76" y="38" width="18" height="36" rx="5" fill="#a5b4fc" />
        <path d="M18 82 L110 82" stroke="#e0e7ff" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(352,404) rotate(6)">
        <rect width="142" height="42" rx="21" fill="url(#grad-pill)" filter="url(#soft)" />
        <circle cx="24" cy="21" r="6" fill="#c4b5fd" />
        <text
          x="42"
          y="27"
          fontFamily="var(--font-sans), sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
        >
          Career Match 94%
        </text>
      </g>

      <g transform="translate(344,86) rotate(12)">
        <path d="M4 14 L36 14 L68 14 Z" fill="#4f46e5" />
        <path d="M4 14 L36 36 L68 14 Z" fill="#4338ca" />
        <line x1="36" y1="36" x2="50" y2="50" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="4.5" fill="#f43f5e" />
      </g>

      <g transform="translate(140,398) rotate(-10)">
        <rect x="0" y="0" width="70" height="14" rx="7" fill="#818cf8" />
        <rect x="4" y="-16" width="78" height="16" rx="8" fill="#c7d2fe" />
        <rect x="8" y="-32" width="86" height="16" rx="8" fill="#a78bfa" />
      </g>

      <g transform="translate(250,228)">
        <path d="M0 -9 L3.5 -3.5 L9 0 L3.5 3.5 L0 9 L-3.5 3.5 L-9 0 L-3.5 -3.5 Z" fill="#a5b4fc" />
      </g>
      <g transform="translate(496,190) scale(0.8)">
        <path d="M0 -9 L3.5 -3.5 L9 0 L3.5 3.5 L0 9 L-3.5 3.5 L-9 0 L-3.5 -3.5 Z" fill="#c4b5fd" />
      </g>
      <g transform="translate(128,272) scale(0.65)">
        <path d="M0 -9 L3.5 -3.5 L9 0 L3.5 3.5 L0 9 L-3.5 3.5 L-9 0 L-3.5 -3.5 Z" fill="#818cf8" />
      </g>

      <g>
        <rect
          x="150"
          y="168"
          width="260"
          height="264"
          rx="34"
          fill="url(#grad-card)"
          stroke="#e0e7ff"
          strokeWidth="2"
          transform="rotate(-6 280 300)"
          filter="url(#soft)"
        />
        <g transform="rotate(-6 280 300)">
          <rect x="192" y="210" width="176" height="14" rx="7" fill="#c7d2fe" />
          <rect x="192" y="238" width="120" height="10" rx="5" fill="#e0e7ff" />
        </g>
      </g>

      <ellipse cx="283" cy="452" rx="100" ry="17" fill="#a5b4fc" opacity="0.45" />

      <g>
        <rect x="248" y="352" width="32" height="90" rx="15" fill="#4338ca" />
        <rect x="286" y="352" width="32" height="90" rx="15" fill="#3730a3" />
        <ellipse cx="261" cy="450" rx="25" ry="11" fill="#312e81" />
        <ellipse cx="304" cy="450" rx="25" ry="11" fill="#312e81" />
      </g>

      <g>
        <rect x="326" y="266" width="44" height="66" rx="15" fill="#7c3aed" />
        <rect x="346" y="254" width="7" height="16" rx="3.5" fill="#7c3aed" />
      </g>

      <g>
        <rect x="240" y="252" width="88" height="120" rx="32" fill="url(#grad-body)" />
      </g>

      <g>
        <rect x="230" y="272" width="21" height="80" rx="10.5" fill="#6366f1" />
        <circle cx="240" cy="358" r="11" fill="#fcd9b8" />
        <rect x="314" y="276" width="21" height="68" rx="10.5" fill="#8b5cf6" />
        <circle cx="324" cy="350" r="11" fill="#fcd9b8" />
      </g>

      <g transform="translate(258,330) rotate(-6)">
        <rect width="74" height="42" rx="9" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="2" />
        <rect x="34" y="0" width="5" height="42" fill="#a5b4fc" />
        <rect x="46" y="12" width="20" height="4" rx="2" fill="#c7d2fe" />
        <rect x="46" y="20" width="14" height="4" rx="2" fill="#e0e7ff" />
      </g>

      <g>
        <ellipse cx="282" cy="190" rx="41" ry="34" fill="#5d4037" />
        <circle cx="282" cy="214" r="34" fill="#fcd9b8" />
        <circle cx="268" cy="216" r="4" fill="#312e81" />
        <circle cx="296" cy="216" r="4" fill="#312e81" />
        <path
          d="M 270 232 Q 282 243 294 232"
          fill="none"
          stroke="#312e81"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
