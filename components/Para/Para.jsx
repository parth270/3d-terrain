import React from "react";
import { Reveal, Tween } from "react-gsap";
import classes from "./Para.module.css";

const Para = (props) => {
  return (
    <div
      className={`${classes.container} ${props.className}`}
      style={{
        fontSize: `${props.size}px`,
        marginTop: `${props?.top}px`,
        margin: `${props.margin}`,
        lineHeight: `${props.lineHeight}px`,
        textAlign: `${props.align ? props.align : ""}`,
        width: `${props.width ? props.width : "100%"}`,
      }}
      onClick={() => {
        if(props.link){
          props.onClick();
        }
      }}
    >
      <Reveal trigger={<p className={classes.para} />} repeat>
        <Tween from={{ y: "100%" }} duration={1.2} ease="Power4.easeOut">
          <p className={`${classes.para} ${props.link && classes.link}`}>
            {props.children}
          </p>
        </Tween>
      </Reveal>
    </div>
  );
};

export default Para;
