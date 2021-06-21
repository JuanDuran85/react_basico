import React from 'react';
import {Link} from "react-router-dom";

export const HeroeCard = ({id,superhero,publisher,alter_ego,first_appearance}) => {
    return (
        <div className="col animate__animated animate__wobble">
            <div className="card" >
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={id} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <p className="card-text">{publisher}</p>
                <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                <Link to={`./hero/${id}`} className="btn btn-primary">Mâs...</Link>
            </div>
            </div>
        </div>
    )
}
