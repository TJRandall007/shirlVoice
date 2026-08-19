import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { ContainerDefault } from "../components/container/container";
import ContactActions from "../components/contact-actions/contact-actions";

import { accent } from "../theme";

const Intro = () => (
  <ContactIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p className="md:px-28">
      Tell Shirlie about your script, timings and intended usage. Email
      directly, copy the address into your preferred email service, or call to
      discuss your voice-over project.
    </p>
    <ContactActions />
  </ContactIntro>
);

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Contact Shirlie Randall | Voice-over Enquiries"
      description="Contact British female voice-over artist Shirlie Randall for availability, rates, custom auditions and studio recording enquiries."
    />
    <Lead title="Contact Shirlie Randall" />
    <ContactContainer className="pt-8 lg:py-16">
      <ContainerDefault>
        <Intro />
      </ContainerDefault>
    </ContactContainer>
  </Layout>
);

export default Contact;

const ContactContainer = styled.div`
  background: white;
`;

const ContactIntro = styled.div`
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
    text-align: center;
  }
`;
