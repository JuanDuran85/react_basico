import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Prueba de funciones', () => {
    test('Debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_1502'
        }
        const resultado = getUser();

        expect(resultado).toEqual(userTest);
    });

    test('retorna objeto con nombre como argumento', () => {
        const nombre = "NombreUser";
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };
        const usuario = getUsuarioActivo(nombre);
        expect(usuario).toEqual(userTest);
    });
});