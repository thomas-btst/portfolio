import { Presentation } from '../features/Presentation'
import { Profile } from '../features/Profile'

export function HomePage() {
  return (
    <div
      className="container mx-auto xl:px-20 my-10 py-10 space-y-16 lg:space-y-0 lg:space-x-16 flex flex-col lg:flex-row items-center lg:items-start"
      id="presentation"
    >
      <Profile />
      <Presentation />
    </div>
  )
}
