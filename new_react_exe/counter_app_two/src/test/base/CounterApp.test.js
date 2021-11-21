import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import '../setupTests'
import CounterApp from '../../CounterApp';

describe('Test general', () => {
    test('debe mostrar el mensaje de Counter App', async () => {
        const wrapper = render(<CounterApp />);
        expect(wrapper.getByText('Counter App')).toBeTruthy();
    });

    test('Debe mostrar la palabra Counter App con enzyme', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper.find('h1').text()).toBe('Counter App');
        expect(wrapper).toMatchSnapshot();
    });
});
