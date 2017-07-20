import { connect } from 'react-redux';
import { fetchEventData } from '../actions';
import Main from '../components/Main/Main';


const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventData: (url) => {
      dispatch(fetchEventData(url))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
