import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

class DashboardIndex extends React.Component { 
    constructor(props) { 
        super(props);

        this.formatDay = this.formatDay.bind(this);
        this.formatLongDay = this.formatLongDay.bind(this);
        this.whatDay = this.whatDay.bind(this);

        this.state = { 
            scrolling: false
        }
    }

    componentDidMount() { 
        this.props.fetchWorkouts(this.props.sessionId);
    }


    formatDay(d) {
        let month = new Date(d).getMonth() + 1;
        let date = new Date(d).getDate() + 1;
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

    formatLongDay(d) {
        let month = new Date(d).getMonth() + 1;
        let date = new Date(d).getDate() + 1;
        let year = new Date(d).getFullYear();
        // let day = new Date(d).getDay();
        let monthLetter;

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


        let strDay = `${monthLetter} ${date}, ${year}`
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

    whatDay(receivedWorkout) { 
        let today = new Date();
        let workoutDay = new Date(receivedWorkout).getDate() + 1;
        let workoutMonth = new Date(receivedWorkout).getMonth();
        let workoutYear = new Date(receivedWorkout).getFullYear();
        if (today.getDate() === workoutDay && today.getMonth() === workoutMonth && today.getFullYear() === workoutYear) { 
            return ("Today")
        } else if ((today.getDate()-1) === workoutDay && today.getMonth() === workoutMonth && today.getFullYear() === workoutYear) {
            return("Yesterday")
        } else { 
            return (this.formatLongDay(receivedWorkout));
        }
    }

    selectSportImg(sport) { 
        if (sport === "Ride") { 
            return `${window.bike}`
        } else if (sport === "Run") { 
            return `${window.shoe}`
        } else if (sport === "Swim") { 
            return `${window.water}`
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
        let athleteName;
        if (!this.props.athlete.first_name) {
            athleteName = this.props.athlete.email
        } else {
            athleteName = this.props.athlete.first_name + " " + this.props.athlete.last_name
        }

        let totalWorkouts = true;
        for(let i = 0; i < this.props.workouts.length; i++) { 
            let workout = this.props.workouts[i];
            if (workout.athlete_id !== this.props.athlete.id) {
                totalWorkouts = false;
            } else { 
                totalWorkouts = true;
            }
        }

            

        // const workoutItems = Object.values(this.props.workouts).reverse().map((workout) => (
        //     <div className="activity-feed-card" key={workout.id}>
        //         <header className="activity-feed-card-header">
        //             <div>{athleteName}</div>
        //             <time className="activity-feed-card-date">{this.formatDay(workout.date)}</time>
        //         </header>
        //         <div className="activity-feed-card-body">
        //             {/* <div className="sport-type-img"> */}
        //                 <img className="sport-type-img"src={this.selectSportImg(workout.sport)} alt=""/>
        //             {/* </div> */}
        //             <div className="feed-card-content">

        //                 <Link className="activity-feed-card-title" to={`/activities/${workout.id}`}>
        //                     <h3 className="feed-title">
        //                         {workout.workout_title}
        //                     </h3>
        //                 </Link>

        //                 <ul className="list-stats">
        //                     <li>
        //                         <div className="stat">
        //                             <div className="stat-subtext">Distance</div>
        //                             <b className="stat-text">
        //                                 {workout.distance} mi
        //                             </b>
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <div className="stat">
        //                             <div className="stat-subtext">Elev Gain</div>
        //                             <b className="stat-text">
        //                                 {workout.elevation} ft
        //                             </b>
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <div className="stat">
        //                             <div className="stat-subtext">Time</div>
        //                             <b className="stat-text">
        //                                 {this.formatDuration(workout)}
        //                             </b>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>



        //         {/* <Link className="workout-edit-btn" to={`/activity/${workout.id}/edit`}>Edit</Link> */}

                

        //     </div>
        // ));

        if (totalWorkouts === false) { 
            return (
            <div className="dashboard-page-container">
                <div className="dashboard-border">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="dashboard-page-content">
                        <div id="dashboard-page" className="dashboard-page">
                            {this.renderProfile()}
                            <div id="feed" className="feed">
                                <div className="feed-header">
                                    <div className="feed-header-content">
                                        <h5 className="feed-header-text">
                                            Your Activities
                                        </h5>
                                    </div>
                                    <div className="arrow-wrapper">
                                        <img className="down-arrow" src={window.downArrow} alt="" />
                                    </div>
                                </div>

                                <div className="workoutItems">Your activities will appear here.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            )
        } 
        if (totalWorkouts === true) {
            const workoutItems = Object.values(this.props.workouts).reverse().map((workout) => (
                <div className="activity-feed-card" key={workout.id}>
                    <header className="activity-feed-card-header">
                        <div>{athleteName}</div>
                        <time className="activity-feed-card-date">{this.formatDay(workout.date)}</time>
                    </header>
                    <div className="activity-feed-card-body">
                        {/* <div className="sport-type-img"> */}
                        <img className="sport-type-img" src={this.selectSportImg(workout.sport)} alt="" />
                        {/* </div> */}
                        <div className="feed-card-content">

                            <Link className="activity-feed-card-title" to={`/activities/${workout.id}`}>
                                <h3 className="feed-title">
                                    {workout.workout_title}
                                </h3>
                            </Link>

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
                        </div>
                    </div>

                    {/* <Link className="workout-edit-btn" to={`/activity/${workout.id}/edit`}>Edit</Link> */}

                </div>
            ));

            return (
                <div className="dashboard-page-container">
                    <div className="dashboard-border">
                        <Navbar logout={this.props.logout} {...navbarProps} />
                        <div className="splash-border"></div>
                        <div className="dashboard-page-content">
                            <div id="dashboard-page" className="dashboard-page">
                                {this.renderProfile()}
                                <div id="feed" className="feed">
                                    <div className="feed-header"> 
                                    <div className="feed-header-content">
                                            <h5 className="feed-header-text">
                                                Your Activities
                                            </h5>
                                        </div>
                                        <div className="arrow-wrapper">
                                            <img className="down-arrow" src={window.downArrow} alt=""/>
                                        </div>
                                    </div>

                                    <div className="workoutItems">{workoutItems}</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        }

    }

    renderProfile() { 
        let athleteName;
        if (!this.props.athlete.first_name) {
            athleteName = this.props.athlete.email
        } else {
            athleteName = this.props.athlete.first_name + " " + this.props.athlete.last_name
        }
  
        let numActivities = (Object.values(this.props.workouts)).length;

        let activities = Object.values(this.props.workouts).reverse().map(workout => (
                <Link className="last-activity text-small" to={`/activities/${workout.id}`}>
                    <strong>
                        
                    {workout.workout_title} • {this.whatDay(workout.date)}
                    </strong>
                </Link>            
        ));
        let lastActivity = activities[0];


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
                            <div className="card-section-2">
                                <Link to="/training" className="stat">
                                    <div className="training-log">Your Training Log</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default DashboardIndex