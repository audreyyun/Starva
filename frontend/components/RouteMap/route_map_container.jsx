import React from 'react';
import RouteMap from './route_map';
import { connect } from 'react-redux';
import { createRoute } from "../../actions/route_actions"
import { logout } from "../../actions/session_actions"

const msp = (state, ownProps) => {
    return {athleteId: state.session.id};
};

const mdp = dispatch => {
    return {
        action: newRoute => dispatch(createRoute(newRoute)),
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(RouteMap);