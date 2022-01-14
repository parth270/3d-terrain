import React from "react";
import classes from "./Heading.module.css";
import { Tween, Reveal } from "react-gsap";

const Heading = (props) => {
  return (
    <div
      className={classes.container}
      style={{
        fontSize: `${props.size}px`,
        marginTop: `${props?.top}px`,
        margin: `${props.margin}`,
        lineHeight: `${props.lineHeight}px`,
        textAlign: `${props.align ? props.align : ""}`,
        width: `${props.width ? props.width : "100%"}`,
      }}
    >
       
        <Reveal trigger={<h1 className={classes.h1} />} repeat>
          <Tween from={{ y: "100px" }} duration={1.2} ease="Power4.easeOut">
            <h1 className={classes.h1}>{props.title}</h1>
          </Tween>
        </Reveal>
      
    </div>
  );
};

export default Heading;
