import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(categoria)
            .then(img =>{
                setTimeout(() => {
                    setstate({
                        data: img,
                        loading: false
                    });
                }, 500);
            })
            .catch(error => console.error(error));
    },[categoria]);

    return state;
}
