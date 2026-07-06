import type { ReactNode } from 'react'
import { PHONE_HEIGHT, PHONE_WIDTH } from '../../constants/phone'

interface PhoneFrameProps {
  children?: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div
      className="rounded-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]"
      style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}
    >
      <div className="h-full w-full overflow-hidden rounded-[40px] bg-white">
        {children}
      </div>
    </div>
  )
}
