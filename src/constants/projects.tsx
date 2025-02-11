import { CompetenceKey } from "./competences";
import { TechnologyKey } from "./technologies";

import flipSkateshopPicture from "../assets/projects/flip_skateshop/picture.png"
import fjordDesktopPicture from "../assets/projects/fjord_desktop/picture.png"

interface ProjectType {
    name: string,
    competencies: CompetenceKey[],
    technologies: TechnologyKey[],
    dates?: {
        begin: Date,
        end?: Date | false,
    },
    favorite?: boolean,
    link?: string,
    picture?: string,
}

export const projects = new Array<ProjectType>(
    {
        name: "Demonstrateur pédagogique",
        competencies: [1, 2],
        technologies: ["opengl", "cpp", "git"],
        dates: {
            begin: new Date(2024,  -1),
        },
    },
    {
        name: "Petit prince",
        competencies: [1, 3],
        technologies: ["ionic", "typescript", "git"],
        dates: {
            begin: new Date(2024, -1),
        },
    },
    {
        name: "Bookstore",
        competencies: [1, 5],
        technologies: ["laravel", "php", "sql", "tailwind", "docker", "git"],
        dates: {
            begin: new Date(2024, -1),
        },
        link: "https://bookstore.thomas-btst.fr"
    },
    {
        name: "Flip Skateshop",
        competencies: [1, 2, 3, 4, 5, 6],
        technologies: ["spring-boot", "kotlin", "react", "typescript", "docker" , "minio", "mongodb", "stripe", "tailwind", "git"],
        dates: {
            begin: new Date(2024, 10),
            end: new Date(2025, 1),
        },
        favorite: true,
        link: "https://flip-skateshop.thomas-btst.fr",
        picture: flipSkateshopPicture,
    },
    {
        name: "Drinky",
        competencies: [1, 3],
        technologies: ["javascript", "sass", "git"],
        dates: {
            begin: new Date(2023, -1),
        },
        link: "https://drinky.thomas-batista.fr"
    },
    {
        name: "Fjord Desktop",
        competencies: [1, 2, 3],
        technologies: ["gtk", "bash", "typescript", "sass", "git"],
        dates: {
            begin: new Date(2023, -1),
            end: false,
        },
        favorite: true,
        picture: fjordDesktopPicture,
    }
).map(({competencies, technologies, ...props}) => ({
    ...props,
    competencies: new Set(competencies),
    technologies: new Set(technologies),
}))