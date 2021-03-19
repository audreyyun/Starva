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
            // debugger
            this.initializeMap(this.createRoute);
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

    }

    initializeMap(cb) { 
        debugger
        const mapOptions = {
            center: { lat: 34.0745, lng: -118.3294 },
            zoom: 12
        };

        
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // this.elevation = new google.maps.ElevationService();
        
        // draw path, using visualization API and elvation service
        //displayPathElevation(path, elevation, map) is my createRoute ()

        if (cb) { 
            debugger
            google.maps.event.addListenerOnce(this.map, 'tilesloaded', cb);
        }
        
    }

    createRoute() { 
        this.poly = new google.maps.Polyline({
            strokeColor: "#FC5200",
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
            debugger
            this.poly.setPath(google.maps.geometry.encoding.decodePath(this.state.encodedRoute));
            
            const mapBounds = new google.maps.LatLngBounds();
            this.poly.getPath().forEach(location => mapBounds.extend(location));
            this.map.fitBounds(mapBounds);

            this.changedRoute();
        }


        // Add a listener for the click event
        this.map.addListener("click", this.handleClick);

        //For edits to the polyline / route
        google.maps.event.addListener(this.poly, "dragend", this.changedRoute);
        google.maps.event.addListener(this.poly.getPath(), "insert_at", this.changedRoute);
        google.maps.event.addListener(this.poly.getPath(), "remove_at", this.changedRoute);
        google.maps.event.addListener(this.poly.getPath(), "set_at", this.changedRoute);
    
    }

    //takes array of elevationresult objects, draws the path on the map and plots the elevation profile 
    // plotElevation() { 
    //     if (status === 'OK') { 
    //         const data = new google.visualization.DataTable();
    //         data.addColumn('number', 'Elevation');
    //         const path = this.poly.getPath().getArray();

    //         for (let i = 0; i < path.length; i++) {
    //             data.addRow(['', elevation[i].elevation])
    //         }
    //     }
    // }
    addLatLng() {
        const path = this.poly.getPath().getArray();

        this.setState({ //spherical computes geodesic angles, distances, and areas
            distance: Number.parseFloat(google.maps.geometry.spherical.computeLength(path) / 1600).toFixed(2)
        });

    }

    handleClick(e) { 
        const path = this.poly.getPath();
        // Because path is an MVCArray, we can simply append a new coordinate
        // and will automatically appear.
        path.push(e.latLng);
    }


    handleSave() { 
        // eventually a modal?
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

            this.props.action(route).then((route) => {
                this.props.history.push({ 
                    pathname: `/routes/${route.route.id}/view`
                })
            });
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
                map: this.map, 
                
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
                    {this.renderTools()}
                    <div id='map-container' ref={map => this.mapNode = map}> </div>
                </div>
            </div>
        )
    }

    renderTools() { 
        return (
            <div className="create-route-bar">
                <button id="save-route" onClick={this.handleSave}>Save</button>
                <div>Miles: {this.state.distance}</div>
            </div>
        )
    }

}

export default RouteMap