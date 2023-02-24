import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import lightReducer from "./lightReducer";
import userSlice from "./userSlice";
// import doorSlice from "./doorSlice";
import termoSlice from "./termoSlice";
import tvSlice from "./tvSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  light: lightReducer,
  user: userSlice,
  termo: termoSlice,
  tv: tvSlice,
  // door: doorSlice,
});

export default rootReducer;
