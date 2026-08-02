import { TechnologyType } from '../../constants/technologies'

interface TechnologyButtonProps {
  techno: TechnologyType
}

export function TechnologyButton({ techno }: TechnologyButtonProps) {
  return (
    <a href={techno.link} target="_blank" className="group/techno relative w-fit inline-block align-middle">
      <img
        src={techno.icon}
        alt={techno.name}
        className="w-8 h-8 transition-transform duration-200 group-hover/techno:scale-110 group-hover/techno:-translate-y-1 object-contain"
      />
      <div
        className="z-10 absolute left-1/2 transform -translate-x-1/2 -bottom-1.5 translate-y-full opacity-0 pointer-events-none group-hover/techno:opacity-100
                transition duration-200 bg-purple-100 dark:bg-purple-200 text-purple-950 rounded-md px-2 pb-1 pt-0.5 text-sm whitespace-nowrap shadow-lg"
      >
        {techno.name}
      </div>
    </a>
  )
}
