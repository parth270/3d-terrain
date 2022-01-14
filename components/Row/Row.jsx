import React from "react";
import classes from "./Row.module.css";
import { Reveal } from "react-gsap";

const Row = (props) => {
  return (
    <Reveal trigger={<span />} repeat>
      <div
        style={{ margin: `${props.margin ? props.margin : "200px 0"}`,alignItems:`${props.center && "center"}` }}
        className={classes.container}
      >
        {props.children}
      </div>
    </Reveal>
  );
};

export default Row;
