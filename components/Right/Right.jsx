import React from 'react';
import classes from './Right.module.css';

const Right=(props)=>{

    return(
        <img src={props.src} style={{marginTop:`${props.align}px`}}  className={classes.img} />
    )
}

export default Right;