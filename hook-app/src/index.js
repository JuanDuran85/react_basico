import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from "./components/useState/CounterApp";
// import { CounterWithCustomHook } from "./components/useState/CounterWithCustomHook";
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FormWithCustomHook } from "./components/useEffect/FormWithCustomHook";
// import { MultipleCustomHook } from "./components/examples/MultipleCustomHook";
// import { FocusScreen } from "./components/useRef/FocusScreen";
// import { RealExampleRef } from "./components/useRef/RealExampleRef";
//import { Layout } from "./components/useLayoutEffect/Layout";
import { Momorize } from "./components/momos/Momorize";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Momorize />,
  document.getElementById('root')
);