import React, {Component} from 'react';
import { shallow, mount } from 'enzyme'
import { cleanedMockData } from '../mockData';
import EventCard from '../../components/EventCard/EventCard'

describe('EventCard component', () => {

  const eventWithNoOpener = cleanedMockData[0];
  const eventWithOpener = cleanedMockData[3];

  it('should render a primary artist name', () => {
    const wrapper = shallow(<EventCard event={eventWithOpener} />)
    const renderedPrimaryArtist = wrapper.find('.primary-artist')
    const primaryArtistName = eventWithOpener.performers.primary

    expect(renderedPrimaryArtist.props().children).toEqual(primaryArtistName)
  });

  it('should render a supporting artist name if the show includes an openner', () => {
    const wrapper = shallow(<EventCard event={eventWithOpener} />)
    const renderedSupportingArtists = wrapper.find('.supporting-artists')
    const supportingArtistsName = eventWithOpener.performers.supporting

    expect(renderedSupportingArtists.props().children[1][0]).toEqual(supportingArtistsName[0])
  });

  it('should NOT render a supporting artist name if the show does not include an openner', () => {
    const wrapper = shallow(<EventCard event={eventWithNoOpener} />)
    const renderedSupportingArtists = wrapper.find('.supporting-artists')

    expect(renderedSupportingArtists.props().children).toEqual(undefined)
  });

  it('should render the name of the venue', () => {
    const wrapper = shallow(<EventCard event={eventWithNoOpener} />)
    const renderedVenueName = wrapper.find('.venue-name')

    expect(renderedVenueName.props().children).toEqual(eventWithNoOpener.venue.name)
  });

  it('should render the address of the venue', () => {
    const wrapper = shallow(<EventCard event={eventWithNoOpener} />)
    const renderedVenueAddress = wrapper.find('.venue-address')
    const venueAddress = `${eventWithNoOpener.venue.address1}, ${eventWithNoOpener.venue.address2}`

    expect(renderedVenueAddress.props().children).toEqual(venueAddress)
  });

  it('should render the date and time of the event', () => {
    const wrapper = shallow(<EventCard event={eventWithNoOpener} />)
    const renderedEventDate = wrapper.find('.date')
    const renderedEventTime = wrapper.find('.time')

    expect(renderedEventDate.props().children).toEqual('Sun 7/30')
    expect(renderedEventTime.props().children).toEqual('3:00 pm')
  });

});
