import { NotFound } from "./pages/NotFound"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Layout } from "./features/layout/Layout"
import { ThemeProvider } from "./contexts/ThemeContext"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { CareerPage } from "./pages/CareerPage"
import { ProjetsPage } from "./pages/ProjetsPage"
import { TechnologiesPage } from "./pages/TechnologiesPage"

function App() {
  const pages = Array<[string, string, () => JSX.Element]>(
    ["", "Accueil", HomePage],
    ["career", "Parcours", CareerPage],
    ["projects", "Projets", ProjetsPage],
    ["contact", "Me contacter", ContactPage],
  ).map((page) => ({
    pth: `/${page[0]}`,
    name: page[1],
    component: page[2],
  }))

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout routes={pages} />}>
            {pages.map((page, i) => (
              <Route key={i} path={page.pth} element={<page.component />} />
            ))}
            <Route path="technologies" element={<TechnologiesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
