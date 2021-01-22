import React from 'react';
// import * as Button from './Button.css';

const Button = (props) => { 
    return (
        <button 
            className={props.className} 
            onClick={props.onClick} 
            onSubmit={props.handleSubmit}
        >{props.formType}</button>
    )
}

export default Button;