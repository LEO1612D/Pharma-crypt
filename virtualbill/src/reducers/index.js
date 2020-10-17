import loggedReducer from "./islogged";
import tokenReducer from "./havetoken";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  login: loggedReducer,
  token: tokenReducer
});

export default allReducers;
