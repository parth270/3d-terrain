import React from "react";
import classes from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <div className={classes['bg-container']}>
      <div className={classes.container}>
        <h1 className={classes.h1}>{props.title}:</h1>
        <p className={classes.p}>{props.children}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
