import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook } from "@testing-library/react-hooks";

describe('Prueba en Hook', () => {
    test('retorna estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGif('homero'));
        const { data, loading } = result.current;
        await waitForNextUpdate({timeout:1500});
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('retorna arreglo de imagenes', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGif('homero'));
        await waitForNextUpdate({timeout:1500});
        const { data, loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
});