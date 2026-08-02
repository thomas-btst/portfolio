import { faArrowRight, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { IconButton } from '../../components/IconButton'
import { ProjectType } from '../../constants/projects'
import { technologies } from '../../constants/technologies'
import { TechnologyButton } from '../technologies/TechnologyButton'

export function ProjectCard({ project, isPair }: { project: ProjectType; isPair: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative bg-white dark:bg-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-zinc-700/60"
    >
      <div className={`flex flex-col lg:flex-row gap-8 items-center ${isPair ? '' : 'lg:flex-row-reverse'}`}>
        <div className="lg:w-5/12 w-full flex-shrink-0 relative overflow-hidden rounded-xl bg-gray-50 dark:bg-zinc-900/60 p-4 border border-gray-100 dark:border-zinc-800 flex items-center justify-center min-h-[220px] max-h-[320px]">
          {project.favorite && (
            <div className="absolute top-3 left-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 z-10 shadow-sm">
              <FontAwesomeIcon icon={faStar} className="size-3 text-amber-500" />
              <span>Coup de cœur</span>
            </div>
          )}
          <img
            className="object-contain max-h-64 w-full rounded-lg shadow-sm"
            src={project.picture}
            alt={project.name}
          />
        </div>

        <div className="lg:w-7/12 w-full flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50">
                {project.name}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {[...project.technologies.keys()].map((technKey) => (
                <TechnologyButton key={technKey} techno={technologies[technKey]} />
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100 dark:border-zinc-700/50">
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
    </motion.div>
  )
}
