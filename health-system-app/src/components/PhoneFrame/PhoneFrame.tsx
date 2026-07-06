import type { ReactNode } from 'react'
import './PhoneFrame.css'

type PhoneFrameProps = {
  children: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="phone-frame" aria-label="Mobile app frame">
      <div className="phone-frame__screen">{children}</div>
    </div>
  )
}
