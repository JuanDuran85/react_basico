import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, restValue} = useCounter(0);

    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr/>

               <button onClick={() => increment(2)} className="btn btn-primary me-3">+1</button> 
               <button onClick={() => decrement(2)} className="btn btn-secondary me-3">-1</button>
               <button onClick={restValue} className="btn btn-secondary warning">Reset</button>
        </>
    )
}
