import React from 'react';
import DashboardIndex from './dashboard_index';
import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions"

const msp = (state, ownProps) => {
    return {};
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(DashboardIndex);