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
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push(`/`))
    }

    handleInput(type) { 
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    loginDemoUser(e) { 
        e.preventDefault();
        const demoUser = {email: "guest@guest.com", password: "password"}
        this.props.processForm(demoUser).then(() => this.props.history.push('/'))
    }
    componentWillUnmount() { 
        this.props.receiveErrors([])
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () { 
        const link = (this.props.formType === 'Sign Up' ?
            <Link className="auth-login-btn" to="/login"><button>Log In</button></Link> :
            <Link className="auth-signup-btn" to="/signup"><button >Sign Up</button></Link>);

        return (
            <div className="session-form">
                <h1>Join Strava today, it's Free.</h1>
        
                <h3>{link}</h3>

                {this.renderErrors()}
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="text" value = {this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>

                </form>
                
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.loginDemoUser}>Log In Demo User</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;