import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HTMLAttributeAnchorTarget } from 'react'
import { Link } from 'react-router-dom'

type ArrowButtonProps = React.PropsWithChildren<{
  to: string
  icon?: IconProp
  target?: HTMLAttributeAnchorTarget
}>

export function IconButton({ to, icon, target, children }: ArrowButtonProps) {
  return (
    <Link
      to={to}
      target={target}
      className="transition-colors duration-200 flex items-center justify-center space-x-2.5 hover:text-purple-950 dark:hover:text-purple-200 group/btn self-center"
    >
      <div className="relative rounded-md w-fit font-bold text-base">
        <span
          className="absolute left-0 -bottom-1 h-1 bg-purple-900 dark:bg-purple-200 transition-all duration-200 rounded-full w-0 group-hover/btn:w-full"
        />
        {children}
      </div>
      <FontAwesomeIcon
        icon={icon ?? faArrowRight}
        className="size-5 group-hover/btn:translate-x-2 transition-transform duration-300"
      />
    </Link>
  )
}
