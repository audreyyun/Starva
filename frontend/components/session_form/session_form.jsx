import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar'


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
        this.props.processForm(user).then(() => this.props.history.push(`/dashboard`))
    }

    handleInput(type) { 
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    loginDemoUser(e) { 
        e.preventDefault();
        const demoUser = {email: "guest@guest.com", password: "password"}
        this.props.logIn(demoUser).then(() => this.props.history.push('/dashboard'))
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


        const navbarProps = (this.props.formType === 'Log In' ?
            {
                loginBtnClass: "nav-btn-primary",
                loginBtnLabel: "Sign Up",
                loginBtnPath: "/signup",
                isAuthenticated: false
            } : {
                loginBtnClass: "nav-btn-secondary",
                loginBtnLabel: "Log In",
                loginBtnPath: "/login",
                isAuthenticated: false

            })


            document.title = this.props.pageTitle
        return (
            <div className="session sesh-border">
                <Navbar {...navbarProps}/>
                   
                {this.renderErrors()}
                <form className="session-form-container" onSubmit={this.handleSubmit}>
                    <h1 className="page-name">{this.props.formType}</h1>
                    <img className="session-bg" src={window.sessionbg} alt="" />
                    <div className="session-form-inner">

                        <input className="login-input" type="email" placeholder="Your Email" value = {this.state.email} onChange={this.handleInput('email')}/>
                        <input className="login-input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>

                        <Button className="btn-primary" onSubmit={this.handleSubmit} formType={this.props.formType}/>
                        {this.props.formType === "Sign Up" &&
                            <Button className="btn-demo" onSubmit={this.handleSubmit} formType="Demo User" onClick={this.loginDemoUser}/>
                        }
                    </div>
                </form>
                
                </div>
        )
    }
}

export default SessionForm;