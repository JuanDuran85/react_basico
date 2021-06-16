import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CountApp = ({value}) => {

    const [counter, setCounter ] = useState(value);

    const incrementa = () =>{
        setCounter(counter + 1);
        // setCounter((c)=>c+1);
    };

    const decrementa = () => {
        setCounter(counter - 1);
    }

    const resetValue = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CountApp</h1>
            <p>{counter}</p>
            <button onClick={incrementa}>+1</button>
            <button onClick={resetValue}>Reset</button>
            <button onClick={decrementa}>-1</button>
        </>
    );
};

CountApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CountApp;