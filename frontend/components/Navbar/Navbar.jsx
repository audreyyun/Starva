import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button"

const Navbar = (props) => { 
    return (
        <div className="navbar "> 
            <div className="nav-content">
                <div className="nav-left">
                    {!props.isAuthenticated &&
                    <Link to="/" ><img className="starva-logo" src={window.starvalogo} alt="" /></Link>
                    }
                    {props.isAuthenticated &&
                    <Link to="/dashboard" ><img className="starva-logo" src={window.starvalogo} alt="" /></Link>
                    }
                

                    {props.isAuthenticated &&
                    <div className="dashboard-dropdown">
                        <Link to="/" onClick={(event) => event.preventDefault()} className="navbar-routes drop-btn">Dashboard</Link>
                        <div className="dashboard-dropdown-content">
                            {/* <div>
                                <Link className="navbar-routes" to="/routes/new">Create a Route</Link>
                            </div> */}
                            <div>
                                    <Link className="navbar-routes" to="/routes">My Routes</Link>
                            </div>
                        </div>
                    </div>
                    }
                </div>

                <div className="nav-right">
                    <div className="nav-right-content">
                    {!props.isAuthenticated && 
                        <Link to={props.loginBtnPath}>
                            <Button className={props.loginBtnClass} formType={props.loginBtnLabel} />
                        </Link>
                    }
                    {/* <Link to="/upload/manual" ><img className="upload-activity" src={window.upload} alt="" /></Link> */}

                        <div className="upload-dropdown">
                            <Link to="/" onClick={(event) => event.preventDefault()} className="navbar-routes drop-btn">
                                {/* <img className="upload-activity" src={window.upload} alt="" /> */}
                                <div className="upload-btn">
                                    <img className="upload-activity" src={window.upload2} alt="" />
                                </div>
                                {/* <div className="upload-activity"></div> */}
                            </Link>
                            <div className="dashboard-dropdown-content">
                                <div>
                                    <Link className="navbar-routes" to="/routes/new">Create a Route</Link>
                                </div>
                                {/* <div>
                                    <Link className="navbar-routes" to="/routes">My Routes</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    
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