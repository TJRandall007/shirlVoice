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
    <p className="font-semibold">
      Professional Voiceover Services with Modern Studio Facilities.
    </p>

    <p>
      I operate a fully equipped, state-of-the-art digital recording studio
      featuring high-quality technology to deliver exceptional audio. With my
      professional setup and editing software, I can self-produce voiceover
      sessions in formats including MP3, WAV, and AIFF. My personal studio
      ensures a <strong className="font-semibold">fast turnaround</strong>,
      often providing same-day delivery to save you time and money on external
      studio hire.
    </p>

    <p>
      If required, I am conveniently located within easy reach of central London
      and available to travel to a studio of your choice. Alternatively, you can
      direct me remotely using platforms such as{" "}
      <strong className="font-semibold">Skype</strong>,{" "}
      <strong className="font-semibold">Source Connect</strong>, or{" "}
      <strong className="font-semibold">Cleanfeed</strong> for seamless
      collaboration.
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
    ["Sennheiser Microphone:", "Crystal-clear voice capture"],
    ["Yamaha 01V Digital Mixing Console:", "Professional-grade audio mixing"],
    ["Focusrite Scarlett 18i20:", "Superior audio interface"],
    ["Rokit8 Monitors:", "Precision sound monitoring"],
    ["Adobe Audition Software:", "Advanced editing capabilities"],
    ["iMac Computer:", "Reliable and efficient production"],
    ["Broadcast Quality Output:", "Ready for any platform"],
  ];

  const right = [
    [
      "Experienced Female Voiceover:",
      "British RP accent with versatility and charm",
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
        title="Remote Recording Studio | Same-Day Voiceover Delivery"
        description="Broadcast-quality home studio in Kent with same-day turnaround. Remote direction via Source Connect, Cleanfeed or Skype for voiceover clients worldwide."
      />
      <Lead title="Shirlie Randall — Studio" />
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
