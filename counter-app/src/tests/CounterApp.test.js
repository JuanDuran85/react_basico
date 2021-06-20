import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {
    let wrapper = shallow(<CounterApp value={100}/>);;
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={100}/>);
    });

    test('prueba con snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        const result = wrapper.find('p').text().trim();
        expect(result).toEqual('100');
    });
    
    test('incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const result = wrapper.find('p').text().trim();
        // console.log(boton1.html());
        expect(result).toBe('101');
    });

    test('incrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const result = wrapper.find('p').text().trim();
        // console.log(boton1.html());
        expect(result).toBe('99');
    });

    test('reset con el boton', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const result = wrapper.find('p').text().trim();
        // console.log(boton1.html());
        expect(result).toBe('100');
    });
});