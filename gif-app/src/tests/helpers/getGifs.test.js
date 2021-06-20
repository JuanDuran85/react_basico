import '@testing-library/jest-dom';
import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs', () => {
    const categoria = "Homero";

    test('probando parametros', async () => {
        const result = await getGifs(categoria);
        expect(result.length).toBe(10);
    });

    test('sin categoria', async () => {
        const result = await getGifs('');
        expect(result.length).toBe(0);
    });
});