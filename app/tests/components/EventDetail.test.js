import React, {Component} from 'react';
import { shallow, mount } from 'enzyme'
import { cleanedMockData } from '../mockData';
import EventDetail from '../../components/EventDetail/EventDetail'
import moment from 'moment';

describe('EventDetail component', () => {

  const event = cleanedMockData[1]

  const latLong = event.venue.location

  const match = {
    params: {
      id: event.id
    }
  }

  const dates = {
    day: moment(event.date).format('ddd'),
    month: moment(event.date).format('MMMM'),
    dateNum: moment(event.date).format('D'),
    time: moment(event.date).format('h:mm'),
    ampm: moment(event.date).format('a'),
  }

  const wrapper = shallow(
    <EventDetail
      events={cleanedMockData}
      latLong={latLong}
      match={match}
    />
  )

  it('should render a primary artist name', () => {
    const PrimaryArtistName = wrapper.find('.primary-artist-details .artist-name')
    expect(PrimaryArtistName.props().children).toEqual(event.performers.primary)
  });

  it('should render the primary artist\'s genres', () => {
    const renderedGenreList = wrapper.find('.primary-artist-details .genre-list')
    const renderedGenres = renderedGenreList.props().children.map(child => child.props.children)
    expect(renderedGenres).toEqual(event.performers.genres[event.performers.primary])
  });

  it('should render a supporting artist name', () => {
    const SupportingArtistName = wrapper.find('.supporting-artist-details .artist-name')
    expect(SupportingArtistName.props().children).toEqual(event.performers.supporting[0])
  });

  it('should render the supporting artist\'s genres', () => {
    const renderedGenreList = wrapper.find('.supporting-artist-details .genre-list')
    const renderedGenres = renderedGenreList.props().children.map(child => child.props.children)
    expect(renderedGenres).toEqual(event.performers.genres[event.performers.supporting[0]])
  });

  it('should render a venue name', () => {
    const renderedVenueName = wrapper.find('.venue-name')
    expect(renderedVenueName.props().children).toEqual(event.venue.name)
  });

  it('should render a venue address', () => {
    const renderedVenueAddress1 = wrapper.find('.venue-address-1')
    const renderedVenueAddress2 = wrapper.find('.venue-address-2')
    expect(renderedVenueAddress1.props().children).toEqual(event.venue.address1)
    expect(renderedVenueAddress2.props().children).toEqual(event.venue.address2)
  });

  it('should render an event date', () => {
    const renderedEventDate = wrapper.find('.event-date')
    expect(renderedEventDate.props().children).toEqual(`${dates.day}, ${dates.month} ${dates.dateNum}`)
  });

  it('should render an event time', () => {
    const renderedEventTime = wrapper.find('.event-time')
    expect(renderedEventTime.props().children).toEqual(`${dates.time}${dates.ampm}`)
  });

});
