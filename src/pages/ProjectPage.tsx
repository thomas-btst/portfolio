import { useParams } from 'react-router-dom'
import { Project } from '../features/projects/Project'
import { NotFound } from './NotFound'
import { projects } from '../constants/projects'

export function ProjectPage() {
  const projectId = useParams<{ projectId: string }>().projectId
  const project = projects.find((project) => project.id === projectId)
  if (!project) return <NotFound />
  return <Project project={project} />
}
