import React from "react";
import ReactDOM from 'react-dom';
import MapGL from 'react-map-gl';

export const RouteCreationMap = ({ MAPBOX_TOKEN}) => {

    const [viewport, setViewport] = React.useState({
        latitude: 34.0746,
        longitude: -118.3296,
        zoom: 8
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
}

RouteCreationMap.defaultProps = {
    MAPBOX_TOKEN: 'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'
}