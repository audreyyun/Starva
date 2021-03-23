
import { connect } from "react-redux";
import { deleteWorkout, fetchWorkout } from "../../actions/workout_actions"
import { logout } from "../../actions/session_actions"
import WorkoutShow from "./workout_show";

const msp = (state, ownProps) => {
    debugger
    return {
        workoutId: ownProps.match.params.workoutId,
        workout: state.entities.workouts[ownProps.match.params.workoutId],
        sessionId: state.session.id,
        athlete: state.entities.users ? state.entities.users[state.session.id] : null
    }
}

const mdp = dispatch => {
    return {
        fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
        deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId)),
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(WorkoutShow)