import {
  SET_AUTHENTIFICATION,
  INCREMENT_ACTIONS_COUNT,
  FETCH_PEOPLE_IN_SPACE_REQUEST_START
} from "./action-types";
import axios from "axios";
export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn
  };
}

export function incrementActionCount() {
  return {
    type: INCREMENT_ACTIONS_COUNT
  };
}

export function fetchPeopleInSpace() {
  return function(dispatch) {
    dispatch({
      type: FETCH_PEOPLE_IN_SPACE_REQUEST_START,
      payload: axios.get("http://api.open-notify.org/astros.json")
    });
  };
}
