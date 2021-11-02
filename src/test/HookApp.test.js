import { shallow } from "enzyme";
import HookApp from '../HookApp';

describe('Pruebas en HookApp.js', () => {
    test('Debe hacer un snapshot de HookApp', () => {
        const wrapper = shallow(<HookApp />)
        expect( wrapper ).toMatchSnapshot()
    });
})
