import './AnatomyFigure.css'

export function AnatomyFigure() {
  return (
    <div className="anatomy-figure" aria-hidden="true">
      <svg
        className="anatomy-figure__svg"
        viewBox="0 0 280 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="musclePink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff007f" />
            <stop offset="100%" stopColor="#c4005f" />
          </linearGradient>
          <linearGradient id="muscleBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2ff" />
            <stop offset="100%" stopColor="#0088cc" />
          </linearGradient>
          <linearGradient id="boneYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffe566" />
            <stop offset="100%" stopColor="#d4a017" />
          </linearGradient>
          <linearGradient id="heartRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3131" />
            <stop offset="100%" stopColor="#cc0033" />
          </linearGradient>
          <radialGradient id="skullGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Legs */}
        <path
          d="M108 380 L98 520 M172 380 L182 520"
          stroke="url(#musclePink)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M108 380 L98 520 M172 380 L182 520"
          stroke="url(#muscleBlue)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M115 420 L110 480 M165 420 L170 480"
          stroke="url(#boneYellow)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Pelvis / hips */}
        <ellipse cx="140" cy="365" rx="52" ry="18" fill="url(#musclePink)" opacity="0.85" />
        <path
          d="M95 355 Q140 340 185 355"
          stroke="url(#boneYellow)"
          strokeWidth="3"
          fill="none"
        />

        {/* Torso muscles */}
        <path
          d="M95 200 Q88 280 95 355 Q140 375 185 355 Q192 280 185 200 Q140 190 95 200"
          fill="url(#musclePink)"
          opacity="0.75"
        />
        <path
          d="M110 210 Q105 280 112 340 M170 210 Q175 280 168 340"
          stroke="url(#muscleBlue)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Ribcage */}
        <path
          d="M105 195 Q95 230 100 270 Q140 285 180 270 Q185 230 175 195"
          stroke="url(#boneYellow)"
          strokeWidth="2.5"
          fill="none"
        />
        {[210, 225, 240, 255].map((y) => (
          <path
            key={y}
            d={`M108 ${y} Q140 ${y + 8} 172 ${y}`}
            stroke="url(#boneYellow)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
          />
        ))}

        {/* Spine */}
        <path
          d="M140 120 L140 350"
          stroke="url(#boneYellow)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Lungs */}
        <ellipse cx="118" cy="230" rx="22" ry="38" fill="url(#muscleBlue)" opacity="0.55" />
        <ellipse cx="162" cy="230" rx="22" ry="38" fill="url(#muscleBlue)" opacity="0.55" />

        {/* Heart */}
        <path
          d="M140 250 C130 235 115 240 118 255 C120 270 140 285 140 285 C140 285 160 270 162 255 C165 240 150 235 140 250"
          fill="url(#heartRed)"
        />

        {/* Arms */}
        <path
          d="M95 200 Q55 240 48 310 Q45 350 52 380"
          stroke="url(#musclePink)"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M185 200 Q225 240 232 310 Q235 350 228 380"
          stroke="url(#musclePink)"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M95 200 Q55 240 48 310 Q45 350 52 380"
          stroke="url(#muscleBlue)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M185 200 Q225 240 232 310 Q235 350 228 380"
          stroke="url(#muscleBlue)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Shoulders */}
        <ellipse cx="140" cy="195" rx="58" ry="14" fill="url(#musclePink)" opacity="0.6" />

        {/* Neck */}
        <rect x="128" y="155" width="24" height="42" rx="8" fill="url(#musclePink)" opacity="0.65" />

        {/* Skull */}
        <ellipse cx="140" cy="105" rx="42" ry="48" fill="url(#muscleBlue)" opacity="0.35" />
        <ellipse cx="140" cy="105" rx="42" ry="48" fill="url(#skullGlow)" />
        <ellipse cx="140" cy="105" rx="38" ry="44" stroke="url(#boneYellow)" strokeWidth="2" fill="none" />

        {/* Facial structure */}
        <ellipse cx="140" cy="108" rx="28" ry="32" fill="none" stroke="url(#boneYellow)" strokeWidth="1.5" />
        <path d="M112 95 Q140 88 168 95" stroke="url(#boneYellow)" strokeWidth="1.5" fill="none" />
        <circle cx="125" cy="108" r="4" fill="#ff3131" opacity="0.8" />
        <circle cx="155" cy="108" r="4" fill="#ff3131" opacity="0.8" />
        <path d="M130 130 Q140 138 150 130" stroke="#ff007f" strokeWidth="2" fill="none" />

        {/* Vascular highlights */}
        <path
          d="M140 120 Q150 180 145 240 Q142 300 140 360"
          stroke="#ff3131"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M118 230 Q100 260 90 290"
          stroke="#ff3131"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M162 230 Q180 260 190 290"
          stroke="#ff3131"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Muscle fiber details */}
        <path
          d="M120 300 Q135 310 150 300 M115 320 Q140 332 165 320"
          stroke="#ff007f"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
