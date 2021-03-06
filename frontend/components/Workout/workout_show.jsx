import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Button from '../Button';


class WorkoutShow extends React.Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.formatDuration = this.formatDuration.bind(this);
    }

    componentDidMount() { 
        this.props.fetchWorkout(this.props.workoutId)
    }


    handleDelete(workoutId) {
        if (window.confirm("Are you sure you want to delete this workout? You can not undo this action.")) {
            this.props.deleteWorkout(this.props.workoutId).then(
                this.props.history.replace({
                    pathname: `/training/`
                })
            )
        }
    }

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

    formatDuration(receivedWorkout) {
        let min, sec, hrs;
        if (receivedWorkout.minutes < 10) {
            min = `0${receivedWorkout.minutes}`
        } else {
            min = receivedWorkout.minutes
        }
        if (receivedWorkout.seconds < 10) {
            sec = `0${receivedWorkout.seconds}`
        } else {
            sec = receivedWorkout.seconds
        }

        if (receivedWorkout.hours < 10) {
            hrs = `0${receivedWorkout.hours}`
        } else {
            hrs = receivedWorkout.hours
        }

        if (receivedWorkout.hours === 0) {
            return `${min}:${sec}`
        }

        return `${hrs}:${min}:${sec}`
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


        if (!this.props.workout || this.props.sessionId !== this.props.workout.athlete_id) {
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
            let month = new Date(this.props.workout.date).getMonth() + 1;
            let date = new Date(this.props.workout.date).getDate() + 1;
            let year = new Date(this.props.workout.date).getFullYear();
            let day = new Date(this.props.workout.date).getDay();
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

            return (

                <div className="workout-show-pg-container">
                    
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="workout-show-container">
                        <div className="workout-show-content">
                                <div className="side-nav">
                                    <div className="actions" onClick={() => this.handleDelete(this.props.workout.id)}>
                                        <img className="actions-logo" src={window.actions} alt="" />
                                    </div>
                                </div>
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
                                            <p>{this.props.workout.description}</p>
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
                                                        {this.formatDuration(this.props.workout)}
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
                </div>
            )
        }
    }
}

export default WorkoutShow;