import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas con Async/Await', () => {
    test('retorna la url', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
    test('retorna la url 2', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});
