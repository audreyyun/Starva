import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Button from '../Button';
import RouteIndexItemContainer from './route_index_item_container'
import RouteShowContainer from './route_show_container'
import RouteIndexItem from './route_index_item'
import RouteShow from './route_show'


class RouteIndex extends React.Component { 
    constructor(props) { 
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.myRoutes = this.myRoutes.bind(this);
        this.state = { 
            myCreatedRoutes: [],
        };
    };

    componentDidMount() { 
        // debugger
        this.props.fetchRoutes(this.props.sessionId).then(() => ( this.myRoutes() ) );

        // this.props.fetchRoutes(this.props.sessionId);
        // this.myRoutes();
    };
    

    handleDelete(routeId) {
        return e => { 
            if (window.confirm(`Are you sure you want to delete this route? You can not undo this action.`)) {
                this.props.deleteRoute(routeId).then(
                    // this.props.history.replace({
                    //     pathname: `/dashboard`
                    // })
                    location.reload()
                );
            };
        };

    };

    handleClick(routeId) { 
        
        const dropdown = document.getElementById(`wrench-content ${routeId}`)
        if (dropdown.style.display === "none"){
            dropdown.style.display = "block"
        } else { 
            dropdown.style.display = "none"
        }
    }

    myRoutes() { 
        let allRoutes = Object.values(this.props.routes).reverse();
        for (let i = 0; i < allRoutes.length; i++) { 
            let route = allRoutes[i];
            if (route.athlete_id === this.props.sessionId) { 
                this.state.myCreatedRoutes.push(route);
                // debugger
            }; 
            this.setState({ state: this.state });
        };
        // debugger
    };

    render () { 
        
        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        };
        
            const routeItems = this.state.myCreatedRoutes.map( (route) => (
                <li className="route-index-item" key={route.id}>
                    <div className="map-preview">

                        <div id="wrench-btn" className="wrench-btn" onClick={() => this.handleClick(route.id)}>
                            <img className="sprite-wrench" src={window.wrench} alt="" />
                        </div>

                        <div id={`wrench-content ${route.id}`} className="wrench-content" >
                            <div>
                                <Link className="sprite-wrench-options" to={`/routes/${route.id}/edit`}>Edit Route</Link>
                            </div>
                            <div>
                                <Link className="sprite-wrench-options" to="/routes/" onClick={this.handleDelete(route.id)}>Delete Route</Link>
                            </div>
                        </div>
                        
                    
                        <RouteShow route={route}
                            routeId={route.id}
                            athlete={this.props.athlete}
                            sessionId={this.props.sessionId}
                            fetchRoute={this.props.fetchRoute}
                        />

                    </div>
                </li>
            ));
            // const routeItems = Object.values(this.props.routes).reverse().map( (route) => (
            //     <li className="route-index-item" key={route.id}>
            //         <div className="map-preview">

            //             {/* <Link id ="wrench-btn" className="wrench-btn" onClick={this.handleClick} to="/"> */}
            //             <div id="wrench-btn" className="wrench-btn" onClick={() => this.handleClick(route.id)}>
            //                 <img className="sprite-wrench" src={window.wrench} alt="" />
            //             </div>

            //             <div id={`wrench-content ${route.id}`} className="wrench-content" >
            //                 <div>
            //                     <Link className="sprite-wrench-options" to={`/routes/${route.id}/edit`}>Edit Route</Link>
            //                 </div>
            //                 <div>
            //                     <Link className="sprite-wrench-options" to="/routes/" onClick={this.handleDelete(route.id)}>Delete Route</Link>
            //                 </div>
            //             </div>
                        
            //             {/* <RouteShow route={route}
            //                 sessionId={this.props.sessionId}
            //                 fetchRoute={this.props.fetchRoute}
            //             /> */}
                    
            //             <RouteShow route={route}
            //                 routeId={route.id}
            //                 athlete={this.props.athlete}
            //                 sessionId={this.props.sessionId}
            //                 fetchRoute={this.props.fetchRoute}
            //             />

            //         </div>
            //     </li>
            // ));

            // const routeIndexItems = Object.values(this.props.routes).map( (route) => (
            //     <li className="route-index-item" key={route.id}>
                    
            //             <RouteIndexItemContainer route={route}
            //                 fetchRoute={this.props.fetchRoute}
            //             />

            //     </li>
            // ));

        if (this.state.myCreatedRoutes.length === 0 ) {
            return (
                <div id="routes-index-pg-container ">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>

                    <div className="routes-index-body-container page container">
                        <div className="routes-index-body">
                            <div className="routes-index-heading-row">
                                <h1 className="routes-index-title">My Routes</h1>

                                <Link className="create-route-btn-container" to="/routes/new">
                                    <Button className="create-route-btn" formType="Create New Route" />
                                </Link>

                                <img className="strava-routes" src={window.routes} alt="" />
                            </div>
                            <div className="index-heading-border"></div>
                            <p>You haven't created any routes.</p>

                        </div>
                    </div>
                </div>
            )   
        } else { 
            // debugger
            return ( 
                <div id="routes-index-pg-container">
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>

                    <div className="routes-index-body-container page container">
                        <div className="routes-index-body">
                            <div className="routes-index-heading-row">
                                <div className="routes-index-heading-title-container">
                                    <h1 className="routes-index-title">My Routes</h1>
                                
                                    <Link className="create-route-btn-container" to="/routes/new">
                                        <Button className="create-route-btn" formType="Create New Route" />
                                    </Link> 
                                </div>
                                <img className="strava-routes" src={window.route} alt="" />
                            </div>

                            <div className="index-heading-border"></div>
                            <ul className="routes-list">{routeItems}</ul>
                        
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default RouteIndex;