import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Button from '../Button';
import RouteIndexItemContainer from './route_index_item_container'
import RouteIndexItem from './route_index_item'


class RouteIndex extends React.Component { 
    constructor(props) { 
        // debugger
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() { 
        // debugger
        this.props.fetchRoutes(this.props.sessionId);
    }
    

    handleDelete(routeId) {
        return e => { 
            if (window.confirm("Are you sure you want to delete this route? You can not undo this action.")) {
                this.props.deleteRoute(routeId).then(
                    this.props.history.replace({
                        pathname: `/dashboard`
                    })
                )
            }
        }


        // debugger
        // if (window.confirm("Are you sure you want to delete this route? You can not undo this action.")) {
        //     this.props.deleteRoute(routeId).then(
        //         this.props.history.replace({
        //             pathname: `/routes/`
        //         })
        //     )
        // }
    }

    handleClick(e) { 
        e.preventDefault();
        const dropdown = document.getElementById("wrench-content")
        if (dropdown.style.display === "none"){
            dropdown.style.display = "block"
        } else { 
            dropdown.style.display = "none"
        }
    }

    render () { 

        // debugger
        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }
        
            const routeItems = Object.values(this.props.routes).map( (route) => (
                <li className="route-index-item" key={route.id}>
                    <div className="map-preview">
                        {/* <div className="wrench-dropdown"> */}

                        {/* <Link id ="wrench-btn" className="wrench-btn" onClick={this.handleClick} to="/"> */}
                        <div id="wrench-btn" className="wrench-btn" onClick={this.handleClick}>
                            <img className="sprite-wrench" src={window.wrench} alt="" />
                        </div>
                            <div id="wrench-content" className="wrench-content" >
                            <div>
                                <Link className="sprite-wrench-options" to={`/routes/${route.id}/edit`}>Edit Route</Link>
                            </div>
                            <div>
                                <Link className="sprite-wrench-options" to="/routes/" onClick={this.handleDelete(route.id)}>Delete Route</Link>
                            </div>
                        </div>
                        <RouteIndexItem route={route}
                        fetchRoute={this.props.fetchRoute}
                        />
                        </div>
                    {/* </div> */}
                </li>
            ));

        if (this.props.routes.length === 0) {
            return (
                <div id="routes-index-pg-container">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="routes-index-body">
                        <div className="routes-index-heading-row">
                            <h1 className="routes-index-title">My Routes</h1>

                            <Link className="create-route-btn-container" to="/routes/new">
                                <Button className="create-route-btn" formType="Create New Route" />
                            </Link>
                        </div>

                        <div>
                            No Routes!
                        </div>

                    </div>

                </div>
            )   
        } else { 
            return ( 
                <div id="routes-index-pg-container">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="routes-index-body">
                        <div className="routes-index-heading-row">
                            <h1 className="routes-index-title">My Routes</h1>
                        
                            <Link className="create-route-btn-container" to="/routes/new">
                                <Button className="create-route-btn" formType="Create New Route" />
                            </Link> 
                        </div>

                        
                        <ul className="routes-list">{routeItems}</ul>
                    
                    </div>

                </div>
            )
        }
    }
}

export default RouteIndex;