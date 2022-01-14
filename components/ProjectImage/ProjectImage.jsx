import React from 'react';
import classes from './ProjectImage.module.css';

const ProjectImage=(props)=>{

    return(
        <div className={classes.container} >
            <img className={classes.img} src={props.src} />
        </div>
    );
}

export default ProjectImage;