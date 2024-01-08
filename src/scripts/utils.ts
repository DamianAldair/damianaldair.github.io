export function getXpYears(): string {
    const year: number = new Date().getFullYear();
    return `+${year - 2022}`;
}