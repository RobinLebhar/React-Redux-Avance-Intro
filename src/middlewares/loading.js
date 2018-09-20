import { fetchPeopleInSpace } from "../actions";
import { AxiosInstance } from "axios";
export const loading = store => next => action => {
  console.log(action.payload, action.type);
  if (action.type.includes("_REQUEST_START")) {
    action.payload.then(response => {
      const newType = action.type.replace("_REQUEST_START", "");
      store.dispatch({
        type: newType + "_REQUEST_SUCCESS",
        payload: response.data
      });
    });
  }
  next(action);
};
