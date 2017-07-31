import React, {Component} from 'react';
import { shallow, mount } from 'enzyme'
import { cleanedMockData, initialMockData } from '../mockData';
import fetchMock from 'fetch-mock';
import apiKey from '../../apiKey';
import Main from '../../components/Main/Main'

describe('Main component', () => {

  const events = cleanedMockData;

  it('should render an amount of EventCards equal to the amount of events', () => {
    const wrapper = shallow(<Main events={cleanedMockData} />)
    const eventCards = wrapper.find('Connect(EventCard)')

    expect(eventCards.length).toEqual(events.length);
  });

  it('should render the name of the currently searched location', () => {
    const location = 'Denver, CO'
    const wrapper = shallow(<Main location={location} events={cleanedMockData} />)
    const renderedLocation = wrapper.find('.location-name')

    expect(renderedLocation.props().children).toEqual(location);
  });

  it('should render the correct event count', () => {
    const eventCount = events.length
    const wrapper = shallow(<Main events={cleanedMockData} />)
    const renderedEventCount = wrapper.find('.event-count')
                                      .props().children[0]

    expect(renderedEventCount).toEqual(eventCount);
  });


});
