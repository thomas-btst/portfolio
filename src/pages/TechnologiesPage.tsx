import { Title } from "../components/Title"
import { technologies } from "../constants/technologies"
import { TechnologyButton } from "../features/technologies/TechnologyButton"

export function TechnologiesPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-5">
      <Title>Technologies</Title>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-7 sm:gap-4 md:grid-cols-8 md:gap-5 lg:grid-cols-10 justify-center lg:gap-7">
        {Object.entries(technologies).map(([key, techno]) => (
          <div className="flex group p-3" key={key}>
            <TechnologyButton key={key} techno={techno} />
          </div>
        ))}
      </div>
    </div>
  )
}
