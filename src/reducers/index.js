import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import ActionInfoReducer from "./action-info";
import LoadingReducer from "./loading";
const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  loading: LoadingReducer
});

export default rootReducer;
