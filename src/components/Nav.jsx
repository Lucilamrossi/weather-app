import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <NavLink exact to="/" className="titleNav">
          <span className="navbar-brand">
            Weather App
          </span>
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/" activeClassName="activeNav">
          <span className="navbar-brand btnNav">
            Home
          </span>
        </NavLink>
        <NavLink exact to="/about" activeClassName="activeNav">
          <span className="navbar-brand btnNav">About</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
