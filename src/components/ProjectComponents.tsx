import { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren) {
  return (
    <h4 className="text-lg sm:text-xl font-bold text-purple-900 dark:text-purple-300 pt-6 pb-2 border-b border-purple-100 dark:border-zinc-700/60 mb-3 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 inline-block" />
      <span>{children}</span>
    </h4>
  )
}

export function List({ children }: { children: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 my-3 text-gray-700 dark:text-gray-200 text-sm sm:text-base">
      {children.map((child, index) => (
        <li key={index} className="flex items-start gap-2.5">
          <span className="text-purple-600 dark:text-purple-400 font-bold mt-1 text-xs">•</span>
          <span className="flex-1">{child}</span>
        </li>
      ))}
    </ul>
  )
}
