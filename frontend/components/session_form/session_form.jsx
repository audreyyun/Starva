import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push(`/`))
    }

    handleInput(type) { 
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    render () { 
        // const link = (this.props.formType === 'Sign Up' ?
        //     <Link className="auth-login-btn" to="/login"><button>Log In</button></Link> :
        //     <Link className="auth-signup-btn" to="/signup"><button >Sign Up</button></Link>);

        // const revlink = (this.props.formType !== 'Sign Up' ?
        //     <Link className="auth-login-btn" to="/login"><button>Log In</button></Link> :
        //     <Link className="auth-signup-btn" to="/signup"><button >Sign Up</button></Link>);

        return (
            <div className="session-form">
                <h1>Join Strava today, it's Free.</h1>
                <h3>{this.props.navLink}</h3>
                <form>
                    <label>Email
                        <input type="text" value = {this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>

                </form>
            </div>
        )
    }
}

export default SessionForm;