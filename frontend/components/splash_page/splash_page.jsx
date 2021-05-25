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
                            <div className="splash-links-container">
                                <a target="_blank" href="https://www.linkedin.com/in/audrey-yun/"><Button className="splash-signup-btn linkedin-splash" formType="LinkedIn" /></a>
                                <a target="_blank" href="https://github.com/audreyyun/"><Button className="splash-signup-btn" formType="Github" /></a>
                                <a target="_blank" href="http://audreyyun.github.io/"><Button className="splash-signup-btn" formType="Portfolio" /></a>

                                {/* <div>
                                    <a className="splash-links" href="https://www.linkedin.com/in/audrey-yun/" target="_blank">LinkedIn</a>
                                </div>
                                <div>
                                    <a className="splash-links" href="https://github.com/audreyyun/" target="_blank">Github</a>
                                </div>
                                <div>
                                    <a className="splash-links" href="http://audreyyun.github.io/" target="_blank">Portfolio</a>
                                </div> */}
                            </div>
                            <div className="hr">
                                <div className="hr-text">or</div>
                            </div>
                            <Link to="/signup"><Button className="splash-signup-btn" formType="Use my email" /></Link>
                            <div className="member-spacing">
                                <p className="member">Already a Member? <Link to="/login" className="member">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer-container">
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
                </footer>
            </div>

        )

    }
}

export default SplashPage