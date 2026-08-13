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
          title="British Female Voiceover Artist — TV, Radio & Corporate"
          description="Award-quality British female voiceover artist with 20+ years' experience. Currently the voice of Global's Smooth Radio Network. Clients include Disney, NHS & Sky."
        />
        <Hero
          lead="Shirlie Randall"
          sub="British Female Voiceover Artist — Warm, versatile & broadcast-ready for commercials, corporate, e-learning & radio"
        />
        <TrustLine className="text-center py-6 md:py-10">
          Currently the female imaging voice of Global's Smooth Radio Network
          · Trusted by Disney, NHS, Sky, Unilever &amp; more
        </TrustLine>
        <Clients />
        <Intro />
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
  color: ${type.default};
  font-weight: 500;
  font-size: 15px;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem;
`;
