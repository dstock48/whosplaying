import React, {Component} from 'react';
import { shallow, mount } from 'enzyme'
import { cleanedMockData, initialMockData, cleanedTodayMockData } from '../mockData';
import Main from '../../components/Main/Main'

describe('Main component', () => {

  const events = cleanedMockData;

  it('should render a message if no events are found', () => {
    const wrapper = shallow(<Main events={[]} />)
    const message = wrapper.find('.no-events-msg')

    expect(message.length).toEqual(1);
  });

  it('should render an amount of EventCards equal to the amount of events', () => {
    const wrapper = shallow(<Main events={cleanedTodayMockData} />)
    const eventCards = wrapper.find('EventCard')

    expect(eventCards.length).toEqual(11);
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

  it('should render a map', () => {
    const location = 'Denver, CO'
    const wrapper = shallow(<Main location={location} events={cleanedTodayMockData} />)
    const mapElement = wrapper.find('.map-element')
    expect(mapElement.length).toEqual(1)
  });

});
