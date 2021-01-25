import React from 'react';
import { Link } from 'react-router-dom';


class DashboardIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }

    render() { 
        return (
            <div>
                <h1>Welcome to Dashboard page</h1>
                <Link className="session-btn" to="/logout"><button className="logout">Log Out</button></Link>
            </div>
        )

    }
}

export default DashboardIndex