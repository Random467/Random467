import type { HotspotAction } from '../../config/hotspots'
import './Hotspot.css'

type HotspotProps = {
  label: string
  action: HotspotAction
  x: number
  y: number
  width: number
  height: number
  onActivate: (action: HotspotAction) => void
}

export function Hotspot({
  label,
  action,
  x,
  y,
  width,
  height,
  onActivate,
}: HotspotProps) {
  return (
    <button
      type="button"
      className="hotspot"
      aria-label={label}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      onClick={() => onActivate(action)}
    />
  )
}
