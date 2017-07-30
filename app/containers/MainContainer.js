import { connect } from 'react-redux';
import { fetchEventData, setDayView } from '../actions';
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
