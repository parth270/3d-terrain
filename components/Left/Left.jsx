import React from "react";
import classes from "./Left.module.css";

const Left = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>{props.title}</h1>
      <p className={classes.p}>
        {props.para}
      </p>
      <a to={props.src? props.src:""} className={classes.a} >
      View project <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Left;
