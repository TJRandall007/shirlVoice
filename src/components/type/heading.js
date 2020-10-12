import React from "react";
import styled from "styled-components";

import { font, type } from "../../theme";

export function MainTitle({ text }) {
  return <Main className="lg:text-6xl md:text-4xl text-3xl">{text}</Main>;
}

export function SectionTitle({ classes, text }) {
  return (
    <Section className={`lg:text-5xl md:text-4xl text-3xl ${classes}`}>
      {text}
    </Section>
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
  text-align: center;
`;
