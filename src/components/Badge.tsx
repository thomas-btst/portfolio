import { PropsWithChildren } from 'react'

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="bg-purple-50 dark:bg-purple-200 text-purple-900 dark:text-purple-900 border border-purple-200 dark:border-purple-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  )
}
