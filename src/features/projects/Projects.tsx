import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CompetenceKey, competencies } from '../../constants/competences'
import { projects } from '../../constants/projects'
import { Title } from '../../components/Title'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const [selected, setSelected] = useState<null | CompetenceKey>(null)

  const filteredProjects = projects.filter(
    (project) => selected === null || project.competencies.has(selected)
  )

  return (
    <div className="flex flex-col space-y-8 items-center container mx-auto pb-12">
      <div className="flex flex-col items-center text-center space-y-5 mb-3">
        <Title>Projets</Title>
        <p className="text-gray-800 dark:text-gray-200 text-lg italic max-w-lg pt-2">
          Découvrez une sélection de mes réalisations full-stack, d'applications mobiles, d'outils et de projets personnels.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl px-2">
        <button
          onClick={() => setSelected(null)}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
            selected === null
              ? 'bg-purple-900 text-white dark:bg-purple-600 shadow-md shadow-purple-900/20'
              : 'bg-white dark:bg-zinc-800/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700/80 hover:bg-purple-50 dark:hover:bg-zinc-700/80 hover:border-purple-300 dark:hover:border-purple-500/40'
          }`}
        >
          Tous les projets ({projects.length})
        </button>

        {[...competencies.entries()].map(([competenceKey, competence]) => {
          const isSelected = selected === competenceKey
          const count = projects.filter((p) => p.competencies.has(competenceKey)).length

          return (
            <button
              key={competenceKey}
              onClick={() => setSelected(isSelected ? null : competenceKey)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-purple-900 text-white dark:bg-purple-600 shadow-md shadow-purple-900/20'
                  : 'bg-white dark:bg-zinc-800/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700/80 hover:bg-purple-50 dark:hover:bg-zinc-700/80 hover:border-purple-300 dark:hover:border-purple-500/40'
              }`}
            >
              <span>{competence}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-purple-800 dark:bg-purple-700 text-white'
                    : 'bg-gray-100 dark:bg-zinc-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      <div className="w-full flex flex-col space-y-10 sm:space-y-12 pt-4">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} isPair={i % 2 === 0} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
