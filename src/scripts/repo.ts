export const skills: string[] = [
    'Dart',
    'Flutter',
    'Dart Frog',
    'Java',
    'SQL',
    'SQLite',
    'PostgreSQL',
    'Markdown',
    'Git',
];

export function getImgFromSkill(skill: string): string {
    return skill
        .trim()
        .toLowerCase()
        .replaceAll(' ', '_')
        + '.svg';
}