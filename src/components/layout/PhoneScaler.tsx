import type { ReactNode } from 'react'
import { PHONE_HEIGHT, PHONE_WIDTH } from '../../constants/phone'
import { usePhoneScale } from '../../hooks/usePhoneScale'
import { PhoneFrame } from './PhoneFrame'

interface PhoneScalerProps {
  children?: ReactNode
}

export function PhoneScaler({ children }: PhoneScalerProps) {
  const scale = usePhoneScale()

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <div
        style={{
          width: PHONE_WIDTH,
          height: PHONE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <PhoneFrame>{children}</PhoneFrame>
      </div>
    </div>
  )
}
