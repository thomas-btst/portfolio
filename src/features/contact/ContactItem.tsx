import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

interface ContactItemProps {
  title: string
  text: string
  icon: IconProp
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

export function ContactItem({ title, href, target, text, icon }: ContactItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <a
        href={href}
        target={target}
        className="flex flex-col items-center p-6 bg-white dark:bg-zinc-700 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition duration-200 space-y-4 group"
      >
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-100 dark:bg-purple-950 rounded-full">
            <FontAwesomeIcon icon={icon} className="text-purple-900 dark:text-purple-200 w-7 h-6" />
          </div>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">{title}</h3>
        </div>
        <div className="text-gray-700 dark:text-gray-200 group-hover:underline">{text}</div>
      </a>
    </motion.div>
  )
}
