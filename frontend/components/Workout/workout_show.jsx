import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Button from '../Button';


class WorkoutShow extends React.Component {

    constructor(props) {
        debugger
        super(props);

        // this.state = {
        //     encodedRoute: this.props.route.route,
        //     distance: this.props.route.distance,
        //     updated: false
        // };

        // this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() { 
        this.props.fetchWorkout(this.props.workoutId)
    }


    // handleDelete() {
    //     if (window.confirm("Are you sure you want to delete this route? You can not undo this action.")) {
    //         this.props.deleteRoute(this.props.routeId).then(
    //             this.props.history.replace({
    //                 pathname: `/routes/`
    //             })
    //         )
    //     }
    // }

    render() {
        // let month = new Date(this.props.route.created_at).getMonth() + 1;
        // let day = new Date(this.props.route.created_at).getDay();
        // let year = new Date(this.props.route.created_at).getFullYear();
        // let monthLetter = null;
        let athleteName;

        // if (month === 1) { monthLetter = "January"; }
        // else if (month === 2) { monthLetter = "February"; }
        // else if (month === 3) { monthLetter = "March"; }
        // else if (month === 4) { monthLetter = "April"; }
        // else if (month === 5) { monthLetter = "May"; }
        // else if (month === 6) { monthLetter = "June"; }
        // else if (month === 7) { monthLetter = "July"; }
        // else if (month === 8) { monthLetter = "August"; }
        // else if (month === 9) { monthLetter = "September"; }
        // else if (month === 10) { monthLetter = "October"; }
        // else if (month === 11) { monthLetter = "November"; }
        // else if (month === 12) { monthLetter = "December"; }

        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }

        if (!this.props.athlete.first_name) {
            athleteName = this.props.athlete.email
        } else {
            athleteName = this.props.athlete.first_name + this.props.athlete.last_name
        }


        debugger

        if (!this.props.workout) { 
            return (
                <div></div>
            )
        } else { 
            const speed = (this.props.workout.distance / (this.props.workout.hours + (this.props.workout.minutes/60))).toFixed(2);

            return (
                <div>
                    
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="page container">

                        <div className="activity media">
                            <div className="media-body">
                                <h1>{this.props.workout.workout_title}</h1>
                                <p>{this.props.workout.distance}</p>
                                <p>{`${this.props.workout.hours}:${this.props.workout.minutes}:${this.props.workout.seconds}`}</p>
                                <p>{speed}</p>
                                <p>{this.props.workout.elevation}</p>
                            </div>
                        </div>

                        {/* <section className="borderless actions">
                            <Link to={`/routes/${this.props.route.id}/edit`}>
                                <Button className={`btn-secondary edit-route`} formType={`Edit`}></Button>
                            </Link>
                        </section>
                        <div className="route-view">

                            <div id='route-view-info'>
                                <div className="route-details">
                                    <div className="details media-body">By {athleteName}</div>
                                    <div id="route-view-timestamp">Created on {monthLetter} {day}, {year}</div>
                                </div>
                                <div className="distance">{this.props.route.distance}</div>
                            </div>


                        </div> */}
                    </div>
                </div>
            )
        }
    }
}

export default WorkoutShow;