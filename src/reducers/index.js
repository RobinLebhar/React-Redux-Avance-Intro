import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
const rootReducer = combineReducers({
  authentification: AuthentificationReducer
});

export default rootReducer;
