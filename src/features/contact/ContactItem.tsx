import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface ContactItemProps {
  title: string
  text: string
  icon: IconProp
  href: string
  target?: React.HTMLAttributeAnchorTarget
  copyText?: string
}

export function ContactItem({ title, href, target, text, icon, copyText }: ContactItemProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const textToCopy = copyText ?? text
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative group"
    >
      <a
        href={href}
        target={target}
        className="flex flex-col items-center p-6 bg-white dark:bg-zinc-700 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-200 space-y-4"
      >
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-100 dark:bg-purple-950 rounded-full">
            <FontAwesomeIcon icon={icon} className="text-purple-900 dark:text-purple-200 w-7 h-6" />
          </div>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">{title}</h3>
        </div>
        <div className="text-gray-700 dark:text-gray-200 group-hover:underline">{text}</div>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        title="Copier"
        className="absolute top-3 right-3 p-1.5 rounded-md text-gray-400 hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-zinc-600 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={copied ? faCheck : faCopy}
          className={copied ? 'text-purple-900 dark:text-purple-300 size-4' : 'size-4'}
        />
        {copied && <span className="text-xs font-semibold text-purple-900 dark:text-purple-300">Copié !</span>}
      </button>
    </motion.div>
  )
}
