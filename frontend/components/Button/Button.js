import React from 'react';
// import * as Button from './Button.css';

const Button = (props) => { 
    return (
        <button className={props.className} onClick={props.handleSubmit}>{props.formType}</button>
    )
}

export default Button;