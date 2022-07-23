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
        <ProfileButton user={sessionUser} />
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
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='navigation-bar-div'>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </div>
    </>
  );
}

export default Navigation;
