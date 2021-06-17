import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs();
    },[])

    const getGifs = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Homero&limit=10&api_key=JKJeb3Vwarxcy3pWRoiFYKOgFFjz7epq";
        const result = await fetch(url);
        const {data} = await result.json();
        const gifs = data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });

        setImages(gifs);
    };

    return (
        <div>
            <h1>{categoria}</h1>
            {
                images.map((img) => (
                    <GifGridItem key={img.id} {...img}/>
                ))
            }
        </div>
    );
}
