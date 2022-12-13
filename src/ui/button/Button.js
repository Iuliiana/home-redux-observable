import React from 'react';
import classes from './Button.module.scss'

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={`${classes.buttonDefault} ${classes[props.className]}`}>
            {children}
        </button>
    );
}

export {Button};