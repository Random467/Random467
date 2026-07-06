import './BackgroundCapsules.css'

const CAPSULES = [
  { top: 48, left: 24, width: 32, height: 9, rotate: 28, opacity: 0.22 },
  { top: 92, left: 310, width: 38, height: 10, rotate: -16, opacity: 0.18 },
  { top: 138, left: 52, width: 24, height: 7, rotate: 54, opacity: 0.16 },
  { top: 176, left: 332, width: 28, height: 8, rotate: -42, opacity: 0.2 },
  { top: 228, left: 14, width: 36, height: 9, rotate: 8, opacity: 0.17 },
  { top: 268, left: 348, width: 22, height: 7, rotate: 71, opacity: 0.14 },
  { top: 318, left: 36, width: 26, height: 8, rotate: -24, opacity: 0.19 },
  { top: 362, left: 318, width: 34, height: 9, rotate: 36, opacity: 0.16 },
  { top: 412, left: 18, width: 20, height: 7, rotate: -58, opacity: 0.13 },
  { top: 456, left: 336, width: 30, height: 8, rotate: 14, opacity: 0.18 },
  { top: 508, left: 44, width: 28, height: 8, rotate: -10, opacity: 0.15 },
  { top: 552, left: 302, width: 24, height: 7, rotate: 48, opacity: 0.17 },
  { top: 602, left: 22, width: 32, height: 9, rotate: -34, opacity: 0.14 },
  { top: 648, left: 328, width: 26, height: 8, rotate: 22, opacity: 0.16 },
  { top: 698, left: 58, width: 22, height: 7, rotate: -6, opacity: 0.12 },
  { top: 742, left: 294, width: 30, height: 8, rotate: 40, opacity: 0.15 },
  { top: 784, left: 118, width: 18, height: 6, rotate: -18, opacity: 0.11 },
  { top: 804, left: 248, width: 20, height: 7, rotate: 32, opacity: 0.13 },
  { top: 196, left: 168, width: 16, height: 5, rotate: -12, opacity: 0.1 },
  { top: 486, left: 188, width: 14, height: 5, rotate: 26, opacity: 0.09 },
  { top: 624, left: 176, width: 18, height: 6, rotate: -44, opacity: 0.1 },
] as const

export function BackgroundCapsules() {
  return (
    <div className="background-capsules" aria-hidden="true">
      {CAPSULES.map((capsule, index) => (
        <span
          key={index}
          className="background-capsules__capsule"
          style={{
            top: `${capsule.top}px`,
            left: `${capsule.left}px`,
            width: `${capsule.width}px`,
            height: `${capsule.height}px`,
            opacity: capsule.opacity,
            transform: `rotate(${capsule.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
