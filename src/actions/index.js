import {
    SET_AUTHENTIFICATION, INCREMENT_ACTIONS_COUNT, ADD_RESSOURCE
} from './action-types';

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}

export function incrementActionCount() {
    return {
        type: INCREMENT_ACTIONS_COUNT,
    };
}

export function addRessource() {

    return {
        type: ADD_RESSOURCE,
    };
}