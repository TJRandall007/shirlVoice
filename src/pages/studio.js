import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";

const Studio = ({ location }) => (
  <Layout location={location}>
    <SEO title="Studio" />
    <Lead title="Studio" />
    <Banner
      text="A true professional voiceover - terrific fun and brilliant to work with"
      name="Ed Scott"
      company="Executive Producer, Universal Music UK"
    />
    <Contact />
  </Layout>
);

export default Studio;
