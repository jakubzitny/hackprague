import React from 'react';
import chai, { expect } from 'chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';


Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
chai.use(chaiJestSnapshot)


describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).to.matchSnapshot()
  });

})
