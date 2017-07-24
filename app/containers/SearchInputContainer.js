import { connect } from 'react-redux';
import { fetchEventData, setCurrentLocation, LatLong } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';

const mapDispatchToProps = (dispatch) => {
  return {
    getEventData: (url) => {
      dispatch(fetchEventData(url))
    },
    setLocation: (locationName) => {
      dispatch(setCurrentLocation(locationName))
    },
    setLatLong: (latLong) => {
      dispatch(LatLong(latLong))
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
