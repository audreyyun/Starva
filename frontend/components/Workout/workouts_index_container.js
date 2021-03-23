import { connect } from 'react-redux';
import { fetchWorkouts, fetchWorkout, createWorkout, updateWorkout, deleteWorkout } from '../../actions/workout_actions';
import WorkoutIndex from './workouts_index';
import { logout } from "../../actions/session_actions"

const msp = (state, ownProps) => {
    debugger
    return {
        sessionId: state.session.id || null,
        workoutId: ownProps.match.params.workoutId,
        workouts: Object.values(state.entities.workouts),
        workout: state.entities.workouts ? state.entities.workouts[ownProps.match.params.workoutId] : null,
    }
};

const mdp = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        // fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        createWorkout: workout => dispatch(createWorkout(workout)),
        updateWorkout: workout => dispatch(updateWorkout(workout)),
        deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId)),
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(WorkoutIndex)