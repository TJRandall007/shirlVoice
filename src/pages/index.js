import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Hero
        lead="Shirlie Randall"
        sub="Professional female voice over artist"
      />
      <Intro />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
}
