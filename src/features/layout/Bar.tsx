import { faEnvelopeOpen, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import profile from "../../assets/profile.jpg";
import { ThemeToggle } from "../ThemeToggle";
import { HTMLAttributeAnchorTarget } from "react";

export function Bar({routes}: {
    routes: {pth: string, name: string}[],
}) {
    const currentPath = useLocation().pathname

    const links = Array<[IconProp, string, string, HTMLAttributeAnchorTarget?]>(
        // [faPhone, 'Téléphone', 'tel:+33782713311'],
        [faEnvelopeOpen, 'Email', 'mailto:thomas.chadecima@gmail.com'],
        [faFileLines, 'CV', '/cv.pdf', "_blank"]
    ).map(link => ({
        img: link[0],
        alt: link[1],
        href: link[2],
        target: link[3],
    }))

    return <header className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 relative justify-between items-center py-4 px-4 mb-3 lg:mb-0">
        {/* Logo & Name */}
        <div className="flex justify-between w-full lg:w-fit space-x-3">
            <Link to="/" className="flex items-center gap-x-2">
                <img src={profile} alt="Profil" className="mx-2 w-10 aspect-square object-cover rounded-md"/>
                <span className="text-lg font-semibold">Thomas BATISTA</span>
            </Link>
            <div className="lg:hidden">
                {<ThemeToggle/>}
            </div>
        </div>

        {/* Navigation Links */}
        <nav>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 gap-x-6 items-center">
                {routes.map((route, i) => (
                    <li key={i}>
                        <Link
                            to={route.pth}
                            className={
                                `relative uppercase font-bold text-sm tracking-wide transition-colors duration-300 
                                ${route.pth === currentPath ? "text-purple-900 dark:text-purple-300" : ""}
                                hover:text-purple-900 dark:hover:text-purple-300 group`
                            }
                        >
                            {route.name}
                            <span className={`absolute left-1/2 -bottom-1 h-0.5 bg-purple-900 dark:bg-purple-300 transition-all duration-300 rounded-full 
                                ${route.pth === currentPath ? 'w-full' : 'w-0 group-hover:w-full'} 
                                transform -translate-x-1/2`}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="items-center gap-x-5 hidden lg:flex">
            <ul className="flex space-x-3">
                {links.map((link, i) => (
                    <li key={i} className="transition-all duration-200 hover:scale-[123%] hover:text-purple-900 dark:hover:text-purple-300">
                        <a href={link.href} target={link.target} className="p-2 flex" title={link.alt}>
                            <FontAwesomeIcon className="w-5 h-5" icon={link.img}/>
                        </a>
                    </li>
                ))}
            </ul>
            {<ThemeToggle/>}
        </div>
    </header>
}