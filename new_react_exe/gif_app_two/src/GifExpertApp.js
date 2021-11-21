import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const Gifexpertapp = () => {

    const [categories, setcategories] = useState(['Homero']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategories setCategories = { setcategories }/>
            <hr />
            
            <div>
                {
                    categories.map(category => <GifGrid key = { category } categoria = {category} />)
                }
            </div>
        </>
    );
}
