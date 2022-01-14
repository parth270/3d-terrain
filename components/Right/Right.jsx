import React from "react";
import classes from "./Right.module.css";
import { Reveal, Tween } from "react-gsap";
import Left from "../Left/Left";

const Right = (props) => {
  return (
    <div className={classes.container}>
        <Tween
          from={{
            scale: 1.2,
            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          to={{
            scale: 1,
            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            float: "right",
          }}
          duration={1}
        >
          <img
            src={props.src}
            style={{ marginTop: `${props.align}px` }}
            className={classes.img}
          />
        </Tween>
    </div>
  );
};

export default Right;
