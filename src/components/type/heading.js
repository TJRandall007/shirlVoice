import React from "react";
import styled from "styled-components";

import { font, type } from "../../theme";

export function MainTitle(props) {
  return <Main className="lg:text-6xl md:text-4xl text-3xl">{props.text}</Main>;
}

const Main = styled.h1`
  color: ${type.default};
  font-weight: 500;
  line-height: 1.1em;
  font-family: ${font.sans.family};
  font-weight: ${font.sans.weight};
`;
