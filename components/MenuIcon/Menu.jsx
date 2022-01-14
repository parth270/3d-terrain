import React from "react";
import classes from "./Menu.module.css";
import Head from 'next/head'

const Menu = () => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className={classes.container}>
        <i className="fas fa-bars" />
      </div>
    </>
  );
};

export default Menu;
