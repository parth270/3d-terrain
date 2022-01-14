import React from "react";
import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <h1
      className={classes.h1}
      style={{
        fontSize: `${props.size}px`,
        marginTop: `${props?.top}px`,
        margin: `${props.margin}`,
        lineHeight: `${props.lineHeight}px`,
        textAlign: `${props.align ? props.align : ""}`,
        width: `${props.width ? props.width : "100%"}`,
      }}
    >
      {props.title}
    </h1>
  );
};

export default Heading;
