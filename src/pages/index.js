import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import Clients from "../components/clients/clients";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { type } from "../theme";

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <RecoilRoot>
        <SEO
          title="British Female Voice-over Artist — Commercials & Radio"
          description="Shirlie Randall is a warm, versatile British female voice-over artist with over 25 years’ experience in commercials, radio imaging, corporate narration and e-learning."
        />
        <Hero
          lead="Shirlie Randall"
          sub="British female voice-over artist for commercials, radio imaging, corporate narration and e-learning."
          supporting="Warm, versatile and broadcast-ready, with over 25 years’ experience."
        />
        <TrustLine className="text-center">
          Female imaging voice for Global’s Smooth Radio Network · Trusted by
          Disney, Sky, NHS, Unilever and leading brands worldwide
        </TrustLine>
        <Intro />
        <Clients />
        <Banner
          text="Always friendly, happy to help and a joy to work with"
          name="Jonathan Young"
          company="Producer, Capital FM"
        />
        <Contact />
      </RecoilRoot>
    </Layout>
  );
}

const TrustLine = styled.p`
  background: #f7c0c4;
  color: ${type.default};
  font-weight: 500;
  font-size: 15px;
  margin: 0;
  padding: 0.85rem 1rem;
  position: relative;
  z-index: 5;
`;
