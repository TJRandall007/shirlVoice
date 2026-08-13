import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Widget } from "@typeform/embed-react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { ContainerDefault } from "../components/container/container";

import { accent } from "../theme";

const Form = () => {
  return (
    <div className="pb-12">
      <div
        className="typeform-widget"
        data-url="https://form.typeform.com/to/GGN6imCm?typeform-medium=embed-snippet"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </div>
  );
};

const Intro = () => (
  <ContactIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p className="md:px-28">
      If you need a professional voice over artist for your project then look no
      further. Call or email me directly, message me or use the contact form
      below.
    </p>

    <p className="pt-8 text-xl md:text-2xl md:pt-12">
      <span className="px-2 font-semibold block md:inline">
        +44 (0) 7825 248481
      </span>
      <span className="italic select-none">or</span>
      <span className="px-2 font-semibold">
        hello<code>@</code>shirlierandall.com
      </span>
    </p>
  </ContactIntro>
);

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Contact | Book a British Female Voiceover Artist"
      description="Get a fast, no-obligation quote from British voiceover artist Shirlie Randall. Call, email or use the contact form — same-day turnaround available."
    />
    <Lead title="Shirlie Randall — Contact" />
    <ContactContainer className="pt-8 lg:py-16">
      <ContainerDefault>
        <Intro />
        <div className="w-full h-64" style={{ height: "500px" }}>
          <Widget
            id="GGN6imCm"
            style={{ width: "100%", height: "100%" }}
            className="my-form"
          />
        </div>
      </ContainerDefault>
    </ContactContainer>
  </Layout>
);

export default Contact;

const ContactContainer = styled.div`
  background: white;
`;

const ContactIntro = styled.div`
  &:after {
    content: "";
    width: 42px;
    height: 4px;
    background: ${accent};
    position: absolute;
    left: 50%;
    margin-left: -21px;
  }

  p {
    text-align: center;
  }
`;
