import { combineReducers } from "redux";
import SettingsReducer from "./SettingsReducer";
import CircleViewReducer from "./CircleViewReducer";

export default combineReducers({
  settings: SettingsReducer,
  circleData: CircleViewReducer
});
