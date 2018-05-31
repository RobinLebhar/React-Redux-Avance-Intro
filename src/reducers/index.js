import { combineReducers } from "redux";
import authentificationReducer from "./authentification"
const rootReducer = combineReducers({
    authentification: authentificationReducer
});

export default rootReducer;