import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../components/App';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('Should render only one App container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).to.equal(1);
   });
});