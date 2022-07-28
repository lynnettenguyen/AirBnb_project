// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './ProfileButton.css'
import LoginFormModal from '../LoginFormModal';
import SignupFormPage from "../SignupFormPage";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  // useEffect(() => {
  //   const listener = () => {
  //     setShowMenu(true)
  //     return (
  //       <LoginFormModal />
  //     )
  //   }
  //   if (showMenu) {
  //     const ele = document.getElementById('test')
  //     ele.addEventListener('click', listener)
  //   }
  // }, [showMenu])


  return (
    <>
      <div>
        <div>
          <div className="profile-button-div">
            <button onClick={openMenu} className="profile-button">
              <div className="profile-icons">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                  display: 'block', height: 19, width: 19, fill: 'currentcolor', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible', marginLeft: 2, marginTop: 1 }}><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 45, width: 40, fill: 'currentcolor', marginLeft: 13 }}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
              </div>
            </button>
          </div>
          {showMenu && user && (
            <div className="show-menu-div">
              <div className="profile-dropdown">

                <div className="account-div">
                  {user.email}
                </div>
                <Link to="/trips" className="link trips">Trips</Link>
                <Link to="/manage-listings" className="link manage-listings">Manage Listings</Link>
                <Link to="/host-your-home" className="link host-home">Host your Home</Link>
                <div className="logout-div" onClick={logout}>Log Out</div>

                {/* <div className='profile-dropdown'>
                  {sessionUser ? <div>{user.email}</div> : null}
                  <div >
                    <LoginFormModal onClick={() => setShowMenu(true)} showMenu={showMenu} />
                  </div>
                  <div> */}
                    {/* <SignUpFormModal /> */}
                    {/* <NavLink to="/signup" className="nav-link" activeStyle={{ color: "black" }}>Sign Up</NavLink>
                  </div>
                  <div>
                    {sessionUser ? <button onClick={logout}>Log Out</button> : null}
                  </div>
                </div> */}

              </div>
            </div>
          )}
        </div>
        {/* {showMenu && !user && (
          <div>
            <LoginFormModal />
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        )} */}
      </div>
    </>
  );
}

export default ProfileButton;
