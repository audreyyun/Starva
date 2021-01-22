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
                        <Link to="/login"><Button className="btn-secondary login-btn" formType="Log In"/></Link>
                    </div>
                </div>
                <div className="splash-body-container">
                    <h2 className="motto">The #1 app for runners and cyclists</h2>
                    <img className="splashphoto" src={window.splashpage} alt="" />
                </div>
            </div>
        )

    }
}

export default SplashPage