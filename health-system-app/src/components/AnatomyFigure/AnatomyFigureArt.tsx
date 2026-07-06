export function AnatomyFigureArt() {
  return (
    <svg
      className="anatomy-figure__svg"
      viewBox="0 0 336 708"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="musclePink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff007f" />
          <stop offset="100%" stopColor="#b80058" />
        </linearGradient>
        <linearGradient id="musclePinkSoft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff007f" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8f0048" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="cyanOrgan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00f2ff" />
          <stop offset="100%" stopColor="#0084aa" />
        </linearGradient>
        <linearGradient id="cyanSoft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#006688" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="boneTone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c89a1e" />
        </linearGradient>
        <linearGradient id="heartRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff3131" />
          <stop offset="100%" stopColor="#b00020" />
        </linearGradient>
        <radialGradient id="headGlow" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="figureClip">
          <rect x="0" y="0" width="336" height="708" rx="0" />
        </clipPath>
      </defs>

      <g clipPath="url(#figureClip)">
        {/* Thighs */}
        <path
          d="M118 392 C108 470 102 560 98 708 M218 392 C228 470 234 560 238 708"
          stroke="url(#musclePinkSoft)"
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          d="M118 392 C108 470 102 560 98 708 M218 392 C228 470 234 560 238 708"
          stroke="url(#cyanSoft)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M124 450 L118 560 M212 450 L218 560"
          stroke="url(#boneTone)"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M132 520 Q168 535 204 520"
          stroke="url(#musclePink)"
          strokeWidth="2"
          opacity="0.45"
        />

        {/* Pelvis */}
        <path
          d="M96 360 Q168 388 240 360 Q252 378 240 396 Q168 414 96 396 Q84 378 96 360"
          fill="url(#musclePinkSoft)"
          opacity="0.82"
        />
        <path
          d="M108 372 Q168 382 228 372"
          stroke="url(#boneTone)"
          strokeWidth="2.5"
          fill="none"
        />
        <ellipse cx="168" cy="378" rx="18" ry="10" stroke="url(#boneTone)" strokeWidth="1.5" />

        {/* Torso outer musculature */}
        <path
          d="M98 188 Q82 260 88 350 Q96 392 118 392 Q168 402 218 392 Q240 392 248 350 Q254 260 238 188 Q168 176 98 188"
          fill="url(#musclePinkSoft)"
          opacity="0.78"
        />
        <path
          d="M118 210 Q112 280 118 350 M218 210 Q224 280 218 350"
          stroke="url(#musclePink)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M138 240 Q168 252 198 240 M132 280 Q168 294 204 280 M128 320 Q168 334 208 320"
          stroke="#ff007f"
          strokeWidth="1.2"
          opacity="0.35"
        />

        {/* Ribcage */}
        <path
          d="M108 186 Q96 220 100 258 Q168 276 236 258 Q240 220 228 186"
          stroke="url(#boneTone)"
          strokeWidth="2.2"
          fill="none"
        />
        {[204, 218, 232, 246, 260].map((y) => (
          <path
            key={y}
            d={`M112 ${y} Q168 ${y + 7} 224 ${y}`}
            stroke="url(#boneTone)"
            strokeWidth="1.4"
            opacity="0.82"
          />
        ))}

        {/* Spine */}
        <path
          d="M168 118 L168 372"
          stroke="url(#boneTone)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {[140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((y) => (
          <path
            key={y}
            d={`M158 ${y} L178 ${y}`}
            stroke="url(#boneTone)"
            strokeWidth="1.2"
            opacity="0.65"
          />
        ))}

        {/* Lungs */}
        <path
          d="M118 214 Q102 230 98 258 Q96 286 104 308 Q118 318 132 300 Q136 268 128 238 Q124 220 118 214"
          fill="url(#cyanOrgan)"
          opacity="0.52"
        />
        <path
          d="M218 214 Q234 230 238 258 Q240 286 232 308 Q218 318 204 300 Q200 268 208 238 Q212 220 218 214"
          fill="url(#cyanOrgan)"
          opacity="0.52"
        />
        <path
          d="M124 240 Q118 270 122 296 M212 240 Q218 270 214 296"
          stroke="#00f2ff"
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Heart */}
        <path
          d="M168 252 C156 236 138 242 140 260 C142 278 168 296 168 296 C168 296 194 278 196 260 C198 242 180 236 168 252"
          fill="url(#heartRed)"
        />
        <path
          d="M168 252 L168 286 M158 268 L178 268"
          stroke="#ff3131"
          strokeWidth="1"
          opacity="0.55"
        />

        {/* Liver / stomach hints */}
        <path
          d="M188 286 Q210 302 206 332 Q188 342 176 322 Q174 302 188 286"
          fill="#ff007f"
          opacity="0.35"
        />
        <path
          d="M148 292 Q132 312 136 334 Q152 342 164 324 Q166 306 148 292"
          fill="url(#cyanSoft)"
          opacity="0.38"
        />

        {/* Arms */}
        <path
          d="M98 188 Q58 228 46 292 Q38 342 44 388"
          stroke="url(#musclePinkSoft)"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M238 188 Q278 228 290 292 Q298 342 292 388"
          stroke="url(#musclePinkSoft)"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M98 188 Q58 228 46 292 Q38 342 44 388"
          stroke="url(#cyanSoft)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M238 188 Q278 228 290 292 Q298 342 292 388"
          stroke="url(#cyanSoft)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M52 300 L48 360 M284 300 L288 360"
          stroke="url(#boneTone)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Shoulders */}
        <path
          d="M98 188 Q168 198 238 188"
          stroke="url(#musclePink)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Neck */}
        <path
          d="M148 156 Q168 164 188 156 L182 188 Q168 194 154 188 Z"
          fill="url(#musclePinkSoft)"
          opacity="0.72"
        />
        <path
          d="M158 162 L158 186 M178 162 L178 186"
          stroke="url(#boneTone)"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Head base */}
        <ellipse cx="168" cy="92" rx="46" ry="52" fill="url(#headGlow)" />
        <ellipse cx="168" cy="92" rx="44" ry="50" fill="url(#cyanSoft)" opacity="0.42" />

        {/* Skull */}
        <path
          d="M168 38 C132 38 108 58 108 92 C108 126 132 148 168 148 C204 148 228 126 228 92 C228 58 204 38 168 38"
          stroke="url(#boneTone)"
          strokeWidth="2.2"
          fill="none"
        />
        <path
          d="M128 72 Q168 58 208 72"
          stroke="url(#boneTone)"
          strokeWidth="1.8"
          fill="none"
        />
        <ellipse cx="168" cy="96" rx="30" ry="34" stroke="url(#boneTone)" strokeWidth="1.4" fill="none" />

        {/* Brain */}
        <path
          d="M142 62 Q168 48 194 62 Q204 78 194 94 Q168 104 142 94 Q132 78 142 62"
          fill="url(#cyanOrgan)"
          opacity="0.38"
        />
        <path
          d="M148 72 Q168 66 188 72 M150 84 Q168 78 186 84"
          stroke="#00f2ff"
          strokeWidth="0.9"
          opacity="0.55"
        />

        {/* Face */}
        <circle cx="148" cy="98" r="5" fill="#ff3131" opacity="0.85" />
        <circle cx="188" cy="98" r="5" fill="#ff3131" opacity="0.85" />
        <path d="M152 122 Q168 132 184 122" stroke="#ff007f" strokeWidth="1.8" fill="none" />
        <path d="M168 108 L168 128" stroke="url(#boneTone)" strokeWidth="1.2" opacity="0.55" />

        {/* Major vessels */}
        <path
          d="M168 118 Q178 180 172 240 Q168 300 168 360"
          stroke="#ff3131"
          strokeWidth="1.6"
          opacity="0.62"
        />
        <path
          d="M168 240 Q148 258 132 278 M168 240 Q188 258 204 278"
          stroke="#ff3131"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <path
          d="M168 180 Q198 196 214 220 M168 180 Q138 196 122 220"
          stroke="#00f2ff"
          strokeWidth="1"
          opacity="0.42"
        />
        <path
          d="M132 300 Q118 330 108 360 M204 300 Q218 330 228 360"
          stroke="#ff3131"
          strokeWidth="1"
          opacity="0.38"
        />

        {/* Fine muscle striations */}
        <path
          d="M126 360 Q148 372 168 368 Q188 372 210 360"
          stroke="#ff007f"
          strokeWidth="0.9"
          opacity="0.35"
        />
        <path
          d="M108 300 Q138 318 168 322 Q198 318 228 300"
          stroke="#ff007f"
          strokeWidth="0.8"
          opacity="0.28"
        />
        <path
          d="M112 220 Q140 232 168 234 Q196 232 224 220"
          stroke="#00f2ff"
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* Collar bones */}
        <path
          d="M128 168 Q168 176 208 168"
          stroke="url(#boneTone)"
          strokeWidth="2"
          opacity="0.75"
        />
      </g>
    </svg>
  )
}
