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
            sport: "bike",
            date: null,
            start_time: null,
            title: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(type) { 
        return(e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) { 
        debugger
        e.preventDefault();

        // const title= prompt("Workout title(required)", this.state.workout.workout_title)

        if (this.state.title) { 
            const workout = { 
                athlete_id: this.props.athleteId,
                workout_title: this.state.title,
                distance: this.state.distance,
                // duration: this.props.duration, 
                elevation: this.state.elevation, 
                sport: this.state.sport,
                date: this.state.date,
                start_time: this.state.time
            }
            
            if (this.props.workoutId) {
                workout.id = this.props.workoutId;
            }
            
            debugger
            this.props.action(workout).then(workout => { 
                this.props.history.push({ 
                    pathname: `/activities/${workout.id}`
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

                <div className="page container">
                <h1>Manual Entry</h1>
                    <form onSubmit={this.handleSubmit} className="manual-entry-body">
                    <div className="row">
                        <label>Distance
                            <input type="number" min="0" value={this.state.distance} onChange={this.handleChange("distance")}/>
                        </label>

                        <label>Duration
                            <input type="number" min="0" value={this.state.hours} onChange={this.handleChange("hours")}/>
                            <input type="number" min="0" value={this.state.minutes} onChange={this.handleChange("minutes")}/>
                            <input type="number" min="0" value={this.state.seconds} onChange={this.handleChange("seconds")}/>
                        </label>

                        <label>Elevation
                            <input type="number" min="0" value={this.state.elevation} onChange={this.handleChange("elevation")}/>
                        </label>
                    </div>

                    <div className="row">
                        <label>Sport
                            <select id="sports">
                                <option value="bike">Ride</option>
                                <option value="run">Run</option>                            
                                <option value="swim">Swim</option>                            
                            </select>
                        </label>
                            
                        <label>Date and Time
                            <input type="date" />
                                <input type="time" />
                        </label>
                    </div>

                    <div className="row">
                        <label>Title
                            <input type="text" value={this.state.title} onChange={this.handleChange("title")}/>
                        </label>
                    </div>
                    
                    <div className="row">
                        <label>Description
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>

                    <input type="submit" value="Create"/>
                </form>
                </div>
            </div>
        )
    }
}

export default ManualActivity