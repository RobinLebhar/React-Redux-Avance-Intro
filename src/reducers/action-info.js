import {
    INCREMENT_ACTIONS_COUNT
} from '../actions/action-types';

const initialState = {
    actionCount: 0
}
export default function ActionInfoReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_ACTIONS_COUNT:
            return {
                actionCount: state.actionCount + 1
            }
        default:
            return state
    }

}