import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { IconButton } from '../../components/IconButton'
import { Title } from '../../components/Title'
import { ProjectType } from '../../constants/projects'
import { technologies } from '../../constants/technologies'
import { TechnologyButton } from '../technologies/TechnologyButton'

export function Project({ project }: { project: ProjectType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center container mx-auto space-y-8 max-w-4xl px-4 pb-12"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <Title>{project.name}</Title>

        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          {[...project.technologies.keys()].map((technKey) => (
            <TechnologyButton key={technKey} techno={technologies[technKey]} />
          ))}
        </div>
      </div>

      <div className="w-full relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-zinc-900/60 p-4 border border-gray-100 dark:border-zinc-800 flex justify-center shadow-md">
        <img src={project.picture} alt={project.name} className="max-h-96 object-contain rounded-lg shadow-sm" />
      </div>

      <div className="w-full bg-white dark:bg-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-100 dark:border-zinc-700/60 space-y-6">
        <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="text-gray-600 dark:text-gray-300 space-y-4 pt-2 border-t border-gray-100 dark:border-zinc-700/50">
          {project.page}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
        {project.link && (
          <IconButton icon={faGlobe} to={project.link} target="_blank">
            Démo en ligne
          </IconButton>
        )}
        <IconButton icon={faArrowLeft} to="/projects">
          Retour aux projets
        </IconButton>
      </div>
    </motion.div>
  )
}
