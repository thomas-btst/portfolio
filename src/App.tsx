import { Bar } from "./Bar"
import { Footer } from "./Footer"
import { NotFound } from "./pages/NotFound"
import { Accueil } from "./pages/accueil/Accueil"
import { Projets } from "./pages/projets/Projets"
import { Contact } from "./pages/contact/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Aos from "aos"
import 'aos/dist/aos.css';

import github from "./assets/github-mark-white.png"
import mail from "./assets/mail.png"
import linkedIn from './assets/linkedin.png'

Aos.init();

function App() {
    const pages = Array<[string, string, () => JSX.Element]>(
        ['', 'Accueil', Accueil],
        ['projects', 'Projets', Projets],
        ['contact', 'Me contacter', Contact]
    ).map(page => ({
        pth: `/${page[0]}`,
        name: page[1],
        component: page[2],
    }))

    const links = Array<[string, string, string]>(
        [github, 'Github', 'https://github.com/Daxter9Racing'],
        [mail, 'Email', ''],
        [linkedIn, 'LinkedIn', ''],
        // [cv, '']
    ).map(link => ({
        img: link[0],
        alt: link[1],
        href: link[2],
    }))

    const routes = pages.map((page, i) => (
        <Route key={i} path={page.pth} element={<page.component/>}/>
    ))

    return (
        <>
            <Router>
                <Bar routes={pages} links={links}/>
                <Routes>
                    {routes}
                    <Route path='*' element={<NotFound/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App
