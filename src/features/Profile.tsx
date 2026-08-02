import { Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'
import { IconButton } from '../components/IconButton'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Underline } from '../components/Underline'
import { technologies, TechnologyKey } from '../constants/technologies'
import { projects } from '../constants/projects'
import { TechnologyButton } from './technologies/TechnologyButton'

type OverviewProps = PropsWithChildren<{
  title: string
  seeMore: string
}>

interface TechnologiesOverviewProps {
  technologyKeys: TechnologyKey[]
}

function FormationBadge({ children }: PropsWithChildren) {
  return (
    <Link to="/career" className="transition hover:scale-105">
      <Badge>{children}</Badge>
    </Link>
  )
}

function Overview({ title, children, seeMore }: OverviewProps) {
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{title}</h2>
        <Underline>
          <Link to={seeMore} className="text-purple-800 dark:text-purple-200 text-sm">
            Voir plus
          </Link>
        </Underline>
      </div>
      {children}
    </div>
  )
}

function TechnologiesOverview({ technologyKeys }: TechnologiesOverviewProps) {
  return (
    <Overview title="Technologies" seeMore="/technologies">
      <div className="flex flex-wrap justify-center gap-4">
        {technologyKeys.map((technoKey) => (
          <TechnologyButton key={technoKey} techno={technologies[technoKey]} />
        ))}
      </div>
    </Overview>
  )
}

function ProjectsOverview() {
  const favorites = projects.filter((project) => project.favorite)
  return (
    <Overview title="Projets" seeMore="/projects">
      <div className="flex justify-between space-x-3">
        {favorites.map((project, i) => (
          <a
            href={project.link}
            key={i}
            className={`relative bg-gray-200 rounded-md aspect-video w-full flex group hover:scale-105 duration-200 transition-transform`}
          >
            {project.picture && (
              <img
                alt={project.name}
                src={project.picture}
                className="absolute left-0 top-0 w-full h-full object-cover rounded-md"
              />
            )}
            <span className="z-10 rounded-md bg-black bg-opacity-0 shadow-md group-hover:bg-opacity-40 w-full h-full flex items-center justify-center transition-colors duration-100">
              <span className="opacity-0 group-hover:opacity-100 text-white">{project.name}</span>
            </span>
          </a>
        ))}
      </div>
    </Overview>
  )
}

export function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className="flex flex-col items-center bg-white dark:bg-zinc-800 bg-opacity-75 pt-4 pb-8 px-14 min-w-96 shadow-md space-y-7 rounded-lg text-nowrap"
    >
      <div className="pb-1 flex justify-center gap-2 whitespace-normal text-center">
        <FormationBadge>Ingénieur Logiciel</FormationBadge>
        <FormationBadge>BUT 3 Informatique</FormationBadge>
      </div>
      <img src={profile} alt="Profil" className="aspect-square size-40 rounded-xl transition shadow-md border border-gray-200" />
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">Thomas BATISTA</h2>
        <span className="italic text-gray-700 dark:text-gray-300">Etudiant en Informatique</span>
      </div>
      <div className="space-y-6">
        <TechnologiesOverview technologyKeys={['spring-boot', 'nestjs', 'react', 'git', 'bash', 'mongodb']} />
        <ProjectsOverview />
      </div>
      <div className="pt-2">
        <IconButton to="/cv.pdf" target="_blank" icon={faDownload}>
          Télécharger mon CV
        </IconButton>
      </div>
    </motion.div>
  )
}
