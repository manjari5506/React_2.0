// NOTE: use this store variable to create a store.
import {legacy_createStore,applyMiddleware, compose} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export {store};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
