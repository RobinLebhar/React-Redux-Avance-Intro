import {
  FETCH_PEOPLE_IN_SPACE_REQUEST_START,
  FETCH_PEOPLE_IN_SPACE_REQUEST_SUCCESS
} from "../actions/action-types";

const initialState = {
  loading: false
};

export default function LoadingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_IN_SPACE_REQUEST_START:
      return {
        loading: true
      };
    case FETCH_PEOPLE_IN_SPACE_REQUEST_SUCCESS:
      return {
        loading: false
      };
    default:
      return state;
  }
}
