import React from "react";
import Card from "../../../components/Card/Card";
import MainLottie from "../../../components/main-lottie/main-lottie";
import Head from "next/head";
import Heading from "../../../components/Heading/Heading";
import Para from "../../../components/Para/Para";

const Thankyou = () => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Card>
        <MainLottie className="thankyou-lottie" />
        <Heading title="Thank you. " top="100" width="50%" transition={true}  />
        <Para size={14} lineHeight={24}  top={30} width="65%" >
        Thank you for your message. We will aim to respond in a timely manner, ideally within 3 business days. Thank you again. 
        </Para>
      </Card>
    </>
  );
};

export default Thankyou;
