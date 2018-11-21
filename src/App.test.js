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
  it('renders without crashing with ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders shallowly with correct text', () => {
    const wrapper = shallow(<App />)

    console.log(wrapper.debug())

    expect(wrapper).to.have.descendants('Header')
  })


  it('renders correct text', () => {
    const wrapper = mount(<App />)

    console.log(wrapper.debug())

    expect(wrapper).to.contain.text('Ahoj, webdev!')
  })


  it('renders fully correctly', () => {
    const wrapper = mount(<App />)

    console.log(wrapper.debug())

    expect(wrapper).to.matchSnapshot()
  })
})
