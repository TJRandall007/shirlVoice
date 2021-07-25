import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { ContainerDefault } from "../components/container/container";
import Lead from "../components/lead/lead";
import { SectionTitle, SectionMiniTitle } from "../components/type/heading";

import { accent } from "../theme";

const VideoPlayer = ({ id, title }) => (
  <VideoWrapper>
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${id}`}
      title={`${title} video`}
      frameBorder="0"
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
        <div className="pt-24">
          <SectionTitle text="TV Advertising" classes="pb-10" />

          <div className=" grid grid-cols-3 gap-8 pb-16">
            <VideoGroup id="brjGZcMftqg" title="Crosse and Blackwell" />
            <VideoGroup id="gSGrPSTgAgk" title="Selfie Mic" />
            <VideoGroup id="P0lDmfj9Xis" title="Lotto Go" />
            <VideoGroup id="YDMUKlOQfb8" title="Abellio Greater Anglia" />
            <VideoGroup id="rHenWt5-x1U" title="Sky Vegas" />
            <VideoGroup id="-M4eEFR93SE" title="Equazen" />
          </div>
        </div>

        <div>
          <SectionTitle text="Online Videos" classes="pt-10 pb-10" />
          <div className="grid grid-cols-3 gap-8 pb-16">
            <VideoGroup id="wd9O2YUmf4Q" title="Weight Watchers" />
            <VideoGroup id="bqpGmArQiL8" title="Nextdoor App" />
            <VideoGroup id="A0uVkz-jJN4" title="My Morrisons" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 pb-16">
          <div>
            <SectionTitle text="Continuity" classes="pt-10 pb-10" />
            <VideoGroup id="Ghsi0O64gzM" title="Paddington 2" />
          </div>
          <div>
            <SectionTitle text="Singing Advert" classes="pt-10 pb-10" />
            <VideoGroup id="nLZn1S8NEas" title="Kiddizoom Duo" />
          </div>
          <div>
            <SectionTitle text="Infomercial" classes="pt-10 pb-10" />
            <VideoGroup id="-2lcjZsz7Zs" title="KCC 30mph" />
          </div>
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
