import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruenas en GifGridItem', () => {
    const id = 1;
    const title = "nueva imagen";
    const url = "https://loquesea.com/loquesea.jpg";
    let wrapper = shallow(<GifGridItem id={id} title={title} url={url}/>);
    
    beforeEach(() => {
        wrapper = shallow(<GifGridItem id={id} title={title} url={url}/>);
    });

    test('pruebas basica 1', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        const encontrado = wrapper.find('p').text().trim();
        expect(encontrado).toBe(title);
    });

    test('imagen igual al url de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('title')).toBe(title);
    });
    
    test('debe tener clase animate__swing', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__swing')).toBe(true);
        const div2 = wrapper.find('div').prop('className');
        expect(div2.includes('animate__swing')).toBe(true);
    });
});