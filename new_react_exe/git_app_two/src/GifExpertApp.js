import React, { useState } from 'react';

export const Gifexpertapp = () => {

    const [categories, setcategories] = useState(['Homero','Laugh','Wtf', 'What']);

    const handleAdd = () => {
        setcategories([...categories, 'Nueva categoria']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    );
}
