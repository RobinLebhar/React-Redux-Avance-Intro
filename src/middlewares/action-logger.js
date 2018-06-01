import { incrementActionCount } from "../actions"
import { INCREMENT_ACTIONS_COUNT } from "../actions/action-types"
export const actionLogger = store => next => action => {
    if (action.type !== INCREMENT_ACTIONS_COUNT) {
        store.dispatch(incrementActionCount());
    }

    // envoi le resultat dans le reducer
    next(action);
}