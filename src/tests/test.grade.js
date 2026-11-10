import { describe, it, expect } from "vitest";
//підрахунок заг сума балів
function calculateSum(marks){
    return marks.reduce((sum, mark) => sum + mark, 0);
}
//підрахунок % виконаних робіт
function calculateProgress(marks) {
    return Math.round(
        (marks.filter(mark => mark > 0).lenght / 5) * 100
    );
}
describe('Перевірка оцінок студентів', () => {
    it('правильно підраховує суму балів', () => {
        expect(calculateSum([10, 12, 15, 8, 5])).toBe(50);
    });
    it('правильно обчислює відсоток виконаних робіт', () => {
        expect(calculateProgress([10, 12, 0, 8, 0])).toBe(60);
    });
    it('показує 0% якщо немає оцінок', () => {
        expect(calculateProgress([0, 0, 0, 0, 0])).toBe(0);
    });
});