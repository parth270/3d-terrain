import React from "react";
import Para from "../Para/Para";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
};

export default Overlay;