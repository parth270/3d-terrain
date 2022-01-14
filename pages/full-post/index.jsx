import React from "react";
import Head from "next/head";
import Card from "../../components/Card/Card";
import MainLottie from "../../components/main-lottie/main-lottie";
import Heading from "../../components/Heading/Heading";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import Para from "../../components/Para/Para";
import Row from "../../components/Row/Row";
import Menu from "../../components/MenuIcon/Menu";

const FullPost = () => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Card>
        <Row margin="0">
          <MainLottie />
          <Menu />
        </Row>
        <Heading title="HIGHWAY Magazine" top={50}  />
        <ProjectImage src="a1.jpg" />
        <ProjectDetail title="Project Details">
          Client: Self-initiated.
          <br />
          Duration: Ongoing.
          <br />
          Deliverable: A print and digital publication and event series.
          <br />
          Team size: Variable.
          <br />
          Work done: Research, Writing, Editorial Direction & Strategy, UX
          Design, Branding, Project Management, Production.
          <br />
          Relevant Website: www.highwaymagazine.info (almost rebuilt).
          <br />
        </ProjectDetail>
        <ProjectDetail title="Overview">
          In search of a new editorial and business model for my writing, I
          stepped out of my comfort zone and took a critical look at the [music]
          publishing scene to conceive, co-create and produce a print and
          digital publication with international reach. The invested process
          blended editorial direction with a broader creative skillset and
          resulted in HIGHWAY: “a pocket-sized companion to the musicians,
          artists, writers, thinkers, documentarians, storytellers and objects
          we encounter.”
        </ProjectDetail>
        <ProjectImage src="a1.jpg" />
        <ProjectDetail title="Approach">
          In search of a new editorial and business model for my writing, I
          stepped out of my comfort zone and took a critical look at the [music]
          publishing scene to conceive, co-create and produce a print and
          digital publication with international reach. The invested process
          blended editorial direction with a broader creative skillset and
          resulted in HIGHWAY: “a pocket-sized companion to the musicians,
          artists, writers, thinkers, documentarians, storytellers and objects
          we encounter.” With its original editorial stance, writing, design and
          distribution network, the publication landed on the international
          scene alongside the established voices of the day and received press
          from a variety of outlets.
        </ProjectDetail>
        <ProjectDetail title="Design">
          In search of a new editorial and business model for my writing, I
          stepped out of my comfort zone and took a critical look at the [music]
          publishing scene to conceive, co-create and produce a print and
          digital publication with international reach. The invested process
          blended editorial direction with a broader creative skillset and
          resulted in HIGHWAY: “a pocket-sized companion to the musicians,
          artists, writers, thinkers, documentarians, storytellers and objects
          we encounter.” With its original editorial stance, writing.
        </ProjectDetail>
        <ProjectImage src="a1.jpg" />
        <ProjectDetail title="Results">
          In search of a new editorial and business model for my writing, I
          stepped out of my comfort zone and took a critical look at the [music]
          publishing scene to conceive, co-create and produce a print and
          digital publication with international reach. The invested process
          blended editorial direction with a broader creative skillset and
          resulted in HIGHWAY: “a pocket-sized companion to the musicians,
          artists, writers, thinkers, documentarians, storytellers and objects
          we encounter.” With its original editorial stance, writing.
        </ProjectDetail>
        <hr style={{ width: "100%", marginTop: 80 }} />
        <Para size={10} lineHeight={18} align="center">
          All content on this site is originally produced by además studio and
          is held in copyright.
        </Para>
      </Card>
    </>
  );
};

export default FullPost;
