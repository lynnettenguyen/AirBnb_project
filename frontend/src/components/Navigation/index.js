import React from 'react'
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import "./Navigation.css"
import SearchBar from './SearchBar';


function Navigation({ isLoaded, setFilterRooms, setCategory }) {

  return (
    <>
      <nav className="main-nav">
        <div className="navigation-outer">
          <div className='navigation-bar'>
            <NavLink exact to="/" className="nav-link home-link">
              <span className="iconify" data-icon="fa-brands:airbnb" data-width="40"></span>
              <span className='airbnb-name' onClick={() => { setFilterRooms([]); setCategory(null) }}>wherebnb</span>
            </NavLink>
            <SearchBar />
            {isLoaded && <ProfileButton />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
