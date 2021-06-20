import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
// import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraAPP', () => {
/*     test('debe mostrar el mensaje', () => {
        const saludo = "React Nuevo con saludo";
        const wrapper = render(<PrimeraApp saludo="saludo"/>);
        expect(wrapper.getByText(saludo)).toBeInTheDocument();
    }); */
    
    test('mostrando el mensaje en la APP', () => {
        const saludo = "React Nuevo con saludo";
        const subtitulo = "Nuevo sub";
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}
        />);
        
        const textoparrafdo = wrapper.find('p').text();
        expect(textoparrafdo).toEqual('Nuevo parrafo con '+subtitulo);
    });
    
});