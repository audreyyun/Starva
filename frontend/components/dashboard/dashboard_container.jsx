import React from 'react';
import DashboardIndex from './dashboard_index';
import { connect } from 'react-redux';

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(msp, mdp)(DashboardIndex);