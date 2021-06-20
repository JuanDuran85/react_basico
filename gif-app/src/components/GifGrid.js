import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({categoria}) => {

    const { data: images, loading } = useFetchGif(categoria);

/*     const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs(categoria)
            .then(setImages)
            .catch(error => console.error(error));
    },[categoria]); */

    return (
        <>
            <h1 className="animate__animated animate__flash">{categoria}</h1>
            { loading && 'Cargando...'}
            <div className="cardGrid">
                {
                    images.map((img) => (
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </>
    );
};

GifGrid.prototype = {
    categoria: PropTypes.string.isRequired,
};