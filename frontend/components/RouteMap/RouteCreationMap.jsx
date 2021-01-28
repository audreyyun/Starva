import React, {useRef} from "react";
import ReactDOM from 'react-dom';
import MapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import Directions from 'react-map-gl-directions';


export const RouteCreationMap = ({ MAPBOX_TOKEN}) => {
    const mapRef = useRef();

    const [viewport, setViewport] = React.useState({
        latitude: 34.0746,
        longitude: -118.3296,
        zoom: 11
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            ref={mapRef}
        >
            <Directions mapRef={mapRef} mapboxApiAccessToken={MAPBOX_TOKEN} profile="mapbox/cycling"/>
        </MapGL>
    );
}

RouteCreationMap.defaultProps = {
    MAPBOX_TOKEN: 'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'
}
