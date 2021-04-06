import React from 'react';
import DashboardIndex from './dashboard_index';
import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions"
import { fetchWorkouts, } from '../../actions/workout_actions';

const msp = (state, ownProps) => {
    return {
        sessionId: state.session.id || null,
        workouts: Object.values(state.entities.workouts),
        athlete: state.entities.users ? state.entities.users[state.session.id] : null
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchWorkouts: () => dispatch(fetchWorkouts()),
    };
};

export default connect(msp, mdp)(DashboardIndex);