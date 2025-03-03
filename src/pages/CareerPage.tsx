import { experiences, formations } from '../constants/timeline'
import { Timeline } from '../features/Timeline'

export function CareerPage() {
  return (
    <div className="py-8 flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:space-x-10">
      <Timeline title="Parcours d'Études" data={formations} direction="left" />
      <Timeline title="Expériences" data={experiences} direction="right" />
    </div>
  )
}
