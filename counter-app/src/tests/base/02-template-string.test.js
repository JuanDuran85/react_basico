import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Prueba en el metodo getSaludo', () => {
        const nombre = "Nombre Usuario";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre);
    });

    test('valor por defecto', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
});
