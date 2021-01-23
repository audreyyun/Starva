import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button"

const Navbar = (props) => { 
    <div className="navbar"> 
        <div className="nav-left">
            <img className="starva-logo" src={window.starvalogo} alt="" />
        </div>

        <div className="nav-right">
            {!props.isAuthenticated && 
                <Link to="/login">
                    <Button className={props.loginBtnClass} formType={props.loginBtnLabel} />
                </Link>
            }
        </div>
    </div>
}

export default Navbar;