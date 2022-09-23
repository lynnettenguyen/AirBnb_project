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
import SearchResults from "./components/HomePage/SearchResults";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage isLoaded={isLoaded} />
          </Route>
          <Route path="/reservations">
            <UserReservations isLoaded={isLoaded} />
          </Route>
          <Route path="/host-your-home">
            <CreateListingForm isLoaded={isLoaded} />
          </Route>
          <Route path="/manage-listings">
            <ManageListings isLoaded={isLoaded} />
          </Route>
          <Route path="/rooms/:roomId">
            <RoomDetails isLoaded={isLoaded} />
          </Route>
          <Route path="/search/:destination">
            <SearchResults isLoaded={isLoaded} />
          </Route>
          <Route exact path="/">
            <HomePage isLoaded={isLoaded} />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
