import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock('../../hooks/useFetchGif');

describe('Prueba al componente GifGrid', () => {
    const categoria = "Homero";

    test('prueba uno', () => {
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid categoria={categoria}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar item', () => {
        const valor = [
            {
                id: 1234,
                title: 'Homero en Imagen',
                url: 'https://img.com/img-jpg',
            },
            {
                id: 8765,
                title: 'Risas',
                url: 'https://img.com/risas.jpg',
            },
        ];
        useFetchGif.mockReturnValue({
            data: valor,
            loading: false
        });
        const wrapper = shallow(<GifGrid categoria={categoria}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(valor.length);
    }); 
});