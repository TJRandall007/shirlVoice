import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { ContainerDefault } from "../components/container/container";

import { accent } from "../theme";

const Intro = () => (
  <StudioIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p>
      I have my own modern, professionally equipped, digital recording studio
      furnished with high quality technology. I also have my own editing
      software enabling me to record and self produce voice over sessions in
      many formats including; MP3, WAV and AIFF. Having a personal studio
      ensures a fast turnaround, usually delivering audio on the same day,
      saving you time and money on studio hire!
    </p>

    <p>
      If needed, I am within easy reach of central London and available to
      travel to a studio of your choice. Alternatively, you can direct me
      remotely using Skype, Source Connect, ipDTL or Cleanfeed.
    </p>
  </StudioIntro>
);

const List = ({ title, items }) => (
  <div className="w-1/2 float-left inline-block">
    <h2>{title}</h2>
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
);

const Lists = () => {
  const left = [
    "SE Electronics Z5600A Microphone",
    "Yamaha 01V Digital Mixing Console",
    "Focusrite Scarlett 2i2",
    "Rokit8 Monitors",
    "Adobe Audition Software",
    "Studio Acoustic Panels",
    "Soundproofing",
    "“Big Mac” computer",
    "Comfy Chair!",
  ];

  const right = [
    "Fast Turnaround",
    "Creative & Flexible",
    "Experienced Female Voiceover",
    "Skype, ISDN, Cleanfeed",
    "Source Connect, ipDTL",
    "Broadcast quality studio",
    "mp3, wav and aiff",
    "British RP",
    "Friendly & Reliable",
  ];

  return (
    <StudioLists className="lg:w-8/12 lg:text-lg mx-auto pt-12 fpp">
      <List title={"Studio Facilities"} items={left} />
      <List title={"Professional Voice over"} items={right} />
    </StudioLists>
  );
};

const Studio = ({ location }) => (
  <Layout location={location}>
    <SEO title="Studio" />
    <Lead title="Studio" />
    <StudioContainer className="py-16">
      <ContainerDefault>
        <Intro />
        <Lists />
      </ContainerDefault>
      <Banner
        text="A true professional voiceover - terrific fun and brilliant to work with"
        name="Ed Scott"
        company="Executive Producer, Universal Music UK"
      />
      <Contact />
    </StudioContainer>
  </Layout>
);

export default Studio;

const StudioContainer = styled.div`
  background: white;
`;

const StudioIntro = styled.div`
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
    padding-bottom: 1em;
  }
`;

const StudioLists = styled.div``;
