import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import Clients from "../components/clients/clients";

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Hero
        lead="Shirlie Randall"
        sub="Professional female voice over artist"
      />
      <Intro />
      <Clients />
    </Layout>
  );
}
