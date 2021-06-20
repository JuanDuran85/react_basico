import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('GifExperctApp pruebas', () => {
    let wrapper = shallow(<GifExpertApp />);
    
    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    })

    test('primera prueba', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('muestra lista categoria', () => {
        const categorias = ['Homero','Risas'];
        wrapper = shallow(<GifExpertApp defaultCategory={categorias}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toEqual(categorias.length);
    });
});