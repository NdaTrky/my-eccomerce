import { combineReducers } from "redux";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
  example: testReducer,
});

export default rootReducer;