import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {
    
    //const categorias = ['Risas', 'Homero', 'No'];

    const [categories, setCategories] = useState(['Risas', 'Homero', 'No']);

    const agregarValue = () => {
        // setCategories([...categories, 'nuevo elemento']);
        setCategories(categories => [...categories, 'nuevo Elemento']);
    }

    return (
        <div>
            <h1>Gif Experct App</h1>
            <hr />

            <button onClick={agregarValue}>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </div>
    )
}

// GifExpertApp.propTypes = {}

export default GifExpertApp
