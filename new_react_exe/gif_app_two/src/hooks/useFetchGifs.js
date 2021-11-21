/* Custom Hooks */
import { useState, useEffect } from "react";
import { getGifsImg } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  /* los efectos no pueden ser async */
  useEffect(() => {
    getGifsImg(categoria)
      .then(imgs => {
          setTimeout(() => {
              setstate({ data: imgs, loading: false });
          },3500);
      })
      .catch((error) => console.error(error));
  }, [categoria]);

  return state;
};
