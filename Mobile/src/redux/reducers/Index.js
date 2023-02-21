import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import lightReducer from "./lightReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  light: lightReducer
});

export default rootReducer;
