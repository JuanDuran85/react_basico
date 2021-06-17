export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=JKJeb3Vwarxcy3pWRoiFYKOgFFjz7epq`;
    const result = await fetch(url);
    const {data} = await result.json();
    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifs;
};