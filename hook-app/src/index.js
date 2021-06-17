import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from "./components/useState/CounterApp";
import { CounterWithCustomHook } from "./components/useState/CounterWithCustomHook";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <CounterWithCustomHook />,
  document.getElementById('root')
);