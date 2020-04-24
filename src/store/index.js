import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import logger from "./middlewares/logger";
import multi from "./middlewares/multi";
import api from "./middlewares/api";

import rootRedcuer from "./reducers";

const store = createStore(
  combineReducers(rootRedcuer),
  compose(applyMiddleware(thunk, multi, api))
);

window.store = store;
export default store;
