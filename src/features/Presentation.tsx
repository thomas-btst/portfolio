import { PropsWithChildren, useState } from 'react'
import { IconButton } from '../components/IconButton'
import { Title } from '../components/Title'
import { Separator } from '../components/Separator'
import { Bold } from '../components/Bold'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Paragraph({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="text-justify indent-12"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

type CitationProps = PropsWithChildren<{
  author: string
  role: string
}>

function CitationMore({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false)
  return (
    <button
      className="hover:underline text-justify"
      title={show ? 'Afficher moins' : 'Afficher plus'}
      onClick={() => setShow(!show)}
    >
      {show ? (
        children
      ) : (
        <Bold>
          <span className="mx-1 text-purple-500">[...]</span>
        </Bold>
      )}
    </button>
  )
}

function Citation({ author, role, children }: CitationProps) {
  return (
    <Paragraph>
      <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
      {children}
      <FontAwesomeIcon icon={faQuoteRight} className="mx-2" />
      <Bold>{author}</Bold>
      <span className="text-lg mx-3 font-bold">-</span>
      <span className="text-base text-gray-700 dark:text-gray-300">{role}</span>
    </Paragraph>
  )
}

export function Presentation() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Title>Bienvenue !</Title>
          <div className="text-gray-900 dark:text-gray-100 text-xl italic hidden sm:block">-</div>
          <div className="text-gray-800 dark:text-gray-200 text-lg italic">
            Créatif. Passionné. Professionnel. Explorez mon portfolio.
          </div>
        </div>

        <div className="relative space-y-3">
          <Paragraph>
            Bienvenue sur mon portfolio ! Je suis <Bold>Thomas BATISTA</Bold>, un étudiant en 3ème année de{' '}
            <Bold>BUT Informatique</Bold> à l'IUT d'Arles et en alternance au sein de l'entreprise Dev-id située à
            Marseille. Passionné par les mathématiques, le développement et les technologies numériques, je souhaite
            intégrer une <Bold>école d'ingénieur en informatique</Bold> afin de renforcer mes compétences en
            informatique et évoluer vers un rôle à fort impact dans le monde des nouvelles technologies.
          </Paragraph>
          <Paragraph>
            Ma passion pour la logique et la résolution de problèmes complexes m'a orienté vers le développement{' '}
            <Bold>back-end</Bold> d'applications (côté serveur). En paralèle, mon intérêt pour la cybersécurité m'a
            amené à explorer le monde du <span className="italic">white hacking</span>, me permettant d'approfondir ma
            compréhension de la sécurité des systèmes d'information et de la protection des données. Enfin,{' '}
            <Bold>l'optimisation</Bold> est un domaine dans lequel j'excelle et que j'affectionne particulièrement.
            C'est un secteur que je souhaiterais approfondir et en faire mon cœur de métier. C’est pourquoi je
            m’intéresse de près à la <Bold>recherche</Bold> en informatique, un domaine que j’aimerais explorer après
            mon <Bold>école d’ingénieur</Bold>.
          </Paragraph>
          <Separator />
          <h2 className="text-lg font-bold">Recommandations</h2>
          <Citation author="LESCOULIE Julien" role="CEO de Dev-id">
            C'est avec grand plaisir que je vous recommande vivement Thomas au sein votre école.
            <CitationMore>
              Ayant eu le privilège de superviser ses précédents stages et alternances chez Dev-id, je peux attester de
              son engagement et d’un bon niveau technique dans les technologies (stack) sur lesquels il a eu
              l’opportunité de se former chez nous. Thomas a donc été un atout précieux pour notre équipe de
              développement web chez Dev-id. il a démontré un intérêt particulier pour le développement lié aux
              technologies web back-end. Il a investi un temps important dans l'approfondissement de ses connaissances
              et de ses compétences dans ce domaine. Thomas a rapidement assimilé de nouveaux langages de programmation
              et de nouveaux outils, ce qui lui a permis de contribuer de manière significative à plusieurs projets clés
              chez Dev-id. Son approche méthodique et son souci du détail se reflètent dans la qualité du code qu'il
              produit. En plus de ses compétences techniques il possède d'excellentes appétences pour le travail en
              équipe. Il a toujours été collaboratif et disposé à partager ses connaissances avec ses collègues, ce qui
              a renforcé l'esprit d'équipe au sein de notre organisation.
            </CitationMore>
            Thomas est une personne fiable, honnête et motivée.
          </Citation>
          <div className="absolute h-full w-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 -top-8 -left-8" />
          <div className="absolute h-full w-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 -top-8 -right-8" />
        </div>
      </div>
      <IconButton to="/projects">Explorer mes projets</IconButton>
    </div>
  )
}
