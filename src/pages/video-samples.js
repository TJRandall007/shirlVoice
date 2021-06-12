import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { Action } from "../components/action/action";
import { ContainerDefault } from "../components/container/container";
import Lead from "../components/lead/lead";
import Player from "../components/player/player";
import { SectionMiniTitle } from "../components/type/heading";

import { accent } from "../theme";

const VideoPlayer = ({ id, title }) => (
  <VideoWrapper>
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${id}`}
      title={`${title} video`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </VideoWrapper>
);

const VideoGroup = ({ id, title }) => (
  <div>
    <SectionMiniTitle text={title} />
    <VideoPlayer id={id} title={title} />
  </div>
);

const Intro = () => (
  <ShowreelsIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p>
      I’ve been the female voice over for many television commercials, online
      apps, explainer videos, International documentaries and corporate videos.
    </p>

    <p>
      If you have a project that requires a professional British female voice
      over artist, then contact me now!
    </p>
    <p>Check out some of my recent work in the video samples below:</p>
  </ShowreelsIntro>
);

const Showreels = ({ location }) => (
  <Layout location={location}>
    <SEO title="Video Samples" />
    <Lead title="Shirlie Randall — Video Samples" />
    <ShowreelsContainer className="py-16">
      <ContainerDefault>
        <Intro />

        <div className="pt-24 grid grid-cols-3 gap-8 pb-16">
          <VideoGroup id="brjGZcMftqg" title="Crosse and Blackwell" />
          <VideoGroup id="YDMUKlOQfb8" title="Abellio Greater Anglia" />
          <VideoGroup id="P0lDmfj9Xis" title="Lotto Go" />
          <VideoGroup id="bqpGmArQiL8" title="Nextdoor App" />
          <VideoGroup id="rHenWt5-x1U" title="Sky Vegas" />
          <VideoGroup id="gSGrPSTgAgk" title="Selfie Mic" />
          <VideoGroup id="-M4eEFR93SE" title="Equazen" />
          <VideoGroup id="nLZn1S8NEas" title="Kiddizoom Duo" />
          <VideoGroup id="Ghsi0O64gzM" title="Paddington 2" />
          <VideoGroup id="wd9O2YUmf4Q" title="Weight Watchers" />
        </div>
      </ContainerDefault>
      <Banner
        text="We love working with Shirlie as she’s an absolute pro - always goes the extra mile to make sure clients are happy and does the business every time."
        name="Chris Thorpe"
        company="On The Sly"
      />
      <Contact />
    </ShowreelsContainer>
  </Layout>
);

export default Showreels;

const ShowreelsContainer = styled.div`
  background: white;
`;

const ShowreelsIntro = styled.div`
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

const VideoWrapper = styled.div`
   {
    position: relative;
    margin-top: 10px;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
