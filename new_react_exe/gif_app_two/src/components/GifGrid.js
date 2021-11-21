import React, { useEffect, useState } from "react";
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifsImg();
  }, []);

  const getGifsImg = async () => {
    const urlApi = `https://api.giphy.com/v1/gifs/search?q=homero&limit=10&api_key=JKJeb3Vwarxcy3pWRoiFYKOgFFjz7epq`;
    const response = await fetch(urlApi);
    const { data } = await response.json();

    const gifsIndvidual = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifsIndvidual);
  };

  return (
    <>
      <h3>{categoria}</h3>
      <ol>
        {images.map(img => (
          <GifGridItem key={img.id} {...img}/>
        ))}
      </ol>
    </>
  );
};
