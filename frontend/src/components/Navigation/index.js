// frontend/src/components/Navigation/index.js
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import "./Navigation.css"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

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
            <NavLink to="/signup" className="nav-link" activeStyle={{ color: "black" }}>Sign Up</NavLink>
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <nav className="main-nav">
          <div className="navigation-outer">
            <div className="nav-side"></div>
            <div className='navigation-bar'>
              <NavLink exact to="/" className="nav-link home-link">
                <span className="iconify" data-icon="fa-brands:airbnb" data-width="40"></span>
                <span className='airbnb-name'>wherebnb</span>
              </NavLink>
              {isLoaded && sessionLinks}
            </div>
            <div className="nav-side"></div>
          </div>
      </nav>
    </>
  );
}

export default Navigation;
