import React from "react";
import ReactDOM from 'react-dom';
import MapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// import MapboxDraw from "@mapbox/mapbox-gl-draw";

// const draw = new MapboxDraw({
//     // Instead of showing all the draw tools, show only the line string and delete tools
//     displayControlsDefault: false,
//     controls: {
//         line_string: true,
//         trash: true
//     },
//     styles: [
//         // Set the line style for the user-input coordinates
//         {
//             "id": "gl-draw-line",
//             "type": "line",
//             "filter": ["all", ["==", "$type", "LineString"],
//                 ["!=", "mode", "static"]
//             ],
//             "layout": {
//                 "line-cap": "round",
//                 "line-join": "round"
//             },
//             "paint": {
//                 "line-color": "#438EE4",
//                 "line-dasharray": [0.2, 2],
//                 "line-width": 4,
//                 "line-opacity": 0.7
//             }
//         },
//         // Style the vertex point halos
//         {
//             "id": "gl-draw-polygon-and-line-vertex-halo-active",
//             "type": "circle",
//             "filter": ["all", ["==", "meta", "vertex"],
//                 ["==", "$type", "Point"],
//                 ["!=", "mode", "static"]
//             ],
//             "paint": {
//                 "circle-radius": 12,
//                 "circle-color": "#FFF"
//             }
//         },
//         // Style the vertex points
//         {
//             "id": "gl-draw-polygon-and-line-vertex-active",
//             "type": "circle",
//             "filter": ["all", ["==", "meta", "vertex"],
//                 ["==", "$type", "Point"],
//                 ["!=", "mode", "static"]
//             ],
//             "paint": {
//                 "circle-radius": 8,
//                 "circle-color": "#438EE4",
//             }
//         },
//     ]
// });

// // Add the draw tool to the map
// map.addControl(draw);


export const RouteCreationMap = ({ MAPBOX_TOKEN}) => {

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
        />
    );
}

RouteCreationMap.defaultProps = {
    MAPBOX_TOKEN: 'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ'
}