# react_basico
Ejercicios bàsicos de React.

# Comando desde la terminal

1. Creando una aplicacion de react desde la terminal
    ```
    npx create-react-app nombre_aplicacion
    ```
    ```
    npm init react-app my-app
    ```
2. Inicio de aplicacion
    ```
    npm start
    ```
    ```
    yarn start
    ```
# Snippets directos en VSC

1. rafcp -> para crear un functional component con proptypes
2. 

# Instalaciones recomendadas
1. Enzyme para version 16
    ```
    npm i --save-dev enzyme enzyme-adapter-react-16
    ```
2. Enzyme para version 17 de react
    ```
    npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17
    npm install --save-dev enzyme
    ```

    - Configuracion para la version 17

    ```
    import Enzyme from 'enzyme';
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
    import {createSerializer} from 'enzyme-to-json';
    expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
    
    Enzyme.configure({ adapter: new Adapter() });
    ```

3. Enzyme to Json
    ```
    npm install --save-dev enzyme-to-json
    ```