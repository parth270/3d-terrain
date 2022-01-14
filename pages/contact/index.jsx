import Head from "next/head";
import React from "react";
import Card from "../../components/Card/Card";
import MainLottie from "../../components/main-lottie/main-lottie";
import Heading from "../../components/Heading/Heading";
import Para from "../../components/Para/Para";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";

const Contact = () => {


    const nameHandler=(e)=>{
        console.log(e.target.value);
    }

    const subjectHandler=(e)=>{
        console.log(e.target.value);
    }

    const emailHandler=(e)=>{
        console.log(e.target.value);
    }

    const messageHandler=(e)=>{
        console.log(e.target.value);
    }

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Card>
        <MainLottie  className="contact-lottie" />
        <Heading title="Contact" top={100} />
        <Para size={14} lineHeight={24} width="52%" margin="40px 0"  >
          Feel free to send us a message. Like we said, we’re open to
          collaboration and listening to new projects. Another few lines of text
          about the work we do and if you are this type of client, we should
          talk if you want to create something that is unique, different and
          separates you from the pack.
        </Para>
        <Form>
            <Input name="Name" type="text" change={nameHandler} />
            <Input name="Subject" type="text" change={subjectHandler} />
            <Input name="Your email address" type="email" change={emailHandler} />
            <Input name="Message" type="textarea" change={messageHandler} />
        </Form>
        <hr style={{width:"100%"}}  />
        <Para size={10} lineHeight={18}  align="center" >
        All content on this site is originally produced by además studio and is held in copyright.
        </Para>
      </Card>
    </>
  );
};

export default Contact;
