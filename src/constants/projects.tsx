import { CompetenceKey } from './competences'
import { TechnologyKey } from './technologies'

import flipSkateshopPicture from '../assets/projects/flip_skateshop/picture.png'
import fjordDesktopPicture from '../assets/projects/fjord_desktop/picture.png'
import drinkyPicture from '../assets/projects/drinky/picture.png'
import openglPicture from '../assets/projects/opengl/picture.png'
import bookstorePicture from '../assets/projects/bookstore/picture.png'
import petitPrincePicture from '../assets/projects/petit_prince/picture.jpg'
import { List, Title } from '../components/ProjectComponents'

interface ProjectValue {
  id: string
  name: string
  competencies: CompetenceKey[]
  technologies: TechnologyKey[]
  dates?: {
    begin: Date
    end?: Date | false
  }
  favorite?: boolean
  link?: string
  picture: string
  description: string
  page: JSX.Element
}

export interface ProjectType {
  id: string
  name: string
  competencies: Set<CompetenceKey>
  technologies: Set<TechnologyKey>
  dates?: {
    begin: Date
    end?: Date | false
  }
  favorite?: boolean
  link?: string
  picture: string
  description: string
  page: JSX.Element
}

export const projects = new Array<ProjectValue>(
  {
    id: 'opengl',
    name: 'Demonstrateur pédagogique OpenGL',
    competencies: [1, 2],
    technologies: ['opengl', 'cpp', 'git'],
    dates: {
      begin: new Date(2024, -1),
    },
    picture: openglPicture,
    description:
      "Ce projet consistait à développer un démonstrateur pédagogique utilisant OpenGL afin d'illustrer divers concepts fondamentaux de la 3D.",
    page: (
      <div>
        <Title>
          L'objectif était de fournir un outil interactif permettant d'explorer et de comprendre des notions telles que
          :
        </Title>
        <List>
          <span>Chargement d'objets 3D (formats courants comme OBJ)</span>
          <span>Calcul des normales pour un rendu correct des surfaces</span>
          <span>Interpolation entre points et couleurs</span>
          <span>Gestion de l'éclairage et des ombres</span>
          <span>Application de textures sur des objets 3D</span>
        </List>
        <Title>Analyse et Démarche :</Title>
        <List>
          <span>
            Exploration des besoins : Identifier les notions essentielles à illustrer et les outils à utiliser (OpenGL,
            GLFW, GLM...)
          </span>

          <span>Conception et implémentation : Création d'une scène 3D avec des objets modifiables en temps réel</span>

          <span>Optimisation et débogage : Ajustement des performances et correction des artefacts graphiques</span>

          <span>Tests et validation : Assurer la clarté et la fluidité de l'affichage et des interactions</span>
        </List>
        <Title>Montée en Compétence :</Title>
        <List>
          <span>Maîtrise d'OpenGL et de ses concepts avancés (VBO, VAO, shaders)</span>

          <span>Compréhension des modèles d'éclairage en 3D (Phong, Lambert)</span>

          <span>Optimisation de rendu graphique et gestion de la pipeline GPU</span>

          <span>
            Manipulation de bibliothèques graphiques annexes (GLFW pour la gestion des fenêtres, GLM pour l'algèbre)
          </span>
        </List>
        <Title>Difficultés Rencontrées :</Title>
        <List>
          <span>Comprendre et implémenter la gestion des shaders</span>

          <span>Gestion des performances et optimisation du rendu</span>

          <span>Correction des problèmes d'affichage liés aux normales mal calculées</span>

          <span>Manipulation des buffers et du pipeline graphique</span>
        </List>
        <Title>Bilan et Perspectives :</Title>
        Ce projet a été une excellente opportunité pour approfondir mes connaissances en programmation graphique. Il m'a
        permis de développer une meilleure compréhension des bases du rendu 3D et d'OpenGL. Pour aller plus loin, une
        évolution possible serait d'ajouter des effets avancés comme le rendu par ombrage différé, le post-traitement ou
        encore l'intégration d'un moteur physique simple.
      </div>
    ),
  },
  {
    id: 'petit_prince',
    name: 'Petit prince',
    competencies: [1, 3],
    technologies: ['ionic', 'typescript', 'git'],
    dates: {
      begin: new Date(2024, -1),
    },
    picture: petitPrincePicture,
    description:
      'Ce projet consistait à développer une application mobile avec Ionic et TypeScript permettant aux parents d’élèves d’une école d’accéder à diverses informations liées à l’établissement.',
    page: (
      <div>
        <Title>Intègre des fonctionnalités clés telles que :</Title>
        <List>
          <span>Authentification sécurisée des utilisateurs</span>

          <span>Consultation des informations générales de l’école</span>

          <span>Suivi des activités et de l’agenda scolaire</span>

          <span>Accès aux coordonnées de l’établissement et aux moyens de contact</span>

          <span>Visualisation de photos de l’école et des enfants</span>
        </List>
        <Title>Analyse et Démarche :</Title>
        <List>
          <span>
            Définition des besoins : Recueil des attentes des utilisateurs finaux (parents, enseignants, administration)
          </span>

          <span>
            Conception de l’architecture : Utilisation d’Ionic pour le développement cross-platform et Firebase pour la
            gestion de l’authentification et des données
          </span>

          <span>
            Implémentation des fonctionnalités : Développement des interfaces utilisateur et des services backend
          </span>

          <span>
            Tests et validation : Vérification de la sécurité, des performances et de l’expérience utilisateur
          </span>
        </List>
        <Title>Montée en Compétence :</Title>
        <List>
          <span>Développement d’applications mobiles avec Ionic et TypeScript</span>

          <span>Intégration de l’authentification et la gestion des données</span>

          <span>Gestion des états et de la navigation dans une application mobile</span>

          <span>Expérience en design d’interface utilisateur (UI/UX) adaptée aux parents</span>
        </List>
        <Title>Difficultés Rencontrées :</Title>
        <List>
          <span>Mise en place d’une authentification sécurisée et fluide</span>

          <span>Gestion des permissions et de l’accès aux données sensibles</span>

          <span>Optimisation de l’affichage des médias (photos et contenu dynamique)</span>

          <span>Adaptation de l’application pour différentes tailles d’écrans et plateformes</span>
        </List>
        <Title>Bilan et Perspectives :</Title>
        Cette application a été une opportunité pour me familiariser avec le développement mobile hybride et les bonnes
        pratiques en matière de sécurité des données. Une évolution envisageable serait d’ajouter des fonctionnalités
        interactives comme une messagerie intégrée entre parents et enseignants ou des notifications push pour les
        événements importants.
      </div>
    ),
  },
  {
    id: 'bookstore',
    name: 'Bookstore',
    competencies: [1, 5],
    technologies: ['laravel', 'php', 'sql', 'tailwind', 'docker', 'git'],
    dates: {
      begin: new Date(2024, -1),
    },
    link: 'https://bookstore.thomas-btst.fr',
    picture: bookstorePicture,
    description: 'Ce projet consistait à développer un site web de vente en ligne de livres en utilisant Laravel.',
    page: (
      <div>
        <Title>L'objectif était de proposer une plateforme permettant aux utilisateurs de :</Title>
        <List>
          <span>S'inscrire et se connecter via une authentification sécurisée</span>

          <span>Parcourir et rechercher des livres selon différentes catégories</span>

          <span>Ajouter des livres à leur panier et passer commande</span>

          <span>Consulter l’historique des commandes et gérer leur profil</span>

          <span>
            Une interface d'administration a également été mise en place pour permettre la gestion des utilisateurs, des
            commandes et du catalogue de livres.
          </span>
        </List>
        <Title>Analyse et Démarche :</Title>
        <List>
          <span>
            Définition des besoins : Recensement des fonctionnalités essentielles pour les clients et les
            administrateurs
          </span>

          <span>
            Conception de la base de données : Structuration des tables (utilisateurs, produits, commandes, etc.)
          </span>

          <span>
            Développement des fonctionnalités : Mise en place de l'authentification, gestion des produits et des
            commandes
          </span>

          <span>Tests et validation : Vérification du bon fonctionnement de la plateforme et correction des bugs</span>
        </List>
        <Title>Montée en Compétence :</Title>
        <List>
          <span>Développement web avec Laravel et gestion du MVC</span>

          <span>Implémentation d’un système d’authentification sécurisé</span>

          <span>Création et gestion d’une base de données relationnelle avec MySQL</span>

          <span>Développement d’un tableau de bord administrateur pour la gestion des contenus</span>
        </List>
        <Title>Difficultés Rencontrées :</Title>
        <span>Gestion des relations entre les différentes entités de la base de données</span>
        <span>Sécurisation des transactions et des données utilisateurs</span>
        <span>Optimisation des performances du site pour un chargement rapide</span>
        <span>Mise en place des paiements en ligne (si applicable)</span>
        <Title>Bilan et Perspectives :</Title>
        Ce projet m’a permis de renforcer mes compétences en développement backend avec Laravel et en conception de
        bases de données. Une amélioration future pourrait inclure l'intégration d'un module de paiement en ligne et
        l'optimisation SEO pour améliorer la visibilité du site.
      </div>
    ),
  },
  {
    id: 'flip_skateshop',
    name: 'Flip Skateshop',
    competencies: [1, 2, 3, 4, 5, 6],
    technologies: [
      'spring-boot',
      'kotlin',
      'react',
      'typescript',
      'docker',
      'minio',
      'mongodb',
      'stripe',
      'tailwind',
      'git',
    ],
    dates: {
      begin: new Date(2024, 10),
      end: new Date(2025, 1),
    },
    favorite: true,
    link: 'https://flip-skateshop.thomas-btst.fr',
    picture: flipSkateshopPicture,
    description:
      'Ce projet consistait à développer une plateforme de vente en ligne de skateboards et de pièces détachées.',
    page: (
      <div>
        <Title>Il comprend :</Title>
        <List>
          <span>Un backend en Spring Boot Kotlin</span>

          <span>Un frontend en React TypeScript</span>

          <span>Une authentification avec envoi de mails et réinitialisation de mot de passe</span>

          <span>La génération et l'envoi de factures</span>

          <span>Une gestion des paiements via Stripe</span>
        </List>
        <Title>Analyse et Démarche :</Title>
        <List>
          <span>Développement de l’API backend : Création des endpoints REST avec Spring Boot</span>

          <span>Conception du frontend : Intégration des interfaces en React TypeScript</span>

          <span>
            Mise en place de l’authentification : Système de connexion sécurisé avec récupération de mot de passe
          </span>

          <span>Gestion des paiements : Intégration de Stripe pour un paiement fluide et sécurisé</span>
        </List>
        <Title>Montée en Compétence :</Title>
        <List>
          <span>Développement backend avec Spring Boot en Kotlin</span>

          <span>Gestion d’un projet full-stack avec React et TypeScript</span>

          <span>Sécurisation des paiements en ligne et envoi automatisé de factures</span>
        </List>
        <Title>Difficultés Rencontrées :</Title>
        <List>
          <span>Intégration de Stripe pour les paiements</span>

          <span>Sécurisation des transactions et des informations utilisateurs</span>

          <span>Synchronisation entre le backend et le frontend</span>
        </List>
        <Title>Bilan et Perspectives :</Title>
        Ce projet m’a permis de renforcer mes compétences en architecture logicielle full-stack et en gestion des
        transactions en ligne. Une amélioration future pourrait inclure un système de recommandations basé sur les
        préférences des utilisateurs.
      </div>
    ),
  },
  {
    id: 'drinky',
    name: 'Drinky',
    competencies: [1, 3],
    technologies: ['javascript', 'sass', 'git'],
    dates: {
      begin: new Date(2023, -1),
    },
    link: 'https://drinky.thomas-btst.fr',
    picture: drinkyPicture,
    description:
      'Drinky est un site web permettant de visualiser et rechercher des recettes de boissons en utilisant l’API gratuite TheCocktailDB. Les utilisateurs peuvent effectuer des recherches par nom ou par catégorie.',
    page: (
      <div>
        <Title>Technologies utilisées :</Title>
        <List>
          <span>JavaScript (sans framework)</span>

          <span>Bootstrap pour le design</span>

          <span>TheCocktailDB pour l’accès aux recettes</span>
        </List>
        <Title>Analyse et Démarche :</Title>
        <List>
          <span>
            Exploration de l’API TheCocktailDB : Comprendre les endpoints disponibles et structurer les requêtes
          </span>

          <span>
            Développement de l’interface utilisateur : Utilisation de Bootstrap pour une mise en page responsive
          </span>

          <span>Implémentation des fonctionnalités de recherche : Création d’un champ de recherche dynamique</span>

          <span>Affichage des résultats : Présentation des cocktails avec images et instructions</span>
        </List>
        <Title>Montée en Compétence :</Title>
        <List>
          <span>Manipulation des APIs REST en JavaScript</span>

          <span>Dynamisation du DOM avec JavaScript pur</span>

          <span>Utilisation de Bootstrap pour styliser une interface rapidement</span>

          <span>Gestion des requêtes asynchrones avec fetch()</span>
        </List>
        <Title>Difficultés Rencontrées :</Title>
        <List>
          <span>Compréhension du fonctionnement des promesses et de fetch()</span>

          <span>Structuration du code sans framework</span>

          <span>Affichage fluide et mise en page responsive</span>
        </List>
        <Title>Bilan et Perspectives :</Title>
        Drinky a été mon premier projet en JavaScript, ce qui m’a permis d’apprendre les bases de la manipulation du DOM
        et des appels API. Pour améliorer le projet, je pourrais intégrer un filtrage plus avancé, ajouter un système de
        favoris ou encore le refondre avec un framework comme React.
      </div>
    ),
  },
  {
    id: 'fjord_desktop',
    name: 'Fjord Desktop',
    competencies: [1, 2, 3],
    technologies: ['gtk', 'bash', 'typescript', 'sass', 'git'],
    dates: {
      begin: new Date(2023, -1),
      end: false,
    },
    favorite: true,
    picture: fjordDesktopPicture,
    description: 'Fjord Desktop est un environnement de bureau personnalisé basé sur Hyprland.',
    page: (
      <div>
        <Title>
          Ce projet personnel avait pour objectif de créer une interface fluide et ergonomique en développant :
        </Title>
        <List>
          <span>Une barre des tâches interactive</span>

          <span>Un lanceur d’applications performant</span>

          <span>Divers outils d’automatisation pour optimiser l’utilisation quotidienne du système</span>
        </List>
        <Title>Technologies utilisées :</Title>
        <List>
          <span>Hyprland (window manager dynamique)</span>

          <span>AGS (Aylurs GTK Shell) pour le développement des interfaces graphiques</span>

          <span>Bash & Python pour les scripts d’automatisation</span>
        </List>
        <Title>Analyse et Démarche :</Title>
        <List>
          <span>Exploration des besoins : Définition des fonctionnalités essentielles pour une interface fluide</span>

          <span>Conception et développement : Création d’une interface graphique ergonomique avec AGS</span>

          <span>Automatisation des tâches : Intégration de scripts pour améliorer l’expérience utilisateur</span>

          <span>Optimisation et personnalisation : Ajustement des performances et du rendu visuel</span>
        </List>
        <Title>Montée en Compétence :</Title>
        <List>
          <span>Personnalisation avancée d’un environnement Linux</span>

          <span>Développement d’interfaces graphiques avec AGS et GTK</span>

          <span>Gestion et configuration d’un window manager dynamique</span>

          <span>Automatisation des tâches avec scripts Bash et Python</span>
        </List>
        <Title>Difficultés Rencontrées :</Title>
        <List>
          <span>Compréhension du fonctionnement interne d’Hyprland</span>

          <span>Développement d’une barre des tâches dynamique et réactive</span>

          <span>Gestion de la compatibilité avec différents logiciels et configurations matérielles</span>

          <span>Optimisation de la consommation des ressources pour garantir la fluidité du système</span>
        </List>
        <Title>Bilan et Perspectives :</Title>
        Ce projet m’a permis de mieux comprendre le fonctionnement interne des environnements de bureau sous Linux. Une
        évolution envisageable serait d’intégrer une gestion avancée des notifications, un tableau de bord interactif ou
        encore une synchronisation cloud pour la configuration utilisateur.
      </div>
    ),
  },
).map(({ competencies, technologies, ...props }) => ({
  ...props,
  competencies: new Set(competencies),
  technologies: new Set(technologies),
}))
// .sort((a, b) => {
//   if (a.dates?.end === null && b.dates?.end === null)
//     return a.dates.begin < b.dates.begin
//   if (a.dates?.end === null)
//     return true
//   if (b.dates?.end === null)
//     return false
//   return a.dates.end < b.dates?.end
// })
