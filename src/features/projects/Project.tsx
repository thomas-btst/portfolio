import { faArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Title } from '../../components/Title'
import { ProjectType } from '../../constants/projects'
import { IconButton } from '../../components/IconButton'

export function Project({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col items-center container mx-auto space-y-10">
      <Title>{project.name}</Title>
      <img src={project.picture} className="max-h-96 rounded-md" />
      <p>{project.description}</p>
      <p className="text-justify">{project.page}</p>
      <div className={`flex space-x-6`}>
        {project.link && (
          <IconButton icon={faGlobe} to={project.link} target="_blank">
            Démo
          </IconButton>
        )}
        <IconButton icon={faArrowRight} to="/projects">
          Retourner à la liste des projets
        </IconButton>
      </div>
    </div>
  )
}
