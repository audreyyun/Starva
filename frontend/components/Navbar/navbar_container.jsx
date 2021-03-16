import React from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import { login, logout } from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.entities.users ? state.entities.users[state.session.id] : null
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(Navbar)