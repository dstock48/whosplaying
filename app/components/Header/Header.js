import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component/Container Imports
import SearchInputContainer from "../../containers/SearchInputContainer";

const Header = (props) => {

  return(
    <header className="header-component">
      <Link to="/"><h1 className="logo">WHOSPLAYING?</h1></Link>
      <SearchInputContainer history={props.history} />
    </header>
  )
}

export default Header;

Header.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}
