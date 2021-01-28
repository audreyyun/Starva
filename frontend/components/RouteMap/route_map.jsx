import React from 'react'
import { Route } from 'react-router-dom'
import {RouteCreationMap} from './RouteCreationMap'
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
   
}

export default RouteMap