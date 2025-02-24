import springBoot from "../assets/technologies/spring_boot.svg"
import nestJS from "../assets/technologies/nestjs.svg"
import express from "../assets/technologies/express.svg"
import laravel from "../assets/technologies/laravel.svg"
import stripe from "../assets/technologies/stripe.png"
import minio from "../assets/technologies/minio.jpeg"
import docker from "../assets/technologies/docker.svg"
import git from "../assets/technologies/git.png"
import mongodb from "../assets/technologies/mongodb.png"
import sql from "../assets/technologies/sql.png"
import python from "../assets/technologies/python.png"
import cpp from "../assets/technologies/c++.png"
import java from "../assets/technologies/java.png"
import kotlin from "../assets/technologies/kotlin.svg"
import javascript from "../assets/technologies/javascript.png"
import typescript from "../assets/technologies/typescript.png"
import linux from "../assets/technologies/linux.png"
import php from "../assets/technologies/php.svg"
import react from "../assets/technologies/react.svg"
import ionic from "../assets/technologies/ionic.svg"
import qt from "../assets/technologies/qt.webp"
import gtk from "../assets/technologies/gtk.svg"
import tailwind from "../assets/technologies/tailwindcss.svg"
import sass from "../assets/technologies/sass.png"
import opengl from "../assets/technologies/opengl.png"
import threejs from "../assets/technologies/threejs.ico"
import vite from "../assets/technologies/vite.svg"
import webpack from "../assets/technologies/webpack.svg"

export type TechnologyKey =
  | "spring-boot"
  | "nestjs"
  | "express"
  | "laravel"
  | "stripe"
  | "minio"
  | "docker"
  | "git"
  | "mongodb"
  | "sql"
  | "python"
  | "cpp"
  | "java"
  | "kotlin"
  | "javascript"
  | "typescript"
  | "bash"
  | "php"
  | "react"
  | "ionic"
  | "qt"
  | "gtk"
  | "tailwind"
  | "sass"
  | "opengl"
  | "threejs"
  | "vite"
  | "webpack"

export interface TechnologyType {
  name: string
  icon: string
  type: "front-end" | "back-end" | "language" | "sgbd" | "tool" | "imagery"
  link?: string
}

export const technologies: Record<TechnologyKey, TechnologyType> = {
  "spring-boot": {
    name: "Spring Boot",
    icon: springBoot,
    type: "back-end",
    link: "https://spring.io/projects/spring-boot",
  },
  nestjs: {
    name: "NestJS",
    icon: nestJS,
    type: "back-end",
    link: "https://nestjs.com/",
  },
  express: {
    name: "Express",
    icon: express,
    type: "back-end",
    link: "https://expressjs.com/",
  },
  laravel: {
    name: "Laravel",
    icon: laravel,
    type: "back-end",
    link: "https://laravel.com/",
  },
  stripe: {
    name: "Stripe",
    icon: stripe,
    type: "back-end",
    link: "https://stripe.com",
  },
  minio: {
    name: "Minio",
    icon: minio,
    type: "back-end",
    link: "https://min.io/",
  },
  docker: {
    name: "Docker",
    icon: docker,
    type: "tool",
    link: "https://www.docker.com/",
  },
  git: {
    name: "Git",
    icon: git,
    type: "tool",
    link: "https://git-scm.com/",
  },
  mongodb: {
    name: "MongoDB",
    icon: mongodb,
    type: "sgbd",
    link: "https://www.mongodb.com/",
  },
  sql: {
    name: "SQL",
    icon: sql,
    type: "sgbd",
    link: "https://www.mysql.com/",
  },
  python: {
    name: "Python",
    icon: python,
    type: "language",
    link: "https://www.python.org/",
  },
  cpp: {
    name: "C++",
    icon: cpp,
    type: "language",
    link: "https://isocpp.org/",
  },
  java: {
    name: "Java",
    icon: java,
    type: "language",
    link: "https://www.java.com/",
  },
  kotlin: {
    name: "Kotlin",
    icon: kotlin,
    type: "language",
    link: "https://kotlinlang.org/",
  },
  javascript: {
    name: "JavaScript",
    icon: javascript,
    type: "language",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  typescript: {
    name: "TypeScript",
    icon: typescript,
    type: "language",
    link: "https://www.typescriptlang.org/",
  },
  bash: {
    name: "Bash",
    icon: linux,
    type: "language",
    link: "https://www.gnu.org/software/bash/",
  },
  php: {
    name: "Php",
    icon: php,
    type: "language",
    link: "https://www.php.net/",
  },
  react: {
    name: "React",
    icon: react,
    type: "front-end",
    link: "https://reactjs.org/",
  },
  ionic: {
    name: "Ionic",
    icon: ionic,
    type: "front-end",
    link: "https://ionicframework.com/",
  },
  qt: {
    name: "Qt",
    icon: qt,
    type: "front-end",
    link: "https://www.qt.io/",
  },
  gtk: {
    name: "GTK",
    icon: gtk,
    type: "front-end",
    link: "https://www.gtk.org/",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: tailwind,
    type: "front-end",
    link: "https://tailwindcss.com/",
  },
  sass: {
    name: "Sass",
    icon: sass,
    type: "front-end",
    link: "https://sass-lang.com/",
  },
  opengl: {
    name: "Opengl",
    icon: opengl,
    type: "imagery",
    link: "https://www.opengl.org/",
  },
  threejs: {
    name: "ThreeJS",
    icon: threejs,
    type: "imagery",
    link: "https://threejs.org/",
  },
  vite: {
    name: "Vite",
    icon: vite,
    type: "tool",
    link: "https://vitejs.dev/",
  },
  webpack: {
    name: "Webpack",
    icon: webpack,
    type: "tool",
    link: "https://webpack.js.org/",
  },
}
