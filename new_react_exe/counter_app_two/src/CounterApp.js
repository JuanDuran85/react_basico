import { PropTypes } from 'prop-types';
import { React, useState } from 'react';

const CounterApp = ({valor}) => {

    const [counter, setCounter] = useState(valor);

    const clickButtonPlus = (e) => {
        console.log('click', e);
        setCounter(counter + 1);
        // o setCounter((c)=>c+1)
    }

    const clickButtonMinus = () => {
        if (counter > 0) setCounter(counter - 1);
    }

    const clickButtonReset = () => setCounter(0);

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={clickButtonPlus}>+1</button>
            <button onClick={clickButtonReset}>Reset</button>
            <button onClick={clickButtonMinus}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    valor: 0
}

export default CounterApp;