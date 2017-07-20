import { connect } from 'react-redux';
import { fetchSpecificEventData, setCurrentLocation } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';


// const mapStateToProps = (state) => {
//   return {
//     events: state.events
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchEventData: (url) => {
      dispatch(fetchSpecificEventData(url))
    },
    setLocation: (locationName) => {
      dispatch(setCurrentLocation(locationName))
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
