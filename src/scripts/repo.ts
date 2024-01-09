

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