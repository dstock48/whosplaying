import { connect } from 'react-redux';
import { fetchLocalEventData } from '../actions';
import Main from '../components/Main/Main';


const mapStateToProps = (state) => {
  return {
    events: state.events,
    location: state.searchLocation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventData: (url) => {
      dispatch(fetchLocalEventData(url))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
