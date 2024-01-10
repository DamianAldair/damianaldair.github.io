import type { Experience } from "./repo";

export function getXpYears(): string {
    const year: number = new Date().getFullYear();
    return `${year - 2022}`;
}

export function getImgFromSkill(skill: string): string {
    return skill
        .trim()
        .toLowerCase()
        .replaceAll(' ', '_')
        + '.svg';
}

export function getExperienceDate(experience: Experience): string {
    const { startYear: y1, finishYear: y2 } = experience;

    if (y2 === y1) return `${y1}`;
    if (y2 != -1) return `${y1} - ${y2}`;

    const currentYear = new Date().getFullYear();
    if (y1 != currentYear) return `${y1} - Actualidad`;
    return 'Actualmente';
}