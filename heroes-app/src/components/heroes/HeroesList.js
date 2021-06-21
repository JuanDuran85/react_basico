import React, { useMemo } from 'react';
import { HeroeCard } from "./HeroeCard";
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    heroes.map(h => (
                        <HeroeCard key={h.id} {...h} />
                    ))
                }
        </div>
    );
};