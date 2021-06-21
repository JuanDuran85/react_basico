import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) throw new Error(`El termino ${publisher} no existe`);
    
    return heroes.filter(h => h.publisher === publisher);
};