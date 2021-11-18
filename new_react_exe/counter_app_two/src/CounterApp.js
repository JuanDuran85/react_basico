import { PropTypes } from 'prop-types';
import { React } from 'react';

const CounterApp = ({valor}) => {

    const clickBotton = (e) => {
        console.log('click', e);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{valor}</h2>
            <button onClick={clickBotton}>+1</button>
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