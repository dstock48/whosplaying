import React from 'react';
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
  return(
    <header className="header-component">
      <h1 className="logo">WHOSPLYNG</h1>
      <SearchInput />
    </header>
  )
}

export default Header;
