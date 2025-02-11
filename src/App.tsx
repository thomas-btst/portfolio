import { NotFound } from "./pages/NotFound"
import { Projets } from "./pages/Projets"
import { Contact } from "./pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Aos from "aos"
import 'aos/dist/aos.css';
import { Layout } from "./features/layout/Layout"
import { Home } from "./pages/Home"
import { Career } from "./pages/Career"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Technologies } from "./pages/Technologies"

Aos.init();

function App() {
    const pages = Array<[string, string, () => JSX.Element]>(
        ['', 'Accueil', Home],
        ['career', 'Parcours', Career],
        ['projects', 'Projets', Projets],
        ['contact', 'Me contacter', Contact],
    ).map(page => ({
        pth: `/${page[0]}`,
        name: page[1],
        component: page[2],
    }))

    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout routes={pages}/>}>
                        {pages.map((page, i) => (
                            <Route key={i} path={page.pth} element={<page.component/>}/>
                        ))}
                        <Route path="technologies" element={<Technologies/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
