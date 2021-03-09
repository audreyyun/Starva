import React from 'react'
import Navbar from '../Navbar'


class RouteMap extends React.Component {
    constructor(props) { 
        debugger
        super(props);
        this.addLatLng = this.addLatLng.bind(this);
        this.initializeMap = this.initializeMap.bind(this)
        this.handleSave = this.handleSave.bind(this);
        this.createRoute = this.createRoute.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changedRoute = this.changedRoute.bind(this);

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
                    this.createRoute();
                })
            })
        }

        // this.initializeMap();
    }

    initializeMap(cb) { 
        // set the map to show SF
        debugger
        const mapOptions = {
            center: { lat: 34.0745, lng: -118.3294 },
            zoom: 7
        };

        
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        if (cb) { 
            debugger
            google.maps.event.addListenerOnce(this.map, 'tilesloaded', cb);
        }
        
        // Add a listener for the click event
        this.map.addListener("click", this.handleClick);
    }

    createRoute() { 
        this.poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
            editable: true
        });

        this.poly.setMap(this.map);

        if (this.state.encodedRoute) {
            debugger
            this.poly.setPath(google.maps.geometry.encoding.decodePath(this.state.encodedRoute));

            this.changedRoute();
        }

        //For edits to the polyline / route
        google.maps.event.addListener(this.poly, "dragend", this.changedRoute);
        google.maps.event.addListener(this.poly.getPath(), "insert_at", this.changedRoute);
        google.maps.event.addListener(this.poly.getPath(), "remove_at", this.changedRoute);
        google.maps.event.addListener(this.poly.getPath(), "set_at", this.changedRoute);
    }

    addLatLng() {
        const path = this.poly.getPath().getArray();
        
        new google.maps.Marker({
            position: e.latLng,
            title: "#" + path.getLength(),
            map: this.map,
        });

        this.setState({ //spherical computes geodesic angles, distances, and areas
            distance: Number.parseFloat(google.maps.geometry.spherical.computeLength(path) / 1600).toFixed(2)
        });

    }

    handleClick(e) { 
        const path = this.poly.getPath();
        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        path.push(e.latLng);
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
            
            if (this.props.routeId) {
                route.id = this.props.routeId;
            }

            this.props.action(route).then(() => {
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

    changedRoute() {
        //.getPath retrieves the path
        const path = this.poly.getPath().getArray();
        this.setState({
            distance: Number.parseFloat(
                google.maps.geometry.spherical.computeLength(path) / 1600
            ).toFixed(2)
        });

        if (!this.starter) { 
            this.starter = new google.maps.Marker({ 
                position: path[0],
                title: "START",
                map: this.map
            })

            this.starter.addListener("click", () => { 
                this.poly.getPath().push(this.starter.getPosition()); //Marker method 
            })
        } else { 
            this.starter.setPosition(path[0]);
            this.starter.setMap(this.map); //renders this shape on the specific map 
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
            <div className="route-page-container">
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