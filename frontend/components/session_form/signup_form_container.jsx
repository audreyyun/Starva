import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        formHeader: "Join Strava today, it's Free",
        navLink: <Link to="/login">Log In</Link>,
        pageTitle: "Create an account at Strava to start logging, analyzing, comparing and competing"
    };
};

const mdp = dispatch => {
    return {
        processForm: (formUser) => (dispatch(signup(formUser))),
        logIn: (formUser) => (dispatch(login(formUser))),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(msp, mdp)(SessionForm);
 