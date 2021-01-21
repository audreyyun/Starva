import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//reg action creators that return a POJO
export const receiveCurrentUser = (user) => { 
    return { 
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () => { 
    return { 
        type: LOGOUT_CURRENT_USER
    }
}


export const receiveErrors = (errors) => { //errors is an array
    return { 
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


//thunks
export const login = (user) => dispatch => { 
    return SessionAPIUtil.login(user).then(currentUser => (dispatch(receiveCurrentUser(currentUser))), error => (dispatch(receiveErrors(error.responseJSON))))
}
export const signup = (user) => dispatch => { 
    return SessionAPIUtil.signup(user).then(currentUser => (dispatch(receiveCurrentUser(currentUser))), error => (dispatch(receiveErrors(error.responseJSON))))
}
export const logout = () => dispatch => { 
    return SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}


