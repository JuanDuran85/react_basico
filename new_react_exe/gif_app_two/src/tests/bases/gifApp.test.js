import { Gifexpertapp } from '../../GifExpertApp';
import { shallow } from 'enzyme';

import "../setupTests";

describe('Test One Componente', () => {
    
    let wrapper = shallow(<Gifexpertapp />);

    beforeEach(() => {
        wrapper = shallow(<Gifexpertapp />);
    })
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
