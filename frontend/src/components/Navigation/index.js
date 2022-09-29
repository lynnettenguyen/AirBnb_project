// frontend/src/components/Navigation/index.js
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import "./Navigation.css"
import SearchBar from './SearchBar';
import { Modal } from '../../context/Modal';
import SignUpFormPage from '../SignupFormPage'

function Navigation({ isLoaded, setFilterRooms, setCategory }) {
  const [showSignUp, setShowSignUp] = useState(false)

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
            {isLoaded && (<div>
              <ProfileButton/>
            </div>)}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
