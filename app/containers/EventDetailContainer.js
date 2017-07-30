import { connect } from 'react-redux';
import EventDetail from '../components/EventDetail/EventDetail';

const mapStateToProps = (state) => {
  return {
    events: state.events,
    latLong: state.latLong
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
