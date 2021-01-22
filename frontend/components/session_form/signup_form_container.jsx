import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">Log In</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: (formUser) => (dispatch(signup(formUser))),
        logIn: (formUser) => (dispatch(login(formUser)))
    };
};

export default connect(msp, mdp)(SessionForm);
 