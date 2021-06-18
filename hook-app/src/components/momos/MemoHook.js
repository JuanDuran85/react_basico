import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProPes = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>
            <p>{memoProPes}</p>
            <button type="button" className="btn btn-outline-secondary" onClick={()=>increment()}>+1</button>
            <button type="button" className="btn btn-outline-danger ms-4" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    );
};