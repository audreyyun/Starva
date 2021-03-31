import Profile from './profile'


const msp = (state, ownProps) => { 
    return { 
        sessionId: state.session.id || null,
        workouts: Object.values(state.entities.workouts),
    }
};

const mdp = dispatch => { 
    return { 
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        logout: () => dispatch(logout())
    }
}