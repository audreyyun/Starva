import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';

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

    // componentWillUnmount() { 
    //     this.props.receiveErrors([])
    // }

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
            <Link className="auth-session-btn" to="/login"><button className="rev-link">Log In</button></Link> :
            <Link className="auth-session-btn" to="/signup"><button className="rev-link">Sign Up</button></Link>);

        const demo = (this.props.formType === 'Sign Up' ? <button onClick={this.loginDemoUser}>Log In Demo User</button> : null)
        return (
            <div className="session sesh-border">
                <div className="top">
                    <img className="starva-logo" src={window.starvalogo} alt="" />
                        <div className="sesh-btn">{link}</div>
                </div>
                   
                {this.renderErrors()}
                <form className="session-form-container" onSubmit={this.handleSubmit}>
                    <h1 className="page-name">{this.props.formType}</h1>
                    <img className="session-bg" src={window.sessionbg} alt="" />
                    <div className="session-form-inner">

                        <input className="login-input" type="email" placeholder="Your Email" value = {this.state.email} onChange={this.handleInput('email')}/>
                        <input className="login-input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>

                    <Button className="btn-primary" handleSubmit={this.handleSubmit} formType={this.props.formType}/>
                    </div>
                </form>
                
                <form className="demo"onSubmit={this.handleSubmit}>
                    {/* <button onClick={this.loginDemoUser}>Log In Demo User</button> */}
                    {demo}
                </form>
                </div>
        )
    }
}

export default SessionForm;