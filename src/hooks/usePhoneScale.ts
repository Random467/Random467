import { useEffect, useState } from 'react'
import { PHONE_HEIGHT, PHONE_WIDTH } from '../constants/phone'

export function usePhoneScale(): number {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / PHONE_WIDTH
      const scaleY = window.innerHeight / PHONE_HEIGHT
      setScale(Math.min(scaleX, scaleY))
    }

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  return scale
}
