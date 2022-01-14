import React from "react";
import classes from "./main-lottie.module.css";
import Head from "next/head";

const MainLottie = (props) => {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <lottie-player
        src="https://assets4.lottiefiles.com/datafiles/uIqOUNaohkgyRYQ/data.json"
        background="transparent"
        speed="1"
        loop={true}
        class={`${classes.animate} ${props.className}`}
        autoplay
      />
    </>
  );
};

export default MainLottie;
