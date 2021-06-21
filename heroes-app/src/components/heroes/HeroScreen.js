import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (!heroe) {
        return <Redirect to="/" />
    }
    const {alter_ego, first_appearance, publisher, characters, superhero} = heroe;

    const handleClick = () => {
        if (history.length <=2) {
            history.push('/');
        } else {
            history.goBack();
        };
    };

    return (
        <div className="card mt-5 animate__animated animate__backInUp">
            <img src={`/assets/heroes/${heroeId}.jpg`} className="card-img-top" alt={heroeId} />
            <div className="card-body">
                <h5 className="card-title">{alter_ego}</h5>
                <p className="card-text">Publisher {publisher}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Characters: {characters}</li>
                <li className="list-group-item">First Appearance: {first_appearance}</li>
                <li className="list-group-item">Superhero: {superhero}</li>
            </ul>
            <div className="card-body">
                <button className="btn btn-outline-success" onClick={handleClick}>Regresar</button>
            </div>
        </div>
    );
};