import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign Up</Link>,
        pageTitle: "Log In  | Starva"
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(msp, mdp)(SessionForm);
