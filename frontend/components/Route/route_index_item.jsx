import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Button from '../Button';


class RouteIndexItem extends React.Component {

    constructor(props) {
        debugger
        super(props);

        this.state = { 
            encodedRoute: this.props.route ? this.props.route.route : null,
            distance: this.props.route ? this.props.route.distance : null,
            updated: false
        };

        this.initializeMap = this.initializeMap.bind(this);
        this.createRoute = this.createRoute.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() { 

        debugger
        this.initializeMap(() => { 
            this.props.fetchRoute(this.props.routeId).then(action => { 
                this.setState({ 
                    encodedRoute: action.route.route, 
                    route: action.route
                })
                this.createRoute();
            })
            if (this.state.encodedRoute) {  this.createRoute() }
        })

        // if (this.state.encodedRoute) { this.createRoute() }
        // this.props.fetchRoute(this.props.routeId).then(action=> { 
        //     this.setState({ 
        //         encodedRoute: action.route.route,
        //         route: action.route
        //     })
        // })
        // this.initializeMap(this.createRoute)
    }


    createRoute() {
        this.poly = new google.maps.Polyline({
            strokeColor: "#FC5200",
            strokeOpacity: 1.0,
            strokeWeight: 3,
            editable: false, 
        });

        this.poly.setMap(this.map);


        // this.elevation.getElevationAlongPath(
        //     { path: this.poly.getPath(),
        //     samples: 256,
        //     },
        //     this.plotElevation
        // );

        if (this.state.encodedRoute) {
            this.poly.setPath(google.maps.geometry.encoding.decodePath(this.state.encodedRoute));
        }


        const mapBounds = new google.maps.LatLngBounds();
        this.poly.getPath().forEach(location => mapBounds.extend(location));
        this.map.fitBounds(mapBounds);
    }

    initializeMap(cb) {
        // set the map to show SF
        debugger
        const mapOptions = {
            strokeColor: "#FC5200",
            center: { 
                lat: this.props.route.start_lat,
                lng: this.props.route.start_long
            },
            zoom: 10, 
            disableDefaultUI: true,
            // draggable: false,
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        if (cb) {
            debugger
            google.maps.event.addListenerOnce(this.map, 'tilesloaded', cb);
        }

    }

    handleDelete() { 
        if (window.confirm("Are you sure you want to delete this route? You can not undo this action.")) { 
            this.props.deleteRoute(this.props.routeId).then(
                this.props.history.replace({ 
                    pathname:`/routes/`
                })
            )
        }
    }

    render() {
        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }
        debugger

        if (!this.props.route) { 
            return (<div></div>)
        } else { 
            let month = new Date(this.props.route.created_at).getMonth() + 1;
            let day = new Date(this.props.route.created_at).getDay();
            let year = new Date(this.props.route.created_at).getFullYear();
            let monthLetter = null;
            let athleteName;

            if (month === 1) { monthLetter = "January"; }
            else if (month === 2) { monthLetter = "February"; }
            else if (month === 3) { monthLetter = "March"; }
            else if (month === 4) { monthLetter = "April"; }
            else if (month === 5) { monthLetter = "May"; }
            else if (month === 6) { monthLetter = "June"; }
            else if (month === 7) { monthLetter = "July"; }
            else if (month === 8) { monthLetter = "August"; }
            else if (month === 9) { monthLetter = "September"; }
            else if (month === 10) { monthLetter = "October"; }
            else if (month === 11) { monthLetter = "November"; }
            else if (month === 12) { monthLetter = "December"; }

            if (!this.props.athlete.first_name) {
                athleteName = this.props.athlete.email
            } else {
                athleteName = this.props.athlete.first_name + this.props.athlete.last_name
            }

            return (
                <div>
                    <Navbar logout={this.props.logout} {...navbarProps} />
                    <div className="splash-border"></div>
                    <div className="page container">
                        <div className="breadcrumbs">
                            <Link className="" to="/routes/">{`My Routes `}</Link>
                            <div>{` / ${this.props.route.route_name}`}</div>
                        </div>

                        <div className="route-name media">
                            <div className="media-body">
                                <h1>{this.props.route.route_name}</h1>
                            </div>
                        </div>

                        <section className="borderless actions">
                            <Link to={`/routes/${this.props.route.id}/edit`}>
                                <Button className={`btn-secondary edit-route`} formType={`Edit`}></Button>
                            </Link>
                        </section>
                        <div className="route-view">
                            <div id='route-view-map-container' ref={map => this.mapNode = map}> </div>

                            <div id='route-view-info'>
                                <div className="route-details">
                                    <div className="details media-body">By {athleteName}</div>
                                    <div id="route-view-timestamp">Created on {monthLetter} {day}, {year}</div>
                                </div>
                                <div className="distance">{this.props.route.distance}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default RouteIndexItem;