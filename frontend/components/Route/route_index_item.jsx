import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="route-index-item">
                <Link to={`/routes/${this.props.route.id}`}>
                    <div className= "id">{this.props.route.id}</div>
                    <div className= "route-name">{this.props.route.route_name}</div>
                    <div className= "distance">{this.props.route.distance}</div>
                    <div className= "elevation">{this.props.route.elevation}</div>
                </Link>
            </li>
        )
    }
}

export default RouteIndexItem;