import { useCallback, useState } from 'react'
import type { HotspotAction } from '../config/hotspots'
import { HOTSPOT_ACTIONS } from '../config/hotspots'

export type ActiveModal = {
  action: HotspotAction
  title: string
  body: string
}

export function useScreenActions() {
  const [activeModal, setActiveModal] = useState<ActiveModal | null>(null)

  const handleHotspotAction = useCallback((action: HotspotAction) => {
    const content = HOTSPOT_ACTIONS[action]
    setActiveModal({ action, ...content })
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
  }, [])

  return {
    activeModal,
    handleHotspotAction,
    closeModal,
  }
}
