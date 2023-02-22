import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import lightReducer from "./lightReducer";
import userSlice from "./userSlice";
import doorSlice from "./doorSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  light: lightReducer,
  user: userSlice,
  door: doorSlice,
});

export default rootReducer;
