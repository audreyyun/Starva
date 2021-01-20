import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (state = {}, action) => { 
    Object.freeze(state);
    switch (actions.type) {
        case RECEIVE_CURRENT_USER:
            return action.errors
        case RECEIVE_SESSION_ERRORS:
            return []; //bc errors is an array of them
        default:
            return state;
    }
}

export default sessionErrorsReducer;