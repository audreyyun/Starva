import React from 'react';
import Navbar from '../Navbar';
import Button from '../Button';


class RouteIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            encodedRoute: this.props.route.route, 
            distance: this.props.route.distance
        };

        this.initializeMap = this.initializeMap.bind(this);
        this.createRoute = this.createRoute.bind(this);
    }

    componentDidMount() { 
        this.initializeMap(() => { 
            if (this.state.encodedRoute) {  this.createRoute() }
            debugger
            this.props.fetchRoute(this.props.routeId).then(fetchRoute => { 
                this.setState({ 
                    encodedRoute: fetchRoute.route.route, 
                    route: fetchRoute.route
                })
                this.createRoute();
            })
        })

        // this.initializeMap(this.createRoute)
    }


    createRoute() {
        this.poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
            editable: true
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
    }

    initializeMap(cb) {
        // set the map to show SF
        debugger
        const mapOptions = {
            center: { 
                lat: this.props.route.start_lat,
                lng: this.props.route.start_long
            },
            zoom: 10, 
        };


        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        if (cb) {
            debugger
            google.maps.event.addListenerOnce(this.map, 'tilesloaded', cb);
        }

    }

    render() {

        return (
            <div className="route-card">
                <div className="splash-border"></div>
                <div className="route-name">{this.props.route.route_name}</div>
                <div className="distance">{this.props.route.distance}</div>

                <div id='map-container' ref={map => this.mapNode = map}> </div>
            </div>
        )
    }
}

export default RouteIndexItem;