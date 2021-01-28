import React from 'react';
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
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }
        
        const routeItems = this.props.routes.map( (route) => (
            <RouteIndexItem key={route.id} route={route}/> 
        ));


        return ( 
            <div className="routes-index-pg-container">
                <Navbar logout={this.props.logout} {...navbarProps} />
                <div className="splash-border"></div>
                <ul>{routeItems}</ul>
            </div>
        )
    }
}

export default RouteIndex;