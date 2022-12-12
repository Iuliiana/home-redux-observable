import React from 'react';
import classes from './Error.module.scss'

const Error = (props) => {
    return (
        <div className={`${classes.error} ${props.className || ''}`}>
            <h4>{props?.name}</h4>
            <p>{props?.message}</p>
        </div>
    );
}

export {Error};