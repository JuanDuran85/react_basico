import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../useEffect/effects.css';

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1);

    const {loading , data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`,3000);

    const {quote, author } = !!data && data[0];
    
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading ? 
                ( 
                    <div className="alert alert-primary">
                        Loading...
                    </div>
                ) 
                    : 
                (
                    <figure className="text-end">
                        <blockquote className="blockquote">
                            <p>{quote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title={author}>{author}</cite>
                        </figcaption>
                    </figure>
                )
            }

            <button type="button" className="btn btn-info" onClick={()=>increment()}>Siguiente...</button>
        </div>
    )
}
