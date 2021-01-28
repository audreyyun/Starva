import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button"

const Navbar = (props) => { 
    return (
        <div className="navbar"> 
            <div className="nav-content">
                <div className="nav-left">
                    {!props.isAuthenticated &&
                    <Link to="/" ><img className="starva-logo" src={window.starvalogo} alt="" /></Link>
                    }
                    {props.isAuthenticated &&
                    <Link to="/dashboard" ><img className="starva-logo" src={window.starvalogo} alt="" /></Link>
                    }
                </div>

                {props.isAuthenticated &&
                <div className="dropdown">
                    <Link to="/" onClick={(event) => event.preventDefault()} className="navbar-routes drop-btn">Routes</Link>
                    <div className="dropdown-content">
                        <div>
                                <Link className="navbar-routes" to="/routes/new">Create Route</Link>
                        </div>
                        <div>
                                <Link className="navbar-routes" to="/routes">My Routes</Link>
                        </div>
                    </div>
                </div>
                }

                <div className="nav-right">
                    {!props.isAuthenticated && 
                        <Link to={props.loginBtnPath}>
                            <Button className={props.loginBtnClass} formType={props.loginBtnLabel} />
                        </Link>
                    }

                    
                    {/* {props.isAuthenticated && 
                        <Link className=".btn-secondary" to="/routes">
                            <Button className={props.loginBtnClass} formType="My Routes"></Button>
                        </Link> 
                    } */}

                    {props.isAuthenticated && 
                        <Link className="logout-btn" to="/">
                            <Button onClick={props.logout} className={props.loginBtnClass} formType="Log Out" />
                        </Link> 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;