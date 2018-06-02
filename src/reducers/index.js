import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
import ActionInfoReducer from "./action-info"
import RessourcesReducer from "./ressources"
const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressources: RessourcesReducer
});

export default rootReducer;
