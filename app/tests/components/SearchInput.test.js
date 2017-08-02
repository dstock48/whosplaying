import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';
import SearchInput from '../../components/SearchInput/SearchInput';
import fetchMock from 'fetch-mock';
import apiKey from '../../apiKey'

describe('SearchInput component', () => {

  const props = {
   mockedSetLocation: jest.fn(),
   history: { push: jest.fn() }, // '/'
   setLocation: jest.fn()
  }

  it('should update state when the input value changes', () => {

    // can't get past this error...
    // No fallback response defined for GET to https://maps.googleapis.com/maps/api/geocode/json?address=Chicago+IL&key=AIzaSyDZ4s1ZJ6ZKIVJgjoehsntM4zlwvkPk7FM

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=Chicago+IL&key=${apiKey}`

    fetchMock.get(url, {status: 200, body: {lat: 41.8781136, lng: -87.6297982}})

    const wrapper = mount(<SearchInput {...props} />)
    wrapper.setState({location: 'Chicago, IL' })
    wrapper.find('button').simulate('click')

  });




});
