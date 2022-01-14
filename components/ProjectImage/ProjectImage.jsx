import React from "react";
import classes from "./ProjectImage.module.css";
import { Reveal,Tween } from "react-gsap";

const ProjectImage = (props) => {
  return (
    <div className={classes.container}>
      <Reveal trigger={<span />} repeat={true}>
        <span className={classes.trigger} />
        <Tween
          from={{
            scale: 1.2,
            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          to={{
            scale: 1,
            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            float:"right"
          }}
          duration={1}
        >
          <img className={classes.img} src={props.src} />
        </Tween>
      </Reveal>
    </div>
  );
};

export default ProjectImage;
