import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('prueba desestructuracion', () => {
    test('retorna un string y un numero', () => {
        const [letra, numero] = retornaArreglo();
        // expect(resultado).toEqual(['ABC', 123]);
        expect(letra).toBe('ABC');
        expect(typeof letra).toBe('string');
        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
    });
})
