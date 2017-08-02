import React, {Component} from 'react';
import { shallow, mount } from 'enzyme'
import { cleanedMockData, initialMockData, cleanedTodayMockData } from '../mockData';
import Main from '../../components/Main/Main'

describe('Main component', () => {

  const events = cleanedMockData;

  it('should render an amount of EventCards equal to the amount of events', () => {
    const wrapper = shallow(<Main events={cleanedTodayMockData} />)
    const eventCards = wrapper.find('EventCard')

    expect(eventCards.length).toEqual(cleanedTodayMockData.length);
  });

  it('should render the name of the currently searched location', () => {
    const location = 'Denver, CO'
    const wrapper = shallow(<Main location={location} events={events} />)
    const renderedLocation = wrapper.find('.location-name')

    expect(renderedLocation.props().children).toEqual(location);
  });

  it('should render the correct event count', () => {
    const eventCount = events.length
    const wrapper = shallow(<Main events={events} />)
    const renderedEventCount = wrapper.find('.event-count')
                                      .props().children[0]

    expect(renderedEventCount).toEqual(eventCount);
  });

  it.skip('should render a map component', () => {
    const location = 'Denver, CO'
    const wrapper = shallow(<Main location={location} events={cleanedTodayMockData} />)
    console.log(wrapper.debug());
  });

});
