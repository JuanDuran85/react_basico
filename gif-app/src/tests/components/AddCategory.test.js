import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";

describe('Probando Add Category', () => {
    
    const funcionX = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={funcionX}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={funcionX}/>);
    });
    
    test('primera prueba', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('prueba en caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola Mundo";
        input.simulate('change', {target: {value}});
    });

    test('queno se llame la funcion', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(funcionX).not.toHaveBeenCalled();
    });

    test('llamar funcion y limpiar', () => {
        const value = "Hola Mundo";
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(funcionX).toHaveBeenCalled();
        expect(funcionX).toHaveBeenCalledTimes(1);
        expect(funcionX).toHaveBeenCalledWith(expect.any(Function));
        const result = wrapper.find('input').prop('value');
        expect(result).toEqual('');
    });
});