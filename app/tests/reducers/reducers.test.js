import { searchLocation } from '../../reducers/locationChange-reducer';
import { latLong } from '../../reducers/LatLong-reducer';
import { events } from '../../reducers/eventData-reducer';
import { dayView } from '../../reducers/dayView-reducer';

describe('searchLocation reducer', () => {

  it('should return the initial state', () => {
    expect( searchLocation(undefined, {}) ).toEqual('')
  })

  it('should return the new state when the action type matches', function () {
    const actionObject = {
      type: 'LOCATION_CHANGE',
      location: 'Wantagh, NY'
    }
    expect( searchLocation('', actionObject) ).toEqual('Wantagh, NY')
  });

  it('should return the existing state if the action type does not match', function () {
    const actionObject = {
      type: 'LAT_LONG',
      latLongObj: { lat: 39.7392358, lng: -104.990251 }
    }
    expect( searchLocation('Wantagh, NY', actionObject) ).toEqual('Wantagh, NY')
  });

})


describe('latLong reducer', () => {

  it('should return the initial state', () => {
    expect( latLong(undefined, {}) ).toEqual({})
  })

  it('should return the new state when the action type matches', function () {
    const actionObject = {
      type: 'LAT_LONG',
      latLongObj: { lat: 39.7392358, lng: -104.990251 }
    }
    expect( latLong('', actionObject) ).toEqual({ lat: 39.7392358, lng: -104.990251 })
  });

  it('should return the existing state if the action type does not match', function () {
    const actionObject = {
      type: 'LOCATION_CHANGE',
      location: 'Wantagh, NY'
    }
    expect( latLong({ lat: 39.7392358, lng: -104.990251 }, actionObject) ).toEqual({ lat: 39.7392358, lng: -104.990251 })
  });

})


describe('events reducer', () => {

  it('should return the initial state', () => {
    expect( events(undefined, {}) ).toEqual([])
  })

  it('should return the new state when the action type matches', function () {
    const actionObject = {
      type: 'EVENT_DATA',
      events: [
        {performer: 'Guns N Roses'},
        {perfomer: 'Metallica'}
      ]
    }

    expect( events([], actionObject) ).toEqual([ {performer: 'Guns N Roses'}, {perfomer: 'Metallica'} ])
  });

  it('should return the existing state if the action type does not match', function () {
    const actionObject = {
      type: 'SELECT_DAY_VIEW',
      dayView: 2
    }
    expect( events([ {performer: 'Guns N Roses'}, {perfomer: 'Metallica'} ], actionObject) )
      .toEqual([ {performer: 'Guns N Roses'}, {perfomer: 'Metallica'} ])
  });

})


describe('dayView reducer', () => {

  it('should return the initial state', () => {
    expect( dayView(undefined, {}) ).toEqual(2)
  })

  it('should return the new state when the action type matches', function () {
    const actionObject = {
      type: 'SELECT_DAY_VIEW',
      dayView: 7
    }

    expect( dayView(2, actionObject) ).toEqual(7)
  });

  it('should return the existing state if the action type does not match', function () {
    const actionObject = {
      type: 'EVENT_DATA',
      events: [
        {performer: 'Guns N Roses'},
        {perfomer: 'Metallica'}
      ]
    }
    expect( dayView(2, actionObject) ).toEqual(2)
  });

})
