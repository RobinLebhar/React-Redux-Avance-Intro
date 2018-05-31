import {
    SET_AUTHENTIFICATION
} from './action-types';

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}