import React from 'react'
import { Route } from 'react-router-dom'
import { RouteCreationMap }from './RouteCreationMap'
import MapGL from 'react-map-gl'

const RouteMap = () => {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'}
        />
    )
}

export default RouteMap