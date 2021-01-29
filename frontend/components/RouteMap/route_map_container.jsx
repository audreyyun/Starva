import React from 'react';
import RouteMap from './route_map';
import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions"

const msp = (state, ownProps) => {
    debugger
    return {};
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(RouteMap);