import React from "react";
import ReactDOM from 'react-dom';
import ReactMapGL from 'react-map-gl';

export const RouteCreationMap = (props) => {

    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={props.mapboxApiAccessToken}
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
        />
    );
}

RouteCreationMap.defaultProps = {
    mapboxApiAccessToken: 'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'
}