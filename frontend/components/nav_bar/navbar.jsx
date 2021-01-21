import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => { 
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick={()=> logout()}> Log Out </button>
        </div>
    ) : (
        <div> 
            <Link className='btn' to='/signup'>Sign Up</Link>
            <Link className='btn' to='/login'>Log In</Link>
        </div>
    )

    return (
        <header className='nav-bar'>
            <h1 className="logo">Strava</h1>
                <div className="logo">
                    {display}
                </div>
        </header>
    )
}

export default Navbar;