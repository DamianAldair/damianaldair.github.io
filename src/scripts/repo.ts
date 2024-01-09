export interface Skill {
    name: string;
    r: number;
    g: number;
    b: number;
}

export const skills: Skill[] = [
    { name: 'Dart', r: 35, g: 89, b: 151 },
    { name: 'Flutter', r: 13, g: 61, b: 161 },
    { name: 'Dart Frog', r: 95, g: 206, b: 135 },
    { name: 'Java', r: 245, g: 130, b: 25 },
    { name: 'SQL', r: 0, g: 188, b: 242 },
    { name: 'SQLite', r: 15, g: 128, b: 204 },
    { name: 'PostgreSQL', r: 51, g: 103, b: 145 },
    { name: 'Markdown', r: 0, g: 0, b: 0 },
    { name: 'Git', r: 222, g: 76, b: 54 },
];

export function getImgFromSkill(skill: string): string {
    return skill
        .trim()
        .toLowerCase()
        .replaceAll(' ', '_')
        + '.svg';
}

export interface Experience {
    startYear: number;
    finishYear: number;
    title: string;
    description: string;
    url?: string;
}

export const experiences: Experience[] = [
    {
        startYear: 2021,
        finishYear: 2023,
        title: 'Desarrollador móvil como estudiante de la CUJAE',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id libero dicta tempora, adipisci, quis eos, saepe perspiciatis quos illum ipsum ea sed fugiat repellendus odit commodi illo tenetur quod?',
        url: 'https://www.redalyc.org/journal/5600/560059292002/html/',
    },
    {
        startYear: 2024,
        finishYear: 2024,
        title: 'Trabajo para un chino',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id libero dicta tempora, adipisci, quis eos, saepe perspiciatis quos illum ipsum ea sed fugiat repellendus odit commodi illo tenetur quod?'
    },
    {
        startYear: 2023,
        finishYear: -1,
        title: 'Confeción de mi porfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id libero dicta tempora, adipisci, quis eos, saepe perspiciatis quos illum ipsum ea sed fugiat repellendus odit commodi illo tenetur quod?'
    },
];

export function getExperienceDate(experience: Experience): string {
    const { startYear: y1, finishYear: y2 } = experience;

    if (y2 === y1) return `${y1}`;
    if (y2 != -1) return `${y1} - ${y2}`;

    const currentYear = new Date().getFullYear();
    if (y1 != currentYear) return `${y1} - Actualidad`;
    return 'Actualmente';
}