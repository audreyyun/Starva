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
            debugger
            this.props.fetchRoute(this.props.routeId).then(action => {
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
        debugger
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
            debugger
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
        let month = new Date(this.props.route.created_at).getMonth() + 1;
        let day = new Date(this.props.route.created_at).getDay();
        let year = new Date(this.props.route.created_at).getFullYear();


        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }

        return (
            <div>
                <div className="route-card">
                    <Link to={`/routes/${this.props.route.id}`}>
                        {/* <div className="map-preview">
                            <img className="sprite-wrench" src={window.wrench} alt="" /> */}
                        <div id='item-map-container' ref={map => this.mapNode = map}> </div>
                        {/* </div> */}
                    </Link>
                    <div id='route-item-info'>
                        <Link to={`/routes/${this.props.route.id}/view`}>
                            <div className="route-name">{this.props.route.route_name}</div>
                        </Link>
                        <Link to={`/routes/${this.props.route.id}/view`}>
                            <div className="distance">{this.props.route.distance}</div>
                        </Link>
                    </div>

                    <div id="route-item-timestamp">Created on {month}/{day}/{year} </div>

                </div>
            </div>
        )
    }
}

export default RouteShow;