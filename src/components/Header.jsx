import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Header.css';

function Header ({onSearch}) {
  return (
    <>
      <div className="header">
        <p>Weather Search</p>
      </div>
      <div className="search">
        <SearchBar
          onSearch={onSearch} 
        />
      </div>
      <hr/>
    </>
    
  );
};

export default Header;