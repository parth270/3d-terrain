import React from "react";
import Card from "../../components/Card/Card";
import MainLottie from "../../components/main-lottie/main-lottie";
import Head from "next/head";
import Row from "../../components/Row/Row";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";
import Overlay from "../../components/Overlay/Overlay";
import Para from "../../components/Para/Para";

const OpenMenu = () => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Card>
        <Overlay>
          <Para size={24} lineHeight={22} align="center" top={181}>
            All Work (coming one day soon)
          </Para>
          <Para size={24} lineHeight={22} align="center" top={100}>
            Contact the studio
          </Para>
        </Overlay>
        <MainLottie />
        <Row>
          <Left
            title="HIGHWAY Magazine"
            para="A unique publication and some simple text. In search of a new editorial and business model for my writing, I stepped out of my comfort zone and took a critical look at the [music] publishing scene to conceive, co-create and produce a print and digital publication with international reach. The invested process blended editorial direction with a broader creative skillset and resulted in HIGHWAY: “a pocket-sized companion to the musicians."
          />
          <Right src="a1.jpg" align={100} />
        </Row>
      </Card>
    </>
  );
};

export default OpenMenu;