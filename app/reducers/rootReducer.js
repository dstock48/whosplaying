import { combineReducers } from 'redux';
import { events } from './eventData-reducer'
import { latLong } from './LatLong-reducer'
import { searchLocation } from './locationChange-reducer'
import { dayView } from './dayView-reducer'

export default combineReducers({
  events,
  searchLocation,
  latLong,
  dayView
});
