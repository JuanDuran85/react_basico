import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {

    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`,3000);

    const {quote } = !!data && data[0];

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p ref={pTag}>{quote}</p>
                </blockquote>
            </figure>
            <button type="button" className="btn btn-info" onClick={()=>increment()}>Siguiente...</button>
            <h4 className="mt-5">Posición y Ubicación</h4>
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
        </div>
    )
}
