// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import RoomDetails from "./components/RoomDetails";
import ManageListings from "./components/ManageListings";
import CreateListingForm from "./components/CreateListingForm";
import UserReservations from "./components/UserReservations";
import Footer from "./components/Navigation/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/reservations">
            <UserReservations />
          </Route>
          <Route path="/host-your-home">
            <CreateListingForm />
          </Route>
          <Route path="/manage-listings">
            <ManageListings />
          </Route>
          <Route path="/rooms/:roomId">
            <RoomDetails />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
