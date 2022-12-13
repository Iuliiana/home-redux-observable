import React from 'react';
import classes from './Error.module.scss'
import {Button} from "../button/Button";

const Error = ({children, ...props}) => {
    return (
        <div className={`${classes.error}`}>
            <h4>{props?.name}</h4>
            <p>{props?.message}</p>
            {(props.type) && <Button onClick={props.onClick} className={props.type}>{children}</Button>}
        </div>
    );
}

export {Error};