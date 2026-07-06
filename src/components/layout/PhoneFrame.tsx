import type { ReactNode } from 'react'
import { PHONE_HEIGHT, PHONE_WIDTH } from '../../constants/phone'

interface PhoneFrameProps {
  children?: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}
    >
      {children}
    </div>
  )
}
