import { PropsWithChildren } from "react"

export function Title({ children }: PropsWithChildren) {
  return (
    <h1 className={`relative text-nowrap text-3xl font-bold w-fit pb-2`}>
      {children}
      <div className="absolute h-1 w-[calc(100%-2px)] rounded-full bg-purple-900 dark:bg-purple-300 bottom-0 left-0 translate-x-3" />
    </h1>
  )
}
