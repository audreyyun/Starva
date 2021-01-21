import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (state = [], action) => { 
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors; //bc errors is an array of them
        default:
            return state;
    }
}

export default sessionErrorsReducer;