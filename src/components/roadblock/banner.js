import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";

import { accent } from "../../theme";

export const Banner = ({ text, name, company }) => (
  <BannerContainer className="lg:pt-32 lg:pb-24">
    <ContainerDefault>
      <BannerContainerInner>
        <BannerQuote className="lg:text-5xl lg:px-32">
          <BannerMark>"</BannerMark>
          <BannerText>{text}</BannerText>
          <BannerMark>"</BannerMark>
        </BannerQuote>
        <BannerFooter className="lg:px-64 pt-8">
          –{" "}
          <BannerCite>
            <strong>{name}</strong>, {company}
          </BannerCite>
        </BannerFooter>
      </BannerContainerInner>
    </ContainerDefault>
  </BannerContainer>
);

const BannerContainer = styled.div`
  background-color: ${accent};
`;

const BannerContainerInner = styled.div``;

const BannerQuote = styled.blockquote`
  color: white;
  text-align: center;
  line-height: 1.2em;
  font-style: italic;
`;

const BannerMark = styled.span`
  font-size: 1.4em;
  color: rgba(255, 255, 255, 0.6);
`;

const BannerText = styled.span`
  font-style: italic;
`;

const BannerFooter = styled.footer`
  color: white;
  text-align: right;
`;

const BannerCite = styled.cite`
  font-style: normal;

  strong {
    font-weight: 500;
  }
`;
