import { connect } from 'react-redux';
import { fetchEventData, setCurrentLocation, LatLong } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';


const mapStateToProps = (state) => {
  return {
    dayView: state.dayView
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
