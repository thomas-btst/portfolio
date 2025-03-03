import { PropsWithChildren } from 'react'
import { Bold } from './Bold'

export function Title({ children }: PropsWithChildren) {
  return (
    <div className="text-lg pt-8 pb-2">
      <Bold>{children}</Bold>
    </div>
  )
}

export function List({ children }: { children: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-inside marker:text-purple-800">
      {children.map((child) => (
        <li>{child}</li>
      ))}
    </ul>
  )
}
