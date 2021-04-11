import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

class DashboardIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }

    componentDidMount() { 
        this.props.fetchWorkouts(this.props.sessionId);
    }

    formatDay(d) {
        let month = new Date(d).getMonth() + 1;
        let date = new Date(d).getDate();
        let year = new Date(d).getFullYear();
        let day = new Date(d).getDay();
        let dayWord

        if (day === 0) { dayWord = "Sun"; }
        else if (day === 1) { dayWord = "Mon"; }
        else if (day === 2) { dayWord = "Tues"; }
        else if (day === 3) { dayWord = "Wed"; }
        else if (day === 4) { dayWord = "Thurs"; }
        else if (day === 5) { dayWord = "Fri"; }
        else if (day === 6) { dayWord = "Sat"; }


        let strDay = `${dayWord}, ${month}/${date}/${year}`
        return strDay;
    }

    formatDuration(receivedWorkout) {
        let min, sec, hrs;
        if (receivedWorkout.minutes < 10) {
            min = `${receivedWorkout.minutes}`
        } else {
            min = receivedWorkout.minutes
        }
        if (receivedWorkout.seconds < 10) {
            sec = `${receivedWorkout.seconds}`
        } else {
            sec = receivedWorkout.seconds
        }

        if (receivedWorkout.hours < 10) {
            hrs = `${receivedWorkout.hours}`
        } else {
            hrs = receivedWorkout.hours
        }

        if (receivedWorkout.hours === 0) {
            return `${min}m`
        }

        return `${hrs}h ${min}m`
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
            athleteName = this.props.athlete.first_name + " " + this.props.athlete.last_name
        }

        const workoutItems = Object.values(this.props.workouts).reverse().map((workout) => (
            <div className="activity-feed-card" key={workout.id}>
                <header className="activity-feed-card-header">
                    <div>{athleteName}</div>
                    <time className="activity-feed-card-date">{this.formatDay(workout.date)}</time>
                </header>
                <div className="activity-feed-card-body">
                    <Link className="activity-feed-card-title" to={`/activities/${workout.id}`}>
                        <h3 className="feed-title">
                            {workout.workout_title}
                        </h3>
                    </Link>
                </div>

                <ul className="list-stats">
                    <li>
                        <div className="stat">
                            <div className="stat-subtext">Distance</div>
                            <b className="stat-text">
                                {workout.distance} mi
                            </b>
                        </div>
                    </li>
                    <li>
                        <div className="stat">
                            <div className="stat-subtext">Elev Gain</div>
                            <b className="stat-text">
                                {workout.elevation} ft
                            </b>
                        </div>
                    </li>
                    <li>
                        <div className="stat">
                            <div className="stat-subtext">Time</div>
                            <b className="stat-text">
                                {this.formatDuration(workout)}
                            </b>
                        </div>
                    </li>
                </ul>


                {/* <Link className="workout-edit-btn" to={`/activity/${workout.id}/edit`}>Edit</Link> */}

                

            </div>
        ));

        return (
            <div className="dashboard-page-container">
                <div className="dashboard-border">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="dashboard-page-content">
                        {this.renderProfile()}
                        <div className="feed">
                            <div>{workoutItems}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )

    }

    renderProfile() { 
        let athleteName;
        if (!this.props.athlete.first_name) {
            athleteName = this.props.athlete.email
        } else {
            athleteName = this.props.athlete.first_name + " " + this.props.athlete.last_name
        }

        // let activities = Object.values(this.props.workouts).reverse().map((workout) => (
        //     <div>
        //         {workout.title}
        //     </div>
        // ));
  
        let numActivities = (Object.values(this.props.workouts)).length;

        let activities = Object.values(this.props.workouts).map(workout => (
                <Link className="last-activity text-small" to={`/activities/${workout.id}`}>
                    <strong>
                        {workout.workout_title}
                    </strong>
                </Link>            
        ));
        let lastActivity = activities[0];

        debugger

        return ( 
            < div className = "feed-sidebar-container" >
                <div className="feed-sidebar-content">
                    <div className="athlete-profile">
                        <div className="profile-body">
                            <h2 className="athlete-name">
                                {athleteName}
                            </h2>

                            <ul className="profile-stats">
                                <li>
                                    <Link to="/training" className="stat">
                                        <div className="stat-subtext">Activities</div>
                                        <b className="stat-text">
                                            {numActivities}
                                        </b>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <div className="card-section">
                                <div className="text-small">
                                    Latest Activity 
                                </div>
                                <div className="last-activity">
                                    {lastActivity}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default DashboardIndex