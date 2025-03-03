import { faArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '../../components/IconButton'
import { ProjectType } from '../../constants/projects'
import { technologies } from '../../constants/technologies'
import { TechnologyButton } from '../technologies/TechnologyButton'

export function ProjectCard({ project, isPair }: { project: ProjectType; isPair: boolean }) {
  const picture = (
    <div className={`${isPair ? 'md:float-left' : 'md:float-right'} w-full md:w-2/5 flex justify-center`}>
      <img className="object-scale-down rounded-md mr-6 max-h-96" src={project.picture} />
    </div>
  )
  return (
    <div className="flex flex-col md:block space-y-6 md:space-y-0">
      {picture}
      <div className="space-y-5 flex flex-col">
        <div className="flex items-center border-purple-100 border-2 w-fit rounded-md py-2 px-2">
          <h3 className="text-xl font-bold inline-block mr-8">{project.name}</h3>
          <div className="hidden md:inline-block space-y-4 -mt-4">
            {[...project.technologies.keys()].map((technKey) => (
              <div className="pr-4 inline-block">
                <TechnologyButton techno={technologies[technKey]} />
              </div>
            ))}
          </div>
        </div>
        <p className="text-justify">{project.description}</p>

        <div className={`flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6`}>
          {project.link && (
            <IconButton icon={faGlobe} to={project.link} target="_blank">
              Démo
            </IconButton>
          )}
          <IconButton icon={faArrowRight} to={project.id}>
            En savoir plus
          </IconButton>
        </div>
      </div>
    </div>
  )
}
