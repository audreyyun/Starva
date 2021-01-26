import React from "react";
import ReactDOM from'react-dom';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXVkcmV5eXVuIiwiYSI6ImNra2U3a3JubzBicDYybmpuNWFsZ3I1bnQifQ.rUMZUiM4ybo_eqcm1wcYiQ';

class RouteMap extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            lng: 34.06351,
            lat: -118.33809,
            // zoom: 2
        };
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() { 
        //mapContainer ref specifies that map should be drawn to the HTML page in a new <div> element
        return ( 
            <div ref={el => this.mapContainer = el} className="mapContainer"/>
        )
    }
}

export default RouteMap;