export type HotspotAction = 'footer-info' | 'sparkle-info'

export type HotspotConfig = {
  id: string
  label: string
  action: HotspotAction
  x: number
  y: number
  width: number
  height: number
}

export const SCREEN_WIDTH = 390
export const SCREEN_HEIGHT = 844

export const HOTSPOTS: HotspotConfig[] = [
  {
    id: 'footer-copy',
    label: 'Automatic Systems, Built to Endure',
    action: 'footer-info',
    x: 246,
    y: 748,
    width: 104,
    height: 40,
  },
  {
    id: 'footer-sparkle',
    label: 'Sparkle',
    action: 'sparkle-info',
    x: 322,
    y: 776,
    width: 44,
    height: 44,
  },
]

export type ModalContent = {
  title: string
  body: string
}

export const HOTSPOT_ACTIONS: Record<HotspotAction, ModalContent> = {
  'footer-info': {
    title: 'Automatic Systems',
    body: 'Built to Endure',
  },
  'sparkle-info': {
    title: 'Human Machine',
    body: 'Precision systems designed for resilience.',
  },
}
