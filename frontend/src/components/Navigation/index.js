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
          {/* <ProfileButton user={sessionUser} /> */}
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
      <nav>
        <div className='navigation-bar-div'>
          <NavLink exact to="/" className="nav-link home-link">
            <span className="iconify" data-icon="fa-brands:airbnb" data-width="36"></span>
            <span className='airbnb-name'>wherebnb</span>
          </NavLink>
          {isLoaded && sessionLinks}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
