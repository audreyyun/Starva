import React from 'react'
import Navbar from '../Navbar'


class RouteMap extends React.Component {
    constructor(props) { 
        debugger
        super(props);
        this.addLatLng = this.addLatLng.bind(this);
        this.initializeMap = this.initializeMap.bind(this)
        this.handleSave = this.handleSave.bind(this);

        this.state = { 
            route: {name: ""},
            encodedRoute: null,
            distance: 0
        }
    }

    componentDidMount() {
        if (!this.props.routeId) { 
            debugger
            this.initializeMap();
        } else { 
            this.initializeMap(() => { 
                this.props.fetchRoute(this.props.routeId).then(action => { 
                    debugger
                    this.setState({ 
                        route: action.route, 
                        encodedRoute: action.route.route
                    })
                })
            })
        }

        // this.initializeMap();
    }

    initializeMap(cb) { 
        // set the map to show SF
        const mapOptions = {
            center: { lat: 34.0745, lng: -118.3294 }, // this is SF
            zoom: 7
        };

        
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        if (cb) { 
            google.maps.event.addListenerOnce(this.map, 'tilesloaded', cb);
        }

        this.poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
            editable: true
        });

        this.poly.setMap(this.map);

        if (this.state.encodedRoute) {
            this.poly.setPath(google.maps.geometry.decodePath(this.state.encodedRoute));

        }
        
        // Add a listener for the click event
        this.map.addListener("click", this.addLatLng);
    }

    addLatLng(e) {
        const path = this.poly.getPath();
        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        path.push(e.latLng);
        // Add a new marker at the new plotted point on the polyline.
        new google.maps.Marker({
            position: e.latLng,
            title: "#" + path.getLength(),
            map: this.map,
        });

        this.setState({ //spherical computes geodesic angles, distances, and areas
            distance: Number.parseFloat(google.maps.geometry.spherical.computeLength(path) / 1600).toFixed(2)
        });

        const encodeString = google.maps.geometry.encoding.encodePath(path);

        //For edits to the polyline
        // google.maps.event.addListener(this.poly, "dragend", this.changedRoute);
        // google.maps.event.addListener(this.poly.getPath(), "insert_at", this.changedRoute);
        // google.maps.event.addListener(this.poly.getPath(), "remove_at", this.changedRoute);
        // google.maps.event.addListener(this.poly.getPath(), "set_at", this.changedRoute);
    }

    handleSave() { 
        //eventually a modal 
        const title = prompt("Route name(required)", this.state.route.route_name);
        const path = this.poly.getPath();

        if (title) { 
            const route = { 
                athlete_id: this.props.athleteId,
                route_name : title, 
                route: google.maps.geometry.encoding.encodePath(path),
                start_lat: path.getArray()[0].lat(),
                start_long: path.getArray()[0].lng(),
                distance: this.state.distance,
                id: this.props.routeId
            }
            debugger

            this.props.action(route)
            .then(() => {
                this.props.history.push({ 
                    pathname: `/routes/`
                })
            })
            // .then((savedRoute) => {
            //     this.props.history.push({ 
            //         pathname: `/routes/${savedRoute.route.id}`
            //     })
            // })
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

        return (
                // ...
                // this ref gives us access to the map dom node
            <div>
                <Navbar logout={this.props.logout} {...navbarProps} />
                <div className="create-route-container">
                    {this.renderSidebar()}
                    <div id='map-container' ref={map => this.mapNode = map}> </div>
                </div>
            </div>
        )
    }

    renderSidebar() { 
        return (
            <div className="create-route-sidebar">
                <button id="save-route" onClick={this.handleSave}>Save Route</button>
                <div>Miles: {this.state.distance}</div>
            </div>
        )
    }

    // changedRoute() { 
    //     const path = this.poly.getPath().getArray();
    //     this.setState({
    //         totalMiles: Number.parseFloat(
    //             google.maps.geometry.spherical.computeLength(path) / 1600
    //         ).toFixed(2)
    //     });



    // }

}


            //   const navbarProps =
//     {
//         loginBtnClass: "nav-btn-secondary",
//         loginBtnLabel: "Log Out",
//         loginBtnPath: "/logout",
//         isAuthenticated: true,
//     }

// class RouteMap extends React.Component {
//     constructor (props) { 
//         super(props)
//     }

    
//     render () {
//         return (
//             <div id='map-container' ref='map'>
//                 <Navbar logout={this.props.logout} {...navbarProps} />
//                 {/* <RouteCreationMap /> */}
//                 <div className="splash-border"></div>
//             </div>
//         )
//     }
   
// }

export default RouteMap