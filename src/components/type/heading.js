import React from "react";
import styled from "styled-components";

import { accent, font, type } from "../../theme";

export function MainTitle({ text }) {
  return <Main className="lg:text-6xl md:text-4xl text-3xl">{text}</Main>;
}

export function SectionTitle({ classes, text }) {
  return (
    <Section
      className={`lg:text-5xl md:text-4xl text-3xl text-center ${
        classes ? classes : ""
      }`}
    >
      {text}
    </Section>
  );
}

export function SectionMinorTitle({ classes, text }) {
  return (
    <SectionMinor
      className={`lg:text-3xl md:text-2xl text-1xl ${classes ? classes : ""}`}
    >
      {text}
    </SectionMinor>
  );
}

export function SectionMiniTitle({ classes, text }) {
  return (
    <SectionMinor
      className={`lg:text-3xl md:text-2xl text-1xl ${classes ? classes : ""}`}
    >
      {text}
    </SectionMinor>
  );
}

const Main = styled.h1`
  color: ${type.default};
  font-weight: 500;
  line-height: 1.1em;
  font-family: ${font.sans.family};
  font-weight: ${font.sans.weight};
`;

const Section = styled.h2`
  color: ${type.default};
  font-weight: 500;
  line-height: 1.1em;
  font-family: ${font.sans.family};
  font-weight: ${font.sans.weight};
`;

const SectionMinor = styled(Section)`
  &:after {
    content: "";
    width: 32px;
    height: 4px;
    background: ${accent};
    display: block;
    position: absolute;
    margin-left: 1px;
  }
`;
