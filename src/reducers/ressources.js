
import {
    ADD_RESSOURCE
} from '../actions/action-types';

const initialState = {
    ressourceList: [0]
}
export default function RessourcesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESSOURCE:
            state.ressourceList[0] = state.ressourceList[0] + 1

            return {
                ressourceList: [...state.ressourceList, state.ressourceList[state.ressourceList.length - 1] + 1]
            }

    }
    return state;
}