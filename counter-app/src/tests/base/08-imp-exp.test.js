import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones que retornan objetos/arreglos', () => {
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeFinal = heroes.find(valor => valor.id === id);
        expect(heroe).toEqual(heroeFinal);
    });

    test('debe retornar undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('retorna un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const result = getHeroesByOwner(owner);
        const heroesFinal = heroes.filter( (v) => v.owner === owner);
        expect(result).toEqual(heroesFinal);
    });

    test('retorna un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const result = getHeroesByOwner(owner);
        const heroesFinal = heroes.filter( (v) => v.owner === owner);
        expect(result.length).toBe(heroesFinal.length);
    });
    
});
