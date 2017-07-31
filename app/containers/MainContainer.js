import { connect } from 'react-redux';
import { fetchEventData, setDayView, LatLong } from '../actions';
import Main from '../components/Main/Main';


const mapStateToProps = (state) => {
  return {
    events: state.events,
    location: state.searchLocation,
    latLong: state.latLong,
    dayView: state.dayView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventData: (url) => {
      dispatch(fetchEventData(url))
    },
    setDayView: (view) => {
      dispatch(setDayView(view))
    },
    setLatLong: (latLong) => {
      dispatch(LatLong(latLong))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
