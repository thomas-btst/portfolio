import { PropsWithChildren } from "react"
import { IconButton } from "../components/IconButton"
import { Title } from "../components/Title"
import { Separator } from "../components/Separator"
import { Bold } from "../components/Bold"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

function Paragraph({children}: PropsWithChildren) {
    return <motion.div
        className="text-justify indent-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        {children}
    </motion.div>
}

type CitationProps = PropsWithChildren<{
    author: string
    role: string
}>

function Citation({author, role, children}: CitationProps) {
    return <Paragraph>
        <FontAwesomeIcon icon={faQuoteLeft} className="mr-2"/>
        {children}
        <FontAwesomeIcon icon={faQuoteRight} className="mx-2"/>
        <Bold>{author}</Bold>
        <span className="text-lg mx-3 font-bold">-</span>
        <span className="text-base text-gray-700">{role}</span>
    </Paragraph>
}

export function Presentation() {
    return <div className="flex flex-col space-y-10">
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Title>Bienvenue !</Title>
                <div className="text-gray-900 dark:text-gray-100 text-xl italic hidden sm:block">-</div>
                <div className="text-gray-800 dark:text-gray-200 text-lg italic">Créatif. Passionné. Professionnel. Explorez mon portfolio.</div>
            </div>
            
            <div className="relative space-y-3">
                <Paragraph>
                    Bonjour et bienvenue sur mon portfolio !
                    Je suis <Bold>Thomas BATISTA</Bold>, un étudiant en 3ème année de BUT Informatique à l'IUT d'Arles et en alternance au sein de l'entreprise Dev-id sur Marseille.
                    Passioné par les mathématiques, le développement et les technologies numériques,
                    je souhaite intégrer une <Bold>école d'ingénieur en informatique</Bold> afin de renforcer mes compétences en informatique et évoluer vers un rôle à fort impact dans le monde des nouvelles technologies.
                </Paragraph>
                <Paragraph>
                    Ma passion pour la logique et la résolution de problèmes complexes m'a orienté vers le développement <Bold>back-end</Bold> d'applications (côté serveur).
                    En paralèle, mon intérêt pour la cybersécurité m'a amené à explorer le monde du white hacking,
                    me permettant d'approfondir ma compréhension de la sécurité des systèmes d'information et de la protection des données.
                    Enfin, l'optimisation est un domaine dans lequel j'excelle et que j'affectionne particulièrement. C'est un secteur que je souhaiterais approfondir et en faire mon cœur de métier.
                    C’est pourquoi je m’intéresse de près à la <Bold>recherche</Bold> en informatique, un domaine que j’aimerais explorer après mon école d’ingénieur.
                </Paragraph>
                <Separator/>
                <h2 className="text-lg font-bold">Mon objectif</h2>
                <Paragraph>
                    Intégrer une entreprise innovante pour participer à la recherche et au développement de solutions technologiques avancées, en particulier dans les domaines de l'optimisation et de l'algorithmie.
                </Paragraph>
                <h2 className="text-lg font-bold">Mon approche du développement</h2>
                <h2 className="text-lg font-bold">Valeurs professionnelles</h2>
                <h2 className="text-lg font-bold">Projets à venir</h2>
                <h2 className="text-lg font-bold">Recommandations</h2>
                <Citation author="URIBE LOBELLO Ricardo" role="Professeur">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in dicta neque praesentium nobis iste officiis tempora dolores natus. Consequatur debitis hic dolorum maxime enim explicabo nam fugiat molestiae labore.
                </Citation>
                <Citation author="LESCOULIE Julien" role="Employeur">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus quibusdam, fugit, error distinctio cumque nobis minima amet sequi nesciunt placeat natus saepe numquam necessitatibus voluptates sint neque! Asperiores, unde!
                </Citation>
                <Separator/>
                <Paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse assumenda, consequatur minima consequuntur suscipit quia maiores modi totam illum dolorem est explicabo rem. Incidunt officia excepturi molestias commodi perferendis.
                </Paragraph>
                <div className="absolute h-full w-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 -top-8 -left-8"/>
                <div className="absolute h-full w-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 -top-8 -right-8"/>
            </div>
            <div className="text-gray-800 dark:text-gray-300 italic">
                N'hésitez pas à explorer mes projets et à me contacter pour toute opportunité de collaboration. Je serai ravi de discuter de ce que je peux apporter à votre équipe.
            </div>
        </div>
        <IconButton to="/projects">Explorer mes projets</IconButton>
    </div>
}