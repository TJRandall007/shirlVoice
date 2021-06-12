import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import Clients from "../components/clients/clients";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <RecoilRoot>
        <SEO title="Home" />
        <Hero
          lead="Shirlie Randall"
          sub="Professional female voice over artist"
        />
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
