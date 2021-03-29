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
        this.formatTime = this.formatTime.bind(this);
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

    formatTime(date) { 
        let hours = new Date(date).getHours();
        let minutes = new Date(date).getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    render() {
        
        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }
        
        let athleteName;
        if (!this.props.athlete.first_name) {
            athleteName = this.props.athlete.email
        } else {
            athleteName = this.props.athlete.first_name + this.props.athlete.last_name
        }


        if (!this.props.workout) { 
            return (
                <div></div>
            )
        } else { 
            const speed = (this.props.workout.distance / (this.props.workout.hours + (this.props.workout.minutes/60))).toFixed(2);
            let athleteName;

            if (!this.props.athlete.first_name) {
                athleteName = this.props.athlete.email
            } else {
                athleteName = this.props.athlete.first_name + " " + this.props.athlete.last_name
            }
            let month = new Date(this.props.workout.created_at).getMonth() + 1;
            let date = new Date(this.props.workout.created_at).getDate();
            let year = new Date(this.props.workout.created_at).getFullYear();
            let day = new Date(this.props.workout.created_at).getDay();
            let formattedTime = this.formatTime(this.props.workout.start_time);
            let monthLetter, dayWord;

            if (day === 0) { dayWord = "Sunday"; }
            else if (day === 1) { dayWord = "Monday"; } 
            else if (day === 2) { dayWord = "Tuesday"; } 
            else if (day === 3) { dayWord = "Wednesday"; } 
            else if (day === 4) { dayWord = "Thursday"; } 
            else if (day === 5) { dayWord = "Friday"; } 
            else if (day === 6) { dayWord = "Saturday"; } 


            if (month === 1) { monthLetter = "January"; }
            else if (month === 2) { monthLetter = "February"; }
            else if (month === 3) { monthLetter = "March"; }
            else if (month === 4) { monthLetter = "April"; }
            else if (month === 5) { monthLetter = "May"; }
            else if (month === 6) { monthLetter = "June"; }
            else if (month === 7) { monthLetter = "July"; }
            else if (month === 8) { monthLetter = "August"; }
            else if (month === 9) { monthLetter = "September"; }
            else if (month === 10) { monthLetter = "October"; }
            else if (month === 11) { monthLetter = "November"; }
            else if (month === 12) { monthLetter = "December"; }

            debugger
            return (

                <div>
                    
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="page container">

                        <div className="activity media">
                            <section className="media-body" id="heading">
                                <header>
                                    <h2>
                                        <span className="title">
                                            
                                            {athleteName} – {this.props.workout.sport}
                                        </span>
                                    </h2>
                                </header>
                                <div className="activity-summary-container">
                                    <div className="activity-summary activity-card">
                                        <time>{formattedTime} on {dayWord}, {monthLetter} {date}, {year} </time>
                                        <h1>{this.props.workout.workout_title}</h1>
                                    </div>
                                    <div className="activity-stats activity-card">
                                        <ul className="activity-stats-list inline-stats section">
                                            <li>
                                                <strong>
                                                    {this.props.workout.distance}
                                                    <abbr className="unit" title="miles"> mi</abbr>
                                                </strong>
                                                <div className="label">Distance</div>
                                            </li>
                                            <li>
                                                <strong>
                                                    {`${this.props.workout.hours}:${this.props.workout.minutes}:${this.props.workout.seconds}`}
                                                </strong>
                                                <div className="label">Duration</div>
                                            </li>
                                            <li>
                                                <strong>
                                                    {speed}
                                                    <abbr className="unit" title="speed"> mi/h</abbr>
                                                </strong>
                                                <div className="label">Speed</div>
                                            </li>
                                            <li>
                                                <strong>
                                                    {this.props.workout.elevation}
                                                    <abbr className="unit" title="feet"> ft</abbr>
                                                </strong>
                                                <div className="label">Elevation</div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default WorkoutShow;