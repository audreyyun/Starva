import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

class DashboardIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }

    render() { 
        const navbarProps = 
            {
                loginBtnClass: "nav-btn-secondary",
                loginBtnLabel: "Log Out",
                loginBtnPath: "/logout",
                isAuthenticated: true,
            }

        return (
            <div>
                <div className="dashboard-border">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <h1>Welcome to Dashboard page</h1>
                    
                </div>
            </div>
        )

    }
}

export default DashboardIndex