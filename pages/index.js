import Lottie from "../components/main-lottie/main-lottie";
import Card from "../components/Card/Card";
import Para from "../components/Para/Para";
import Row from "../components/Row/Row";
import Left from "../components/Left/Left";
import Right from "../components/Right/Right";
import Head from "next/head";

// Landing Page

export default function Home() {

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Card>
        <Lottie />
        <Para size={16} top={30} lineHeight={30} >
          además is an open, collaborative, editorial studio exploring creative
          direction and publishing in print, digital and audio. We work with
          humans on artistic, institutional and commercial projects and so far,
          the new studio has done work for The US State Department and The
          Hirshhorn Museum in addition to working with private clients.
        </Para>
        <Para size={16} top={30} lineHeight={30} >
          The studio also publishes in-house, producing HIGHWAY Magazine— an
          internationally-distributed music and sound culture publication which
          has been recognized or featured by The National Endowment for the
          Arts, MoMA PS1 and The Carpenter Center for the Visual Arts for its
          original editorial perspective and design.
        </Para>
        <Para size={16} top={30} lineHeight={30} >
          Our core services are: discovery & creative approach, prototyping and
          the delivery of original print and digital assets to stand apart.
        </Para>
        <Para size={16} top={30} lineHeight={30} >
          Take a look at some of our projects. More to come soon.
        </Para>
        <Row>
          <Left
            title="HIGHWAY Magazine"
            para="A unique publication and some simple text. In search of a new editorial and business model for my writing, I stepped out of my comfort zone and took a critical look at the [music] publishing scene to conceive, co-create and produce a print and digital publication with international reach. The invested process blended editorial direction with a broader creative skillset and resulted in HIGHWAY: “a pocket-sized companion to the musicians."
          />
          <Right src="a1.jpg" align={100}  />
        </Row>
        <Row>
          <Left
            title="Publication for Art in Embassies, US State Department"
            para="A unique publication and some simple tex.t In search of a new editorial and business model for my writing, I stepped out of my comfort zone and took a critical look at the [music] publishing scene to conceive, co-create and produce a print and digital publication with international reach. The invested process blended editorial direction with a broader creative skillset and resulted in HIGHWAY: “a pocket-sized companion to the musicians, artists, writers, thinkers, documentarians, storytellers and objects we encounter.”"
          />
          <Right src="a1.jpg" align={180} />
        </Row>
        <hr style={{width:"100%"}}  />
        <Para size={10} lineHeight={18}  align="center" >
        All content on this site is originally produced by además studio and is held in copyright.
        </Para>
      </Card>
    </>
  );
}
