import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export function Bar({routes, links = []}: {
    routes: {pth: string, name: string}[],
    links?: {img: string, alt: string, href: string}[],
}) {
    const currentPath = useLocation().pathname
    return <div className="bg-light-blue flex justify-between items-center">
        <Link to='/' className="group text-light-white pl-1"><FontAwesomeIcon className="px-2" icon={faCode}/> Thomas BATISTA</Link>
        <ul className="inline-block group">
            {
                routes.map((route, i) => (
                    <li key={i} className={'inline-block text-light-white'}>
                        <Link to={route.pth}>
                            <span className={`mx-3 my-2 block relative after:block after:h-[2px] after:bg-light-white after:absolute after:-bottom-0.5 after:left-1/2 after:translate-x-[-50%] after:transition-all after:duration-200 after:rounded-full ${route.pth===currentPath ? 'after:w-full after:ease-in ' : 'after:w-0 after:ease-out'}`}>
                                {route.name}
                            </span>
                        </Link>
                    </li>
                ))
            }
        </ul>
        
        <ul>
            {links.map((link, i) => (
                <li key={i} className="inline-block hover:rotate-[360deg] transition-transform duration-500">
                    <a href={link.href} className="p-2 flex">
                        <img className="inline-block w-5 h-5" src={link.img} alt={link.alt}/>
                    </a>
                </li>
            ))}
        </ul>
    </div>
}