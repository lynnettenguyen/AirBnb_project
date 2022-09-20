import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./images";
import reservationReducer from "./reservations";
import roomReducer from "./rooms";
import sessionReducer from "./session";
import mapReducer from "./maps";
import userReducer from "./users"

const rootReducer = combineReducers({
  session: sessionReducer,
  rooms: roomReducer,
  images: imageReducer,
  reservations: reservationReducer,
  map: mapReducer,
  users: userReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
