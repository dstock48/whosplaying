import * as actions from '../../actions/index';
import { cleanedMockData, initialMockData } from '../mockData';
import fetchMock from 'fetch-mock';
import apiKey from '../../apiKey'

describe('actions', () => {

  const events = cleanedMockData;

  it('should create an action to set current location', () => {
    const location = 'Wantagh, NY';
    const expectedAction = {
      type: 'LOCATION_CHANGE',
      location: 'Wantagh, NY'
    }
    expect(actions.setCurrentLocation(location)).toEqual(expectedAction);
  });

  it('should create an action to set event data', () => {
    const expectedAction = {
      type: 'EVENT_DATA',
      events: events
    }
    expect(actions.eventData(events)).toEqual(expectedAction);
  });

  it('should create an action to set latitude and longitude  data', () => {
    const latLongObj = { "lat": 42.88644679999999, "lng": -78.8783689 };
    const expectedAction = {
      type: 'LAT_LONG',
      latLongObj: latLongObj
    }
    expect(actions.LatLong(latLongObj)).toEqual(expectedAction);
  });

  it('should create an action to set the Day View for event results', () => {
    const dayView = 7;
    const expectedAction = {
      type: 'SELECT_DAY_VIEW',
      dayView: dayView
    }
    expect(actions.setDayView(dayView)).toEqual(expectedAction);
  });

  it('should fetch event data from Seat Geek API', () => {
    const dispatch = (action) => {
      return action
    }

    const url = `https://api.seatgeek.com/2/events?client_id=${apiKey}&geoip=true&range=10mi&type=concert&per_page=1000&datetime_local.lte=2017-07-30`

    fetchMock.get(url, {status: 200, body: initialMockData})

    const eventData = actions.fetchEventData(url)

    eventData(dispatch)

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual(url)
  });

});
