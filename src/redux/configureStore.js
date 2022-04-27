import { applyMiddleware, compose, createStore } from "redux";

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose; //add support for redux devtools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
