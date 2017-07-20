import { combineReducers } from 'redux';
import { events } from './eventData-reducer'
import { searchLocation } from './locationChange-reducer'

export default combineReducers({
  events,
  searchLocation
});
