import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import App from './App';


Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
chai.use(chaiJestSnapshot)


describe('App', () => {
  it('renders shallowly with Header', () => {
    const wrapper = mount(<App />)

    // console.log(wrapper.debug())

    expect(wrapper).to.have.descendants(Header)
    expect(wrapper).to.have.descendants(MenuItem)
    expect(wrapper.find(MenuItem)).to.have.length(5)
  })


  it.only('should render correctly', () => {
    const wrapper = mount(<App />)

    console.log(wrapper.debug())
    expect(wrapper).to.matchSnapshot()
  })


  it('renders correct text', () => {
    const wrapper = mount(<App />)

    console.log(wrapper.debug())

    expect(wrapper).to.contain.text('Ahoj, webdev!')
  })


  it.skip('renders fully correctly', () => {
    const wrapper = mount(<App />)

    // console.log(wrapper.debug())

    expect(wrapper).to.matchSnapshot()
  })
})
