import { NotFound } from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './features/layout/Layout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { CareerPage } from './pages/CareerPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { TechnologiesPage } from './pages/TechnologiesPage'
import { ThemeProvider } from './contexts/ThemeProvider'
import { ProjectPage } from './pages/ProjectPage'

function App() {
  const pages = Array<[string, string, () => JSX.Element]>(
    ['', 'Accueil', HomePage],
    ['career', 'Parcours', CareerPage],
    ['projects', 'Projets', ProjectsPage],
    ['contact', 'Me contacter', ContactPage],
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
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="technologies" element={<TechnologiesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
