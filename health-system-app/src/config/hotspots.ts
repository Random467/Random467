export type HotspotAction = 'title-info' | 'footer-info' | 'sparkle-info'

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
    id: 'hero-title',
    label: 'Human Machine',
    action: 'title-info',
    x: 16,
    y: 120,
    width: 358,
    height: 170,
  },
  {
    id: 'footer-copy',
    label: 'Automatic Systems, Built to Endure',
    action: 'footer-info',
    x: 230,
    y: 700,
    width: 130,
    height: 44,
  },
  {
    id: 'footer-sparkle',
    label: 'Sparkle',
    action: 'sparkle-info',
    x: 320,
    y: 764,
    width: 40,
    height: 40,
  },
]

export type ModalContent = {
  title: string
  body: string
}

export const HOTSPOT_ACTIONS: Record<HotspotAction, ModalContent> = {
  'title-info': {
    title: 'Human Machine',
    body: 'Explore the systems that keep the body running.',
  },
  'footer-info': {
    title: 'Automatic Systems',
    body: 'Built to Endure',
  },
  'sparkle-info': {
    title: 'Human Machine',
    body: 'Precision systems designed for resilience.',
  },
}
