// frontend/src/components/Navigation/index.js
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import "./Navigation.css"
import SearchBar from './SearchBar';
import { Modal } from '../../context/Modal';
import SignUpFormPage from '../SignupFormPage'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showSignUp, setShowSignUp] = useState(false)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  }
  else {
    sessionLinks = (
      <>
        <div>
          <span className="login">
            <LoginFormModal />
          </span>
          <span className="signup">
            <span onClick={() => setShowSignUp(true)} className="sign-up-link" activeStyle={{ color: "black" }}>Sign Up</span>
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <nav className="main-nav">
        <div className="navigation-outer">
          <div className='navigation-bar'>
            <NavLink exact to="/" className="nav-link home-link">
              <span className="iconify" data-icon="fa-brands:airbnb" data-width="40"></span>
              <span className='airbnb-name'>wherebnb</span>
            </NavLink>
            <SearchBar />
            {isLoaded && sessionLinks}
          </div>
        </div>
      </nav>
      {showSignUp && (
        <Modal onClose={() => setShowSignUp(false)}>
          <SignUpFormPage setShowSignUp={setShowSignUp} />
        </Modal>
      )}
    </>
  );
}

export default Navigation;
