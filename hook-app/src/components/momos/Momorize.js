import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../useEffect/effects.css';

export const Momorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>
            <button type="button" className="btn btn-outline-secondary" onClick={()=>increment()}>+1</button>
            <button type="button" className="btn btn-outline-danger ms-4" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    );
};