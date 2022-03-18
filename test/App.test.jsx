import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/frontend/components/App/App.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    test('displays a paragraph', () => {
        const app = shallow(<App />)
        const parahraph = app.find('p')
        expect(parahraph).toHaveLength(1)
    })
})