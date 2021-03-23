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
            if (window.confirm(`Are you sure you want to delete this route? You can not undo this action.`)) {
                this.props.deleteRoute(workoutId).then(
                    this.props.history.replace({
                        pathname: `/dashboard`
                    })
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
            <li className="workout-index-item" key={workout.id}>
                <div className="workout-preview">
        
                    <p>{workout.sport}</p>
                    <p>{workout.date}</p>
                    <Link to={`/activities/${workout.id}`}>
                        <p>{workout.workout_title}</p>
                    </Link>
                    <p>{workout.duration}</p>
                    <p>{workout.distance}</p>
                    <p>{workout.elevation}</p>


                    <Link className="workout-edit-btn" to={`/activities/${workout.id}/edit`}>Edit</Link>

                    <Link className="workout-delete-btn" to="/activities/" onClick={this.handleDelete(workout.id)}>Delete</Link>

                    {/* <WorkoutShow workout={workout}
                        fetchWorkout={this.props.fetchWorkout}
                    /> */}

                </div>
            </li>
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
                        <div className="routes-index-body">
                            <div className="routes-index-heading-row">
                                <div className="routes-index-heading-title-container">
                                    <h1 className="routes-index-title">My Routes</h1>

                                </div>
                                <img className="strava-routes" src={window.route} alt="" />
                            </div>

                            <div className="index-heading-border"></div>
                            <ul className="routes-list">{workoutItems}</ul>

                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default WorkoutIndex;