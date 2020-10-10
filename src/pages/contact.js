import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact" />
    <Lead title="Contact" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Contact;
