import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Button from '../Button';


class RouteShow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            encodedRoute: this.props.route.route,
            distance: this.props.route.distance
        };

        this.initializeMap = this.initializeMap.bind(this);
        this.createRoute = this.createRoute.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.initializeMap(() => {
            if (this.state.encodedRoute) { this.createRoute() }
            
            this.props.fetchRoute(this.props.route.id).then(action => {
                this.setState({
                    encodedRoute: action.route.route,
                    route: action.route
                })
                this.createRoute();

            
            })
        })

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
        
        const mapOptions = {
            strokeColor: "#FC5200",
            center: {
                lat: this.props.route.start_lat,
                lng: this.props.route.start_long
            },
            zoom: 10,
            disableDefaultUI: true,
            draggable: false,
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        if (cb) {
            
            google.maps.event.addListenerOnce(this.map, 'tilesloaded', cb);
        }

    }

    handleDelete() {
        if (window.confirm("Are you sure you want to delete this route? You can not undo this action.")) {
            this.props.deleteRoute(this.props.routeId).then(
                this.props.history.replace({
                    pathname: `/routes/`
                })
            )
        }
    }

    render() {
        if (this.props.sessionId !== this.props.route.athlete_id) {
            debugger
            return null;
        } else if (this.props.sessionId === this.props.route.athlete_id) {
            let month = new Date(this.props.route.created_at).getMonth() + 1;
            let day = new Date(this.props.route.created_at).getDate();
            let year = new Date(this.props.route.created_at).getFullYear();
            let monthLetter = null;

                if (month ===  1) { monthLetter = "January";}
                else if (month ===  2) { monthLetter = "February";}
                else if (month ===  3) { monthLetter = "March";}
                else if (month ===  4) { monthLetter = "April";}
                else if (month ===  5) { monthLetter = "May";}
                else if (month ===  6) { monthLetter = "June";}
                else if (month ===  7) { monthLetter = "July";}
                else if (month ===  8) { monthLetter = "August";}
                else if (month ===  9) { monthLetter = "September";}
                else if (month ===  10) { monthLetter = "October";}
                else if (month ===  11) { monthLetter = "November";}
                else if (month ===  12) { monthLetter = "December";}
            
            

            const navbarProps =
            {
                loginBtnClass: "nav-btn-secondary",
                loginBtnLabel: "Log Out",
                loginBtnPath: "/logout",
                isAuthenticated: true,
            }

            debugger

            return (
                <div>
                    <div className="route-card">
                        <Link to={`/routes/${this.props.route.id}`}>
                            <div id='item-map-container' ref={map => this.mapNode = map}> </div>
                        </Link>
                        <div id='route-item-info'>
                            <Link to={`/routes/${this.props.route.id}`}>
                                <h3 className="route-name">{this.props.route.route_name}</h3>
                            </Link>
                            <ul className="inline-stats">
                                <li>
                                <strong>
                                    <p id="text" className="distance">{this.props.route.distance}</p>
                                    <abbr className="unit" title="miles">mi</abbr>
                                </strong>
                                <p className="label">Distance</p>
                                </li>
                            </ul>
                        </div>

                        <div id="route-item-timestamp">Created on {monthLetter} {day}, {year} </div>

                    </div>
                </div>
            )
        }
    }
}

export default RouteShow;