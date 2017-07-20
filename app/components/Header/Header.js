import React from 'react';
import SearchInputContainer from "../../containers/SearchInputContainer";

const Header = () => {
  return(
    <header className="header-component">
      <h1 className="logo">WHOSPLYNG</h1>
      <SearchInputContainer />
    </header>
  )
}

export default Header;
