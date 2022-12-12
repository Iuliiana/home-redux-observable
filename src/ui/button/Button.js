import React from 'react';
import classes from './Button.module.scss'

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={`${classes.buttonDefault} ${props.className}`} >
            {children}
        </button>
    );
}

export {Button};