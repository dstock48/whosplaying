import React from 'react';
import { Link } from 'react-router-dom';
import SearchInputContainer from "../../containers/SearchInputContainer";

const Header = () => {
  return(
    <header className="header-component">
      <Link to="/">
        <h1 className="logo">WHOSPLAYING?</h1>
      </Link>
      <SearchInputContainer />
    </header>
  )
}

export default Header;
