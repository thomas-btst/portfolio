import { Outlet, useLocation } from "react-router-dom"
import { Bar } from "./Bar"
import { Footer } from "./Footer"
import { Hero } from "./Hero"

export function Layout({ routes }: { routes: { pth: string; name: string }[] }) {
  const isHome = useLocation().pathname === "/"
  return (
    <div className="flex flex-shrink-0 flex-col min-h-screen text-black dark:text-white transition-colors duration-500">
      <div className={`flex flex-col ${isHome ? "min-h-screen" : ""}`}>
        <Bar routes={routes} />
        <span className={`h-0.5 bg-slate-200 dark:bg-zinc-800 rounded-full self-center w-11/12 block mb-7`} />
        {isHome && <Hero />}
      </div>
      <div className="grow mx-5">
        <Outlet />
      </div>
      <span className={`h-0.5 bg-slate-200 dark:bg-zinc-800 rounded-full self-center w-11/12 mt-7`} />
      <Footer />
    </div>
  )
}
