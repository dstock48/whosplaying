import { combineReducers } from 'redux';
import { events } from './eventData-reducer'
import { latLong } from './LatLong-reducer'
import { searchLocation } from './locationChange-reducer'

export default combineReducers({
  events,
  searchLocation,
  latLong
});
