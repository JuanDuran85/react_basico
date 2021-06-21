import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroeCard  } from "../heroes/HeroeCard";
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [{busqueda}, handleInputChange] = useForm({busqueda: q});
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (busqueda.trim().length <= 2) {
            return;
        };
        history.push(`?q=${busqueda}`);
    };

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);
    
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Encuentra a tu Heroe" onChange={handleInputChange} name="busqueda" value={busqueda}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                   <h4>Resultados</h4>
                   <hr/>

                    {
                        (q === '') && <div className="alert alert-info"> Buscando un heroe... </div>
                    }

                    {
                        (q !== '' && heroesFilter.length === 0) && <div className="alert alert-info"> No existe un heroes para la busqueda. </div>
                    }

                   {
                       heroesFilter.map(hero => (
                        <HeroeCard key={hero.id} {...hero}/>
                       ))
                   }
                </div>
            </div>
        </div>
    )
}
