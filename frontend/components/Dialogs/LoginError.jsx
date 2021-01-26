import React from 'react';

export const LoginError = (props) => { 
    return (
        <div className="session-login-error">
            {props.message}
        </div>
    )
}