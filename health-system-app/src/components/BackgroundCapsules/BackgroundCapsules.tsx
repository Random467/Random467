import './BackgroundCapsules.css'

const CAPSULES = [
  { top: '6%', left: '8%', width: 28, height: 10, rotate: 35, opacity: 0.35 },
  { top: '12%', left: '72%', width: 34, height: 11, rotate: -20, opacity: 0.28 },
  { top: '22%', left: '18%', width: 22, height: 8, rotate: 62, opacity: 0.22 },
  { top: '28%', left: '84%', width: 26, height: 9, rotate: -48, opacity: 0.3 },
  { top: '38%', left: '4%', width: 30, height: 10, rotate: 12, opacity: 0.25 },
  { top: '44%', left: '90%', width: 20, height: 7, rotate: 78, opacity: 0.2 },
  { top: '52%', left: '12%', width: 24, height: 8, rotate: -32, opacity: 0.26 },
  { top: '58%', left: '78%', width: 32, height: 10, rotate: 44, opacity: 0.24 },
  { top: '68%', left: '6%', width: 18, height: 7, rotate: -65, opacity: 0.18 },
  { top: '72%', left: '88%', width: 28, height: 9, rotate: 18, opacity: 0.22 },
  { top: '82%', left: '22%', width: 26, height: 8, rotate: -12, opacity: 0.2 },
  { top: '86%', left: '68%', width: 22, height: 8, rotate: 55, opacity: 0.24 },
  { top: '18%', left: '48%', width: 16, height: 6, rotate: -8, opacity: 0.16 },
  { top: '64%', left: '52%', width: 20, height: 7, rotate: 28, opacity: 0.15 },
  { top: '34%', left: '58%', width: 14, height: 5, rotate: -42, opacity: 0.14 },
] as const

export function BackgroundCapsules() {
  return (
    <div className="background-capsules" aria-hidden="true">
      {CAPSULES.map((capsule, index) => (
        <span
          key={index}
          className="background-capsules__capsule"
          style={{
            top: capsule.top,
            left: capsule.left,
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
