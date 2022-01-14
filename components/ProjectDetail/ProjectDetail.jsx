import React from "react";
import classes from "./ProjectDetail.module.css";
import { Reveal, Tween } from "react-gsap";

const ProjectDetail = (props) => {
  return (
    <div className={classes["bg-container"]}>
      <div className={classes.container}>
        <Reveal trigger={<div />} repeat>
          <div className={classes.wrapper}>
            <Tween from={{ y: "100px" }} duration={1.2} ease="Power4.easeOut">
              <h1 className={classes.h1}>{props.title}:</h1>
            </Tween>
          </div>
        </Reveal>
        <Reveal trigger={<div />} repeat>
          <div className={classes.wrapper}>
            <Tween from={{ y: "100px" }} duration={1.2} ease="Power4.easeOut">
              <p className={classes.p}>{props.children}</p>
            </Tween>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ProjectDetail;
