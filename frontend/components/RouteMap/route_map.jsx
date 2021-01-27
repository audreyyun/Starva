import React from 'react'
import { Route } from 'react-router-dom'
import { RouteCreationMap }from './RouteCreationMap'
import MapGL from 'react-map-gl'
import Navbar from '../Navbar'
import logout from '../../actions/session_actions'

const RouteMap = () => {
    const [viewport, setViewport] = React.useState({
        latitude: 34.0746,
        longitude: -118.3296,
        zoom: 11
    });

    const navbarProps =
    {
        loginBtnClass: "nav-btn-primary",
        loginBtnLabel: "Log Out",
        loginBtnPath: "/logout",
        isAuthenticated: true,
    }

    return (
        <div>
            <Navbar logout={logout} {...navbarProps}/>
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/light-v9"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'}
            />
        </div>
    )
}

export default RouteMap