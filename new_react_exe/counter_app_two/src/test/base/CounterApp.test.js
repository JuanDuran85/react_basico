import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";

import "../setupTests";
import CounterApp from "../../CounterApp";

describe("Test general texto plano", () => {
  test("debe mostrar el mensaje de Counter App", async () => {
    const wrapper = render(<CounterApp />);
    expect(wrapper.getByText("Counter App")).toBeTruthy();
  });

  test("Debe mostrar la palabra Counter App con Enzyme", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper.find("h1").text()).toBe("Counter App");
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor del contador", () => {
    const valor = 5;
    const wrapper = shallow(<CounterApp valor={valor} />);
    const textoParrafo = wrapper.find("h2").text().trim();
    expect(textoParrafo).toBe(`${valor}`);
  });
});

describe('Acciones y/o eventos', () => {
    let wrapper = shallow(<CounterApp/>);

    beforeEach(() => {
        wrapper = shallow(<CounterApp valor = { 5 }/>);
    });
    
    test('Debe incrementar el contador al hacer un click sobre el boton de +1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('h2').text().trim()).toBe('6');
    });

    test('Debe decrementar en uno el contador a hacer click sobre el boton de -1',()=>{
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('h2').text().trim()).toBe('4');
    });

    test('debe colocar el valor por defecto del contador al hacer un click sobre el boton de rest', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('h2').text().trim()).toBe('8');
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('h2').text().trim()).toBe('0');
    });
});

