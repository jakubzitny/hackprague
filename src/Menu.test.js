import React from 'react';
import chai, { expect } from 'chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Menu from './Menu';


Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
chai.use(chaiJestSnapshot)


describe('Menu', () => {
  it.skip('renders correctly', () => {
    const wrapper = mount(<Menu />)

    expect(wrapper).to.matchSnapshot()
  });


  it('renders with three menu items', () => {
    const wrapper = shallow(<Menu />)

    expect(wrapper.find('.App-menu-item')).to.have.length(3)
  });
})
