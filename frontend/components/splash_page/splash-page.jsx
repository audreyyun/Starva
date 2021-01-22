import React from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends React.Component {


    render() {
        return (
            <div id="splash-page">
                <div className="splash-top">
                    <img className="starva-logo" src={window.starvalogo} alt="" />
                    <div className="header-container">
                        <Link to="/login"><button className="login-btn rev-link">Log In</button></Link>
                    </div>
                </div>
                <div className="splash-body-container">
                    <h2>The #1 app for runners and cyclists</h2>
                    </div>
            </div>
        )

    }
}

export default SplashPage