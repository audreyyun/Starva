import React from 'react'
// import { Route } from 'react-router-dom'
// // import MapGL from 'react-map-gl'
import Navbar from '../Navbar'
// import {logout} from '../../actions/session_actions'
// // import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
// // import DrawControl from "@mapbox/mapbox-gl-draw";
// import {useDispatchMap} from './map'
// // import { Markers } from "./Markers";
// // import {RouteCreationMap} from "./RouteCreationMap"
// import GoogleMapReact from 'google-map-react';


class RouteMap extends React.Component {
    constructor(props) { 
        super(props);
        this.addLatLng = this.addLatLng.bind(this);
    }
    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 34.0745, lng: -118.3294 }, // this is SF
            zoom: 7
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
        });
        this.poly.setMap(this.map);
        // Add a listener for the click event
        this.map.addListener("click", this.addLatLng);
    }

    addLatLng(event) {
        const path = this.poly.getPath();
        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        path.push(event.latLng);
        // Add a new marker at the new plotted point on the polyline.
        new google.maps.Marker({
            position: event.latLng,
            title: "#" + path.getLength(),
            map: this.map,
        });
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
                <div id='map-container' ref={map => this.mapNode = map}> </div>
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