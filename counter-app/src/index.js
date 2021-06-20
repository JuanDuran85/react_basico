import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CountApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');
ReactDOM.render(<CountApp value={3}/>,divRoot);
// ReactDOM.render(<PrimeraApp saludo="saludo"/>,divRoot);