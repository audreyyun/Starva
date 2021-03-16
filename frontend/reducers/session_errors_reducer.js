import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions'

// const sessionErrorsReducer = (state = [], action) => { 
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             return [];
//         case RECEIVE_SESSION_ERRORS:
//             return action.errors; //bc errors is an array of them
//         default:
//             return state;
//     }
// }


const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case CLEAR_SESSION_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;