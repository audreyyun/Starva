import React from 'react'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Button from '../Button';

class ManualActivity extends React.Component { 
    constructor(props) {
        super(props)

        this.state = { 
            distance: 0,
            hours: 1,
            minutes: 0,
            seconds: 0,
            elevation: 0,
            sport: "Ride",
            date: "",
            start_time: "",
            title: "",
            description: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type) { 
        return(e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) { 
        e.preventDefault();

        // const title= prompt("Workout title(required)", this.state.workout.workout_title)
        // const dur = `${`${this.state.hours} : ${this.state.minutes} : ${this.state.seconds}`}`;
        // const dur = this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds;

        if (this.state.title) { 
            const workout = { 
                athlete_id: this.props.athleteId,
                workout_title: this.state.title,
                distance: this.state.distance,
                hours: this.state.hours,
                minutes: this.state.minutes,
                seconds: this.state.seconds,
                elevation: this.state.elevation, 
                sport: this.state.sport,
                date: this.state.date,
                start_time: this.state.start_time, 
                id: this.props.workoutId,
                description: this.state.description
            }
            
            if (this.props.workoutId) {
                workout.id = this.props.workoutId;
            }
            
            this.props.action(workout).then(workout => { 
                this.props.history.push({ 
                    pathname: `/activities/${workout.workout.id}`
                })
            })
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

        
        return (
            <div>
                <Navbar logout={this.props.logout} {...navbarProps} />
                <div className="splash-border"></div>

                <div className="entry-page-container">
                    <div className="entry-page-body">
                    <h1>Manual Entry</h1>
                        <form onSubmit={this.handleSubmit} className="manual-entry-body">
                        <div className="row">
                            <div className="upload">
                                <fieldset>
                                    <legend>Distance</legend>
                                    <input type="float" min="0" value={this.state.distance} onChange={this.handleChange("distance")}/>
                                </fieldset>
                            </div>
                            {/* <label>Distance
                                <input type="float" min="0" value={this.state.distance} onChange={this.handleChange("distance")}/>
                            </label> */}

                            <div className="upload">
                                <fieldset className="upload-duration">
                                    <legend>Duration</legend>
                                    <div className="duration-input">
                                        <div className="input-field validation-wrapper">
                                            <label htmlFor="hours"><abbr title="hours">hr</abbr></label>
                                                <input type="number" name="hours" min="0" value={this.state.hours} onChange={this.handleChange("hours")}/>
                                        </div>
                                        
                                        <div className="input-field validation-wrapper">
                                            <label htmlFor="minutes"><abbr title="minutes">min</abbr></label>
                                                <input type="number" name="minutes" min="0" value={this.state.minutes} onChange={this.handleChange("minutes")}/>
                                        </div>

                                        <div className="input-field validation-wrapper">
                                            <label htmlFor="seconds"><abbr title="seconds">s</abbr></label>
                                                <input type="number" name="seconds" min="0" value={this.state.seconds} onChange={this.handleChange("seconds")}/>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                           
                            <div className="upload">
                                <fieldset>
                                    <legend>Elevation</legend>
                                    <input type="number" min="0" value={this.state.elevation} onChange={this.handleChange("elevation")}/>
                                </fieldset>
                            </div>
                        </div>

                        <hr className="line"/>

                        <div className="row row2">
                            <div className="upload block">
                                <label>Sport
                                    <select className="selection" id="sports" value={this.state.sport} onChange={this.handleChange("sport")}>
                                        <option value="Ride">Ride</option>
                                        <option value="Run">Run</option>                            
                                        <option value="Swim">Swim</option>                            
                                    </select>
                                </label>
                            </div>
                            
                            <div className="upload block">
                                <label>Date and Time
                                    <div className="selection">
                                        <div className="time-date-input-wrapper">
                                            <input type="date" value={this.state.date} onChange={this.handleChange("date")}/>
                                            <input type="time" value={this.state.start_time} onChange={this.handleChange("start_time")}/>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="row row2">
                            <label>Title
                                <div className="title">
                                    <input type="text" value={this.state.title} onChange={this.handleChange("title")}/>
                                </div>
                            </label>
                        </div>
                        
                        <hr className="line" />

                        <div className="row">
                            <label>Description
                                <textarea name="" id="" cols="30" rows="10" value={this.state.description} onChange={this.handleChange("description")}></textarea>
                            </label>
                        </div>

                        <input type="submit" className="btn-secondary" value="Create"/>
                    </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default ManualActivity