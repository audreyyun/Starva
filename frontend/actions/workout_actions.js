import * as WorkoutAPIUtil from "../util/workout_api_util";

export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";

export const receiveAllWorkouts = (workouts) => ({
    type: RECEIVE_ALL_WORKOUTS,
    workouts
});

export const receiveWorkout = (workout) => ({
    type: RECEIVE_WORKOUT,
    workout
});

export const removeWorkout = (workoutId) => ({
    type: REMOVE_WORKOUT,
    workoutId
});



export const fetchWorkouts = (userId) => dispatch => (
    WorkoutAPIUtil.fetchWorkouts(userId)
        .then(workouts => dispatch(receiveAllWorkouts(workouts)))
);

export const fetchWorkout = (id) => dispatch => (
    WorkoutAPIUtil.fetchWorkout(id)
        .then(workout => dispatch(receiveWorkout(workout)))
);

export const createWorkout = (newWorkout) => dispatch => {
    return (WorkoutAPIUtil.createWorkout(newWorkout)
        .then(workout => dispatch(receiveWorkout(workout)))
    )
};

export const updateWorkout = (editWorkout) => dispatch => (
    WorkoutAPIUtil.updateWorkout(editWorkout)
        .then(workout => dispatch(receiveWorkout(workout)))
);

export const deleteWorkout = (id) => dispatch => (
    WorkoutAPIUtil.deleteWorkout(id)
        .then(() => dispatch(removeWorkout(id)))
);