import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { ContainerDefault } from "../components/container/container";

import { Section } from "./audio-samples";

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
      If needed, I’m within easy reach of central London and available to travel
      to a studio of your choice. Alternatively, you can direct me remotely
      using Skype, Source Connect, ipDTL or Cleanfeed.
    </p>
  </StudioIntro>
);

const List = ({ title, items }) => (
  <div>
    <h2 className="font-semibold pb-2">{title}</h2>
    <ul>
      {items.map((i) => (
        <Item key={i}>{i}</Item>
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
    "Broadcast quality studio",
    "iMac Computer",
  ];

  const right = [
    "Fast Turnaround",
    "Creative & Flexible",
    "Experienced Female Voiceover",
    "Skype, Cleanfeed",
    "Source Connect, ipDTL",
    "British RP",
    "Friendly & Reliable",
  ];

  return (
    <StudioLists className="lg:w-8/12 lg:text-lg mx-auto">
      <div className="grid gap-8 py-12 md:pb-32 text-center md:gap-4 md:text-left md:grid-cols-2">
        <List title={"Studio Facilities"} items={left} />
        <List title={"Professional Voice over"} items={right} />
      </div>
    </StudioLists>
  );
};

const Studio = ({ location }) => (
  <RecoilRoot>
    <Layout location={location}>
      <SEO title="Studio" />
      <Lead title="Shirlie Randall — Studio" />
      <StudioContainer className="pt-8 lg:py-16">
        <ContainerDefault>
          <Intro />

          <Section
            title="Radio Promo"
            left={true}
            img="https://storage.googleapis.com/shirl-voice/images/players/Shirlie-Randall-Studio.jpg"
            src="https://storage.googleapis.com/shirl-voice/audio/Shirlie_Randall-Signal_1_Covid_Community_Promo.wav"
          >
            <p>
              If you require a professional female voiceover who produces
              quality audio then look no further. Here's an example of a Radio
              Promo that has been recorded from my home studio.
            </p>
          </Section>
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
  </RecoilRoot>
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

const Item = styled.li`
  &:before {
    content: "•";
    color: #f7c0c4;
    padding-right: 3px;
  }
`;

const StudioLists = styled.div``;
