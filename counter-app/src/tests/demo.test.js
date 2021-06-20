describe('Primera Prueba Basica', () => {
    test('deben de ser iguales los string', () => {
        // 1. inicializacion
        const mensaje = 'Nuevo Mensaje';
    
        // 2. estimulo
        const mensaje2 = 'Nuevo Mensaje';
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});

