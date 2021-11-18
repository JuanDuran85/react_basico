/* Funtional components */

import React from 'react';

const PrimeraApp = () => {

    const saludo = 'Nuevo saludo desde variable';
    const objetoPersona = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: '30'
    }
    /* 
        No se imprimen varibles booleanas, los arreglos los muestra concatenados como string 
        Los objetos literales no se pueden mostrar directamente, se deben mostrar con JSON.stringify o utilizar el metodo Object.keys para mostrar un valor como estring o utilizar la etiqueta pre con el JSON.stringify para que se vea mejor
    */

    return (
        <>
            <h1>Hola Mundo...</h1>
            <p>Este es el contenido de mi primera app en React</p>
            <p>{saludo}</p>
            <pre>{JSON.stringify(objetoPersona, null, 3)}</pre>
            <p>{objetoPersona.nombre}</p>
        </>
    );
}

export default PrimeraApp;