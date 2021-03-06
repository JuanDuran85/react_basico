export const getGifsImg = async (categoria) => {

    const urlApi = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=jdQUvRTPGmQypr9iugDdZ8lfOCzFxYFc`;
    const response = await fetch(urlApi);
    const { data } = await response.json();
    
    return data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
  };