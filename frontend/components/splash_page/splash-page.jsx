import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar/navbar';


const navbarProps = {
    loginBtnClass: "nav-btn-secondary",
    loginBtnLabel: "Log In",
    loginBtnPath: "/login",
    isAuthenticated: false
}

class SplashPage extends React.Component {

    render() {
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
                                <h3>MENU</h3>
                                <p className="footer-column-link">FEATURES</p>
                                <p className="footer-column-link">SUBSCRIPTION</p>
                                <p className="footer-column-link">ABOUT</p>
                                <p className="footer-column-link">CAREERS</p>
                                <p className="footer-column-link">BLOG</p>
                            </div>

                            <div className="footer-column">
                                <h3>FOLLOW</h3>
                                <p className="footer-column-link">FACEBOOK</p>
                                <p className="footer-column-link">INSTAGRAM</p>
                                <p className="footer-column-link">TWITTER</p>
                                <p className="footer-column-link">YOUTUBE</p>
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





                    {/* <div className="footer-columns-container">
                        <div className="splash-footer">
                        <div className="footer-logo-container">
                        </div>
                        </div>

                        <div className="session-form-links">
                            <div className="footer-getting-started">Getting Started</div>
                            <div className="footer-links">
                                <div className="footer-session"><Link to="/login" className="footer-session">Log In</Link></div>
                                <div className="footer-session"><Link to="/signup" className="footer-session">Sign Up</Link></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        )

    }
}

export default SplashPage