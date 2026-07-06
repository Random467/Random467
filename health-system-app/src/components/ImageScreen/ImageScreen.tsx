import screenImage from '../../assets/human-machine-screen.png'
import { HOTSPOTS } from '../../config/hotspots'
import { useScreenActions } from '../../hooks/useScreenActions'
import { Hotspot } from '../Hotspot/Hotspot'
import { ScreenModal } from '../ScreenModal/ScreenModal'
import './ImageScreen.css'

export function ImageScreen() {
  const { activeModal, handleHotspotAction, closeModal } = useScreenActions()

  return (
    <div className="image-screen">
      <img
        src={screenImage}
        alt="Human Machine app screen"
        className="image-screen__background"
        draggable={false}
      />

      <div className="image-screen__overlay">
        {HOTSPOTS.map((hotspot) => (
          <Hotspot
            key={hotspot.id}
            label={hotspot.label}
            action={hotspot.action}
            x={hotspot.x}
            y={hotspot.y}
            width={hotspot.width}
            height={hotspot.height}
            onActivate={handleHotspotAction}
          />
        ))}
      </div>

      {activeModal ? (
        <ScreenModal modal={activeModal} onClose={closeModal} />
      ) : null}
    </div>
  )
}
