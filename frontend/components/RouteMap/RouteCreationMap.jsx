import React, {useRef} from "react";
// import MapGL from 'react-map-gl/dist/es6/index.js'
// import mapboxgl from '!mapbox-gl';
// import Directions from 'react-map-gl-directions';


export const RouteCreationMap = () => {
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
            mapboxApiAccessToken={window.mapboxApiAccessToken}
            ref={mapRef}
        >
            <Directions mapRef={mapRef} mapboxApiAccessToken={window.mapboxApiAccessToken} profile="mapbox/cycling"/>
        </MapGL>
    );
}