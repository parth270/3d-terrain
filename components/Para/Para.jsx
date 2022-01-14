import React from 'react';
import classes from './Para.module.css';

const Para =(props)=>{

    return(
        <p className={classes.para} style={{fontSize:`${props.size}px`,marginTop:`${props?.top}px`,margin:`${props.margin}`,lineHeight:`${props.lineHeight}px`,textAlign:`${props.align?props.align:""}`,width:`${props.width?props.width:"100%"}`}} >
            {props.children}
        </p>
    );
}

export default Para;