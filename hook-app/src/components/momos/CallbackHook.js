import React, { useCallback, useState } from 'react';
import { ShowIncrement } from "./ShowIncrement";

import '../useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

/*     const incrementar = () => {
        setCounter(counter + 1);
    }; */
    
    const incrementar = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter],
    )
    return (
        <div>
            <h1>Callback Hook - {counter}</h1>
            <hr/>
            <ShowIncrement incrementar={incrementar}/>
        </div>
    )
}
