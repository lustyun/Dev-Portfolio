import { Github, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import Python from "/public/images/logos/icon-python.svg";
import LogoJava from "/public/images/logos/icon-java.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoFirebase from "/public/images/logos/icon-firebase.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoC from "/public/images/logos/icon-c++.svg";
import LogoVue from "/public/images/logos/icon-vue-js.svg";
import LogoAngular from "/public/images/logos/icon-angular.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import AmazonLogo from "/public/images/logos/Amazon.jpg";

import ProjectLofi from "public/images/project-lofi.png";
import ProjectMemoryGame from "public/images/project-memory-game.png";
import ProjectTranslator from "public/images/project-translator.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const EXTERNAL_LINKS = {
    GITHUB: "https://github.com/lustyun",
};

export const NAV_LINKS = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export const SOCIAL_LINKS = [
    {
        icon: Github,
        url: "https://github.com/lustyun",
    },
    {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/fardus/",
    },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: "Javascript",
        logo: LogoJavascript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        label: "Typescript",
        logo: LogoTypescript,
        url: "https://www.typescriptlang.org/",
    },
    {
        label: "React",
        logo: LogoReact,
        url: "https://reactjs.org/",
    },
    {
        label: "Next.js",
        logo: LogoNextjs,
        url: "https://nextjs.org/",
    },
    {
        label: "Node.js",
        logo: LogoNodejs,
        url: "https://nodejs.org/",
    },
    {
        label: "Express.js",
        logo: LogoExpress,
        darkModeLogo: LogoExpressLight,
        url: "https://expressjs.com/",
    },
    {
        label: "Python",
        logo: Python,
        url: "https://www.python.org/",
    },
    {
        label: "Java",
        logo: LogoJava,
        darkModeLogo: LogoJava,
        url: "https://www.java.com/",
    },
    {
        label: "PostgreSQL",
        logo: LogoPostgreSQL,
        url: "https://www.postgresql.org/",
    },
    {
        label: "MongoDB",
        logo: LogoMongoDB,
        url: "https://www.mongodb.com/",
    },
    {
        label: "Firebase",
        logo: LogoFirebase,
        url: "https://firebase.google.com/",
    },
    {
        label: "Tailwindcss",
        logo: LogoTailwindcss,
        url: "https://tailwindcss.com/",
    },
    {
        label: "C++",
        logo: LogoC,
        url: "https://isocpp.org/",
    },
    {
        label: "Vue",
        logo: LogoVue,
        darkModeLogo: LogoVue,
        url: "https://vuejs.org/",
    },
    {
        label: "Angular",
        logo: LogoAngular,
        url: "https://angular.io/",
    },
    {
        label: "Git",
        logo: LogoGit,
        url: "https://git-scm.com/",
    },
];

export const EXPERIENCES: ExperienceDetails[] = [
    {
        logo: AmazonLogo,
        logoAlt: "Amazon logo",
        position: "Sortation Associate",
        startDate: new Date(2020, 5),
        currentlyWorkHere: true,
        summary: [
            "Optimizing Workflow: Actively suggesting and implementing changes to significantly enhance service efficiency, resulting in streamlined processes",
            "Collaborative Excellence: Collaborating with team members for reliable outcomes, fostering a cohesive and productive work environment",
            "Innovative Problem-Solving: Identifying and implementing solutions that maximize efficiency and quality, leading to improved customer satisfaction",
            "Proactive Issue Resolution: Swiftly resolving critical issues in time-sensitive environments using excellent analytical skills",
        ],
    },
];

export const PROJECTS: ProjectDetails[] = [
    {
        name: "Lofi Player",
        description:
            "The lofi player is a Next.js application I developed as a part of my projects. It's designed to play soothing lofi music tracks, providing a relaxing and calming atmosphere. The application is built using Next.js, which enables seamless navigation between different tracks and a smooth user experience. It allows users to select and play their favorite lofi tracks, creating a personalized and enjoyable listening session.",
        url: "https://lofi-lustyun.vercel.app",
        previewImage: ProjectLofi,
        technologies: ["React", "Next.js", "Typescript"],
    },
    {
        name: "Memory Game",
        description:
            "The Memory Game is a classic card matching game where players need to find pairs of matching cards. The game board consists of a set of facedown cards, and players take turns flipping two cards at a time to find matching pairs. The objective is to uncover all the pairs in the fewest number of moves.",
        url: "https://lustyun.github.io/Memory-Game/",
        previewImage: ProjectMemoryGame,
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Translator",
        description:
            "This is a translation app built using React that allows you to translate text between different languages. It interacts with the RapidAPI platform for translation and language detection services.",
        url: "https://fantastic-kringle-dfac24.netlify.app/",
        previewImage: ProjectTranslator,
        technologies: ["React", "RapidAPI", "Speech Synthesis API"],
    },
];
