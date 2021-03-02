import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Button from '../Button';
import RouteIndexItemContainer from './route_index_item_container'


class RouteIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }

    componentDidMount() { 
        this.props.fetchRoutes();
    }

    render () { 
        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }
        
        const routeItems = Object.values(this.props.routes).map( (route) => (
            <RouteIndexItemContainer key={route.id} route={route}/> 
        ));

        


        return ( 
            <div id="routes-index-pg-container">
                <Navbar logout={this.props.logout} {...navbarProps} />
                <div className="splash-border"></div>
                <div className="routes-index-body">
                    <div className="routes-index-row">
                        <h1 className="routes-index-title">My Routes</h1>
                    </div>

                    <Link className="create-route-btn" to="/roues/new">
                        <Button className="nav-btn-primary" formType="Create a Route" />
                    </Link> 
                    <ul>{routeItems}</ul>
                
                </div>

            </div>
        )
    }
}

export default RouteIndex;