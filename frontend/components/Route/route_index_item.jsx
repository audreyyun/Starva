import React from 'react';
import Navbar from '../Navbar';
import Button from '../Button';


class RouteIndexItem extends React.Component {

    render() {

        const navbarProps =
        {
            loginBtnClass: "nav-btn-secondary",
            loginBtnLabel: "Log Out",
            loginBtnPath: "/logout",
            isAuthenticated: true,
        }

        return (
            <div>
                <Navbar logout={this.props.logout} {...navbarProps} />
                <div className="splash-border"></div>
                <div className="route-name">{this.props.route.route_name}</div>
                <div className="distance">{this.props.route.distance}</div>
                <div className="elevation">{this.props.route.elevation}</div>
            </div>
        )
    }
}

export default RouteIndexItem;

// class RouteIndexItem extends React.Component {
//     constructor(props) {
//         debugger
//         super(props);
//     }
    
//     render() {
//         debugger
//         return (
//             // <li className="route-index-item" key={this.props.route.id}>
//                 <Link to={`/routes/${this.props.route.id}`}>
//                     <div className= "route-name">{this.props.route.route_name}</div>
//                     <div className= "distance">{this.props.route.distance}</div>
//                     <div className= "elevation">{this.props.route.elevation}</div>
//                 </Link>
//             // </li>
//         )
//     }
// }

// export default RouteIndexItem;