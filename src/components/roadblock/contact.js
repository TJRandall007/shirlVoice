import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { SectionTitle } from "../type/heading";

import { accent, type } from "../../theme";

export const Contact = () => (
  <ContactContainer className="lg:py-32">
    <ContainerDefault>
      <SectionTitle text="Get in touch" />
      <Copy className="lg:text-4xl">
        07825 248 481 <Divider>/</Divider> hello<Mask>@</Mask>shirlvoice
        <Mask>.com</Mask>
      </Copy>
    </ContainerDefault>
  </ContactContainer>
);

const ContactContainer = styled.div`
  background: white;
`;

const Copy = styled.p`
  color: ${type.default};
  text-align: center;
  padding-top: 0.5em;
`;

const Divider = styled.span`
  color: ${accent};
`;

const Mask = styled.code`
  font-family: inherit;
`;
