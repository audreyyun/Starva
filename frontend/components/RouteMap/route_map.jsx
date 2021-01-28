import React from 'react'
import { Route } from 'react-router-dom'
import { RouteCreationMap } from './RouteCreationMap'
import MapGL from 'react-map-gl'
import Navbar from '../Navbar'
import {logout} from '../../actions/session_actions'
// import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
// import DrawControl from "@mapbox/mapbox-gl-draw";
import {useDispatchMap} from './map'
// import { Markers } from "./Markers";


  const navbarProps =
    {
        loginBtnClass: "nav-btn-secondary",
        loginBtnLabel: "Log Out",
        loginBtnPath: "/logout",
        isAuthenticated: true,
    }

class RouteMap extends React.Component {
    constructor (props) { 
        super(props)
    }

    
    render () {

        return (
        
        <div>
            <Navbar logout={this.props.logout} {...navbarProps} />
            <RouteCreationMap />
            <div className="splash-border"></div>
        </div>
        )
    }
    // const [viewport, setViewport] = React.useState({
    //     latitude: 34.0746,
    //     longitude: -118.3296,
    //     zoom: 11
    // });

    // const navbarProps =
    // {
    //     loginBtnClass: "nav-btn-primary",
    //     loginBtnLabel: "Log Out",
    //     loginBtnPath: "/logout",
    //     isAuthenticated: true,
    // }

    // return (
    //     <div>
    //         <Navbar logout={logout} {...navbarProps}/>
    //         <div className="map-container">
    //             <MapGL
    //                 {...viewport}
    //                 width="100vw"
    //                 height="100vh"
    //                 mapStyle="mapbox://styles/mapbox/light-v9"
    //                 onViewportChange={nextViewport => setViewport(nextViewport)}
    //                 mapboxApiAccessToken={'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'}
    //                 // onClick={x => {
    //                 //     x.srcEvent.which === 1 && // check if left click
    //                 //         mapDispatch({
    //                 //             type: "ADD_MARKER",
    //                 //             payload: { marker: x.lngLat }
    //                 //         });
    //                 // }
    //                 // }
    //             >
    //             {/* <DrawControl />  */}
    //             {/* < Markers /> */}
    //             </MapGL>
    //         </div>
    
    //     </div>
    // )
}

export default RouteMap