import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar';


const navbarProps = {
    loginBtnClass: "nav-btn-secondary",
    loginBtnLabel: "Log In",
    loginBtnPath: "/login",
    isAuthenticated: false
}

class SplashPage extends React.Component {

    render() {
        document.title="Starva | Run and Cycling Tracking onthe Social Network for Athletes"
        return (
            <div id="splash-page">
                <Navbar {...navbarProps} />

                <div className="splash-border"></div>

                <div className="splash-body-container">
                    <h2 className="motto">The #1 app for runners and cyclists</h2>
                    <div className="splash-body-content">
                        <div className="splash-img-container">
                            <img className="splashphoto" src={window.splashpage} alt="" />
                        </div>
                        <div className="splash-body-right">
                            <Link to="/signup"><Button className="splash-signup-btn" formType="Sign Up" /></Link>
                            <div className="member-spacing">
                                <p className="member">Already a Member? <Link to="/login" className="member">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-container">
                        <div className="footer-grid">
                            <div className="footer-column">
                                <div className="footer-logo-container">
                                    <img className="footer-logo-png" src={window.footerlogo} alt="" />
                                </div>
                                <p className="footer-copyright">@2021 Starva</p>
                            </div>

                            <div className="footer-column">
                                <h3> </h3>
           
                            </div>

                            <div className="footer-column">
                                <h3>FOLLOW</h3>
                                <a href="https://www.linkedin.com/in/audrey-yun/"><p className="footer-column-link">LINKEDIN</p></a>
                                <a href="https://github.com/audreyyun/"><p className="footer-column-link">GITHUB</p></a>
                                <p className="footer-column-link">PORTFOLIO</p>
                            </div>

                            <div className="footer-column">
                                <h3>GET STARTED</h3>
                                <p className="footer-column-link">
                                <Link to="/signup" className="footer-column-link">SIGN UP</Link>
                                </p>

                                <p className="footer-column-link">
                                <Link to="/login" className="footer-column-link">LOGIN</Link>
                                </p>
                            </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default SplashPage