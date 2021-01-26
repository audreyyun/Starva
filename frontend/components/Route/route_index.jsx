import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar'


class RouteIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }

    componentDidMount() { 
        this.props.fetchRoutes()
    }
    render () { 
        const navbarProps =
        {
            loginBtnClass: "nav-btn-primary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }
        return ( 
            <div className="routes-index-pg-container">
                <Navbar logout={this.props.logout} {...navbarProps} />
            </div>
        )
    }
}

export default RouteIndex;