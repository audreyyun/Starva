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
    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
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