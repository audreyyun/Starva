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
                        <Link to="/dashboard" className="navbar-routes drop-btn">Dashboard</Link>
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

                    {props.isAuthenticated &&
                    <div className="dashboard-dropdown">
                        <Link to="/" onClick={(event) => event.preventDefault()} className="navbar-routes drop-btn">Training</Link>
                        <div className="dashboard-dropdown-content">
                            <div>
                                    <Link className="navbar-routes" to="/training">My Activities</Link>
                            </div>
                        </div>
                    </div>
                    }
                    {props.isAuthenticated &&
                    <div className="dashboard-dropdown">
                        <Link to="/" onClick={(event) => event.preventDefault()} className="navbar-routes drop-btn">Personal Links</Link>
                        <div className="dashboard-dropdown-content">
                            <div>
                                <a className="navbar-routes" href="https://www.linkedin.com/in/audrey-yun/" target="_blank">LinkedIn</a>
                            </div>
                            <div>
                                <a className="navbar-routes" href="https://github.com/audreyyun/" target="_blank">Github</a>
                            </div>
                            <div>
                                <a className="navbar-routes" href="http://audreyyun.github.io/" target="_blank">Portfolio</a>
                            </div>
                        </div>
                    </div>
                    }
                </div>


                <div className="nav-right">
                    {props.isAuthenticated &&
                        <Link className="logout-btn" to="/">
                            <Button onClick={props.logout} className={props.loginBtnClass} formType="Log Out" />
                        </Link>
                    }


                    <div className="nav-right-content">
                    {!props.isAuthenticated && 
                        <Link to={props.loginBtnPath}>
                            <Button className={props.loginBtnClass} formType={props.loginBtnLabel} />
                        </Link>
                    }

                    {props.isAuthenticated &&
                        <div className="upload-dropdown">
                            <Link to="/" onClick={(event) => event.preventDefault()} className="navbar-routes drop-btn">
                                <div className="upload-btn">
                                    <img className="upload-activity" src={window.upload2} alt="" />
                                </div>
                            </Link>
                            <div className="upload-dropdown-content">
                                <div>
                                    {/* <Link className="navbar-routes" to="/workouts/new">Add a Manual Entry</Link> */}
                                    <Link className="navbar-routes" to="/upload/manual">Add Manual Entry</Link>
                                </div>

                                <div>
                                    <Link className="navbar-routes" to="/routes/new">Create a Route</Link>
                                </div>
                
                            </div>
                        </div>
                    }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;