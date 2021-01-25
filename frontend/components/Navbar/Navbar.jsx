import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button"

const Navbar = (props) => { 
    return (
        <div className="navbar"> 
            <div className="nav-content">
                <div className="nav-left">
                    <Link to="/" ><img className="starva-logo" src={window.starvalogo} alt="" /></Link>
                </div>

                <div className="nav-right">
                    {!props.isAuthenticated && 
                        <Link to={props.loginBtnPath}>
                            <Button className={props.loginBtnClass} formType={props.loginBtnLabel} />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;