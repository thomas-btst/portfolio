import { Bold } from "../components/Bold"
import { TimelineStep } from "../features/Timeline"

export const formations: TimelineStep[] = [
  {
    title: "BUT Informatique",
    place: "IUT d'Aix-Marseille, site d'Arles",
    link: "https://iut.univ-amu.fr/fr/formations/bachelor-universitaire-de-technologie/but-informatique/but-info-arles",
    date: "2022 - 2025",
    body: (
      <>
        Au cours de mon BUT Informatique, j'ai acquis des compétences en <Bold>développement d'applications</Bold>,
        notamment en programmation, en conception et en gestion de projets informatiques.
      </>
    ),
  },
  {
    title: "Baccalauréat Général",
    place: "Lycée Adam de Craponne",
    date: "2019 - 2022",
    link: "https://www.site.ac-aix-marseille.fr/lyc-craponne/spip",
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
    title: "Alternance Développeur Web",
    place: "Dev-id Marseille",
    link: "https://www.dev-id.fr",
    date: "2024 - 2025",
    body: (
      <>
        J'ai travaillé en alternance en tant que développeur, participant à la conception et au développement
        d'applications web, ainsi qu'à la maintenance de projets existants. J'ai principalement travaillé et me suis
        spécialisé sur le développement d'applications{" "}
        <span className="text-nowrap">
          <Bold>back-end</Bold>
        </span>{" "}
        (côté serveur).
      </>
    ),
  },
  {
    title: "Stage Développeur Web",
    place: "Dev-id Marseille",
    link: "https://www.dev-id.fr",
    date: "2024",
    body: (
      <>
        Lors de mon stage chez Dev-id Marseille, j'ai contribué au développement de fonctionnalités{" "}
        <span className="text-nowrap">back-end</span> pour divers <Bold>projets web</Bold>, en collaborant avec{" "}
        <Bold>l'équipe</Bold> de développement.
      </>
    ),
  },
  {
    title: "Agent d'accueil",
    place: "Piscine municipale de Mallemort",
    link: "https://www.mallemortdeprovence.com/fr/culture-sport-et-loisirs/piscine-69",
    date: "2019",
    body: (
      <>
        J'ai occupé un poste d'agent d'accueil durant l'été, où j'étais responsable de{" "}
        <Bold>l'accueil des clients</Bold> et de la <Bold>gestion des casiers</Bold>.
      </>
    ),
  },
]
