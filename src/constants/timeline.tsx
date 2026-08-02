import { Bold } from '../components/Bold'
import { TimelineStep } from '../features/Timeline'

export const formations: TimelineStep[] = [
  {
    title: "Ingénieur Logiciel",
    place: 'IMT Atlantique, Nantes',
    link: 'https://www.imt-atlantique.fr/fr/formation/ingenieur-apprentissage/ingenierie-logicielle',
    date: '2025 - 2028',
    body: (
      <>
        Formation d'ingénieur en alternance (<Bold>actuellement 1er de la promotion</Bold>). Spécialisation approfondie en <Bold>architecture, qualité logicielle</Bold>, <Bold>systèmes distribués</Bold>, <Bold>DevOps</Bold>, algorithmique avancée, systèmes d'exploitation et méthodologies agiles.
      </>
    ),
  },
  {
    title: 'BUT Informatique',
    place: "IUT d'Aix-Marseille, site d'Arles",
    link: 'https://iut.univ-amu.fr/fr/formations/bachelor-universitaire-de-technologie/but-informatique/but-info-arles',
    date: '2022 - 2025',
    body: (
      <>
        Bachelor Universitaire de Technologie en alternance (<Bold>Major de promotion</Bold>). Acquisition de compétences solides en <Bold>développement d'applications</Bold>, conception logicielle, bases de données et gestion de projets informatiques.
      </>
    ),
  },
  {
    title: 'Baccalauréat Général',
    place: 'Lycée Adam de Craponne',
    date: '2019 - 2022',
    link: 'https://www.site.ac-aix-marseille.fr/lyc-craponne/spip',
    body: (
      <>
        J'ai obtenu mon baccalauréat général avec les spécialités <Bold>Mathématiques</Bold>,
        <Bold> Physique-Chimie</Bold> et <Bold>Sciences de la Vie et de la Terre (SVT)</Bold>.
      </>
    ),
  },
]

export const experiences: TimelineStep[] = [
  {
    title: 'Alternance Concepteur SI',
    place: 'Covéa, Le Mans',
    link: 'https://www.covea.com/fr',
    date: '2025 - 2028',
    body: (
      <>
        En tant que <Bold>Concepteur SI</Bold> chez Covéa, je participe à l'architecture et la conception de
        <Bold> systèmes d'information complexes à grande échelle</Bold>. J'assure la <Bold>coordination </Bold>
        de tâches de bout en bout, la validation des livrables ainsi que le <Bold>pilotage de projets</Bold>,
        notamment sur le volet budgétaire. Je réalise également du <Bold>support technique de niveau 2 </Bold>
        et des <Bold>analyses d'infrastructure et de coûts</Bold> pour guider les décisions stratégiques.
      </>
    ),
  },
  {
    title: 'Alternance Développeur Web',
    place: 'Dev-id, Marseille',
    link: 'https://www.dev-id.fr',
    date: '2024 - 2025',
    body: (
      <>
        J'ai travaillé en alternance en tant que développeur, participant à la conception et au développement
        d'applications web, ainsi qu'à la maintenance de projets existants. J'ai principalement travaillé et me suis
        spécialisé sur le développement d'applications{' '}
        <span className="text-nowrap">
          <Bold>back-end</Bold>
        </span>{' '}
        (côté serveur).
      </>
    ),
  },
  {
    title: 'Stage Développeur Web',
    place: 'Dev-id, Marseille',
    link: 'https://www.dev-id.fr',
    date: '2024',
    body: (
      <>
        Lors de mon stage chez Dev-id Marseille, j'ai contribué au développement de fonctionnalités{' '}
        <span className="text-nowrap">back-end</span> pour divers <Bold>projets web</Bold>, en collaborant avec{' '}
        <Bold>l'équipe</Bold> de développement.
      </>
    ),
  },
  {
    title: "Agent d'accueil",
    place: 'Piscine municipale de Mallemort',
    link: 'https://www.mallemortdeprovence.com/fr/culture-sport-et-loisirs/piscine-69',
    date: '2019',
    body: (
      <>
        J'ai occupé un poste d'agent d'accueil durant l'été, où j'étais responsable de{' '}
        <Bold>l'accueil des clients</Bold> et de la <Bold>gestion des casiers</Bold>.
      </>
    ),
  },
]
