import { PhoneFrame } from '../PhoneFrame/PhoneFrame'
import { BackgroundCapsules } from '../BackgroundCapsules/BackgroundCapsules'
import { HeroTitle } from '../HeroTitle/HeroTitle'
import { AnatomyFigure } from '../AnatomyFigure/AnatomyFigure'
import { ScreenFooter } from '../ScreenFooter/ScreenFooter'
import './HumanMachineScreen.css'

export function HumanMachineScreen() {
  return (
    <PhoneFrame>
      <div className="human-machine-screen">
        <BackgroundCapsules />
        <HeroTitle />
        <AnatomyFigure />
        <ScreenFooter />
      </div>
    </PhoneFrame>
  )
}
