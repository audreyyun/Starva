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
                    <div>{this.props.route.id}</div>
                    <div>{this.props.route.route_name}</div>
                    <div>{this.props.route.distance}</div>
                    <div>{this.props.route.activity}</div>
                </Link>
            </li>
        )
    }
}

export default RouteIndexItem;