import React, {Component} from 'react';
import { shallow, mount } from 'enzyme'
import SearchInput from '../../components/SearchInput/SearchInput'

describe('SearchInput component', () => {

  // I dont know if I can test the state change of this input. Its an autocomplete input component library that I installed from NPM
  it.skip('should update state when the input value changes', () => {
    const wrapper = mount(<SearchInput />)

    console.log(wrapper.debug())
  });

  // can I simulate the click of a button calling a method on a class based component?
  it.skip('should call a function when the submit button is clicked', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<SearchInput />)
    const submitBtn = wrapper.find('.submit-btn')
    
    submitBtn.simulate('click')
  });


});
