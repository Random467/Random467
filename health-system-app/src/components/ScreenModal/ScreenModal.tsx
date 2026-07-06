import type { ActiveModal } from '../../hooks/useScreenActions'
import './ScreenModal.css'

type ScreenModalProps = {
  modal: ActiveModal
  onClose: () => void
}

export function ScreenModal({ modal, onClose }: ScreenModalProps) {
  return (
    <div className="screen-modal" role="presentation" onClick={onClose}>
      <div
        className="screen-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="screen-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="screen-modal-title" className="screen-modal__title">
          {modal.title}
        </h2>
        <p className="screen-modal__body">{modal.body}</p>
        <button type="button" className="screen-modal__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
