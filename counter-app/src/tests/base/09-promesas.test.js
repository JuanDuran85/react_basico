import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('retorna Heroes async', () => {
        const id = 1;
        return getHeroeByIdAsync(id).then((h) => {
            console.log(h);
            expect(h).toBe(heroes[0]);
        });
    });

    test('retorna error', () => {
        const id = 10;
        return getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
        })
    });
});