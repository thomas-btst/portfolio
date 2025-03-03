import { useState } from 'react'
import { CompetenceKey, competencies } from '../../constants/competences'
import { projects } from '../../constants/projects'
import { Title } from '../../components/Title'
import { ProjectCard } from './ProjectCard'

function ProjectsSeparator() {
  return <div className="w-full h-0.5 bg-gray-300 mx-auto" />
}

export function Projects() {
  const [selected, setSelected] = useState<null | CompetenceKey>(null)
  return (
    <div className="flex flex-col space-y-10 items-center container mx-auto">
      <Title>Projets</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-5">
        {[...competencies.entries()].map(([competenceKey, competence]) => {
          const isSelected = selected === competenceKey
          return (
            <button
              key={competenceKey}
              onClick={() => setSelected(isSelected ? null : competenceKey)}
              className={`${isSelected ? 'bg-purple-200' : 'bg-purple-50'} hover:bg-purple-100 border border-purple-900 p-2 rounded-md`}
            >
              <span className="line-clamp-1 text-wrap text-center text-purple-900 ">{competence}</span>
            </button>
          )
        })}
      </div>
      <div className="flex flex-col space-y-14">
        {projects
          .filter((project) => selected === null || project.competencies.has(selected))
          .map((project, i) => <ProjectCard key={project.name} project={project} isPair={i % 2 === 0} />)
          .reduce<JSX.Element[]>((acc, val, i) => {
            acc.push(<ProjectsSeparator key={`sep-${i}`} />)
            acc.push(val)
            return acc
          }, [])}
      </div>
    </div>
  )
}
