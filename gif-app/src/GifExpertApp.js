import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Homero']);

/*     const agregarValue = () => {
        setCategories([...categories, 'nuevo elemento']);
        setCategories(categories => [...categories, 'nuevo Elemento']);
    } */

    return (
        <div>
            <h1>Gif Experct App</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            categoria={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

// GifExpertApp.propTypes = {}

export default GifExpertApp
