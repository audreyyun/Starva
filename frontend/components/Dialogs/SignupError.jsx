import React from 'react';

export const SignupError = (props) => {
    return (
        <div className="session-signup-error">
            {props.message}
        </div>
    )
}