import { connect } from 'react-redux';
import GMap from '../components/GMap/GMap';


const mapStateToProps = (state) => {
  return {
    latLong: state.latLong
  };
};

export default connect(mapStateToProps, null)(GMap);
