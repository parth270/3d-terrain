import React from 'react';
import classes from './Row.module.css';

const Row =(props)=>{

    return(
        <div className={classes.container}>
            {props.children}
        </div>
    );
}

export default Row;