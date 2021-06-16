import React from "react";
import PropTypes from 'prop-types';

// trabajando con functinal component

const PrimeraApp = ({ saludo, subtitulo }) => {
    // const variable1 = 'Nueva variable agregada';
    
    return (
        <>
            <h1>React Nuevo con {saludo}</h1>
            <p>Nuevo parrafo con { subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'valor por defecto'
}

export default PrimeraApp;