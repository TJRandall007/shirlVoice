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

// Audio
import RadioAudio from "../audio/radio.wav";

// Images
import StudioImage from "../images/studio.jpeg";

const Intro = () => (
  <StudioIntro className="m-auto lg:w-8/12 lg:text-lg">
    <p>
      Shirlie records from a professionally equipped, broadcast-quality home
      studio in Kent, within easy reach of London.
    </p>
    <p>
      Voice-over sessions can be recorded, edited and delivered in MP3, WAV or
      AIFF format, with same-day turnaround available when the project and
      schedule allow.
    </p>
    <p>
      Clients and producers can direct sessions remotely using Source-Connect,
      Cleanfeed, Zoom, Microsoft Teams or Google Meet. Shirlie is also available
      to travel to studios in London and elsewhere when required.
    </p>
  </StudioIntro>
);

const List = ({ title, items }) => (
  <div>
    <h2 className="pb-2 font-semibold">{title}</h2>
    <ul>
      {items.map(([f, s]) => (
        <Item key={f}>
          <span className="font-medium">{f}</span> {s}
        </Item>
      ))}
    </ul>
  </div>
);

const Lists = () => {
  const left = [
    ["Sennheiser MKH 416 P48 microphone:", "Broadcast-standard voice capture"],
    ["Genelec studio monitors:", "Accurate professional monitoring"],
    ["Adobe Audition:", "Professional recording and editing"],
    ["Acoustically treated room:", "Purpose-built and soundproof"],
    ["Broadcast-quality delivery:", "WAV, MP3 and AIFF formats"],
  ];

  const right = [
    [
      "Experienced Female Voiceover:",
      "British RP delivery with versatility and warmth",
    ],
    ["Creative & Flexible:", "Tailored voiceovers to match your vision"],
    ["Fast Turnaround:", "Same-day delivery available"],
    ["Friendly & Reliable:", "Professional service with a personal touch"],
  ];

  return (
    <StudioLists className="py-12 mx-auto lg:w-8/12 lg:text-lg">
      <div className="grid gap-8 text-center md:gap-4 lg:text-left md:grid-cols-2">
        <List title={"Studio Highlights"} items={left} />
        <List title={"Why Choose Me?"} items={right} />
      </div>
      <p className="pt-12 md:pb-32">
        Whether you need polished audio for commercials, corporate projects, or
        radio imaging, my studio is equipped to meet your needs with efficiency
        and professionalism.{" "}
        <strong className="italic font-semibold">
          Let’s bring your project to life!
        </strong>
      </p>
    </StudioLists>
  );
};

const Studio = ({ location }) => (
  <RecoilRoot>
    <Layout location={location}>
      <SEO
        title="Professional Voice-over Studio in Kent | Remote Sessions"
        description="Broadcast-quality voice-over studio in Kent with a Sennheiser MKH 416, acoustically treated room and remote direction via Source-Connect or Cleanfeed."
      />
      <Lead title="Professional Voice-over Studio in Kent" />
      <StudioContainer className="pt-8 lg:py-16">
        <ContainerDefault>
          <Intro />

          <Section
            title="Signal 1 Radio Promo"
            left={true}
            img={StudioImage}
            src={RadioAudio}
            dl="https://shirlierandall.b-cdn.net/radio.wav.zip"
            showreel={false}
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
  font-size: 16px;

  &:before {
    content: "•";
    color: #f7c0c4;
    padding-right: 3px;
  }
`;

const StudioLists = styled.div``;
