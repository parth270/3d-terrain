import React from 'react';
import classes from './Para.module.css';

const Para =(props)=>{

    return(
        <p className={classes.para} style={{fontSize:`${props.size}px`,margin:`${props.top}px 0`,lineHeight:`${props.lineHeight}px`,textAlign:`${props.align?props.align:""}`}} >
            {props.children}
        </p>
    );
}

export default Para;