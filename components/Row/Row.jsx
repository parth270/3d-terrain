import React from "react";
import classes from "./Row.module.css";
import { Reveal } from "react-gsap";

const Row = (props) => {
  return (
    <Reveal trigger={<span />} repeat>
      <div className={classes.container}>{props.children}</div>
    </Reveal>
  );
};

export default Row;