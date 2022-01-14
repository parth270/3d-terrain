import React from "react";
import classes from "./Left.module.css";
import { useRouter } from "next/router";
import { Reveal, Tween } from "react-gsap";

const Left = (props) => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Tween from={{ y: "100%" }} duration={1.2} ease="Power4.easeOut">
          <h1 className={classes.h1}>{props.title}</h1>
        </Tween>
      </div>
      <div className={classes.wrapper}>
        <Tween from={{ y: "100%" }} duration={1.2} ease="Power4.easeOut">
          <p className={classes.p}>{props.para}</p>
        </Tween>
      </div>
      <div className={classes.wrapper}>
        <Tween from={{ y: "100%" }} duration={1.2} ease="Power4.easeOut">
          <span
            className={classes.a}
            onClick={() => {
              router.push(`${props.src}`);
            }}
          >
            View project <i className="fas fa-arrow-right" />
          </span>
        </Tween>
      </div>
    </div>
  );
};

export default Left;
