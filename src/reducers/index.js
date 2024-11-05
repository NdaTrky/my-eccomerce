import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCardReducer from "./shoppingCardReducer";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCardReducer,
  test: testReducer,  // Eğer kullanıyorsanız root reducer’a eklemelisiniz.
});
export default rootReducer;