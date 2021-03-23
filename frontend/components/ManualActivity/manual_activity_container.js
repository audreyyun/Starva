import React from 'react';
import ManualActivity from './manual_activity';
import { connect } from 'react-redux';
import { createWorkout } from "../../actions/workout_actions"
import { logout } from "../../actions/session_actions"

const msp = (state, ownProps) => {
    return { athleteId: state.session.id };
};

const mdp = dispatch => {
    return {
        action: newWorkout => dispatch(createWorkout(newWorkout)),
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(ManualActivity);