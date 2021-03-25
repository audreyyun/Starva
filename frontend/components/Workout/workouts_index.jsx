import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Button from '../Button';
// import WorkoutShow from './workout_show'


class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchWorkouts(this.props.sessionId);

    }


    handleDelete(workoutId) {
        return e => {
            // if (window.confirm(`Are you sure you want to delete this activity? You can not undo this action.`)) {
            //     this.props.deleteWorkout(workoutId).then(
            //         this.props.history.replace({
            //             pathname: `/training`
            //         })
            //     )
            // }
            if (window.confirm(`Are you sure you want to delete this activity? You can not undo this action.`)) {
                this.props.deleteWorkout(workoutId).then(
                    location.reload()
                )
            }
        }

    }

    render() {

        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }

        debugger

        const workoutItems = Object.values(this.props.workouts).reverse().map((workout) => (
            <tr className="workout-index-item" key={workout.id}>
                {/* <div className="workout-preview"> */}
        
                <td className="view-col col-type col-str">{workout.sport}</td>
                <td className="view-col col-date col-str">{workout.date}</td>
                        <td className="view-col col-title col-str">
                        <Link className="col-str" to={`/activities/${workout.id}`}>
                        {workout.workout_title}
                        </Link>
                        </td>
                <td className="view-col col-time col-num">{`${workout.hours}:${workout.minutes}:${workout.seconds}`}</td>
                <td className="view-col col-distance col-num">{workout.distance}</td>
                <td className="view-col col-elevation col-num">{workout.elevation}</td>


                    {/* <Link className="workout-edit-btn" to={`/activity/${workout.id}/edit`}>Edit</Link> */}

                    <td className="col-edit">
                        <button className="workout-delete-btn btn-link" onClick={this.handleDelete(workout.id)}>Delete</button>
                    </td>

                    {/* <WorkoutShow workout={workout}
                        fetchWorkout={this.props.fetchWorkout}
                    /> */}

                {/* </div> */}
            </tr>
        ));

        if (this.props.workouts.length === 0) {
            return (
                <div id="routes-index-pg-container ">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>

                    <div className="routes-index-body-container page container">
                        <div className="routes-index-body">
                            <div className="routes-index-heading-row">
                                <h1 className="routes-index-title">My Activities</h1>

                                <img className="strava-routes" src={window.routes} alt="" />
                            </div>
                            <div className="index-heading-border"></div>
                            <p>You don't have any activities.</p>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="routes-index-pg-container">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>

                    <div className="routes-index-body-container  page container">
                        <div className="activities-index-body">
                            <div className="routes-index-heading-row">
                                <div className="routes-index-heading-title-container">
                                    <h1 className="routes-index-title">My Activities</h1>

                                </div>
                            </div>
                        
                            <table className="table table-padded" id="search-results">
                                <thead>
                                    <tr>
                                        <th className="col-type col-sort-control">Sport</th>
                                        <th className="col-date col-sort-control">Date</th>
                                        <th className="col-title col-sort-control">Title</th>
                                        <th className="col-time col-sort-control">Time</th>
                                        <th className="col-distance col-sort-control">Distance</th>
                                        <th className="col-elevation col-sort-control">Elevation</th>
                                        <th className="col-edit col-sort-control"></th>
                                    </tr>
                                </thead>

                                <tbody className="activities-list">{workoutItems}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default WorkoutIndex;