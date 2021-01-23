import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';


class SplashPage extends React.Component {


    render() {
        return (
            <div id="splash-page">
                    <div className="splash-top">
                        <img className="starva-logo" src={window.starvalogo} alt="" />
                        <div className="header-container">
                            <Link to="/login"><Button className="splash-login-btn" formType="Log In"/></Link>
                        </div>
                    </div>
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
                                <p className="member">Already a Member? <Link to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            <footer className="footer">
                <div className="splash-footer">
                    <div className="footer-logo-container">
                        <img className="footer-logo-png" src={window.footerlogo} alt="" />
                    </div>
                </div>

                <div className="session-form-links">


                </div>
            </footer>
            </div>

        )

    }
}

export default SplashPage