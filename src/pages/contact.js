import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { ContainerDefault } from "../components/container/container";

import { accent } from "../theme";

const Form = () => {
  const form = function () {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  };

  useEffect(() => {
    console.log("USE EFFECT");
    form();
  });

  return (
    <div className="pb-12">
      <div
        className="typeform-widget"
        data-url="https://form.typeform.com/to/GGN6imCm?typeform-medium=embed-snippet"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </div>
  );
};

const Intro = () => (
  <ContactIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p className="px-28">
      If you need a professional voice over artist for your project then look no
      further. Call or email me directly, message me or use the contact form
      below.
    </p>

    <p className="py-12 text-2xl">
      <span className="px-2 font-semibold">07825 248481</span>
      <span className="italic select-none">or</span>
      <span className="px-2 font-semibold">
        hello<code>@</code>shirlierandall.com
      </span>
    </p>
  </ContactIntro>
);

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact" />
    <Lead title="Shirlie Randall — Contact" />
    <ContactContainer className="py-16">
      <ContainerDefault>
        <Intro />
        <Form />
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
    padding-bottom: 1em;
  }
`;
