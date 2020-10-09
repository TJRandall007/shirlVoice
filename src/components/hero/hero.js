import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { Action } from "../action/action";
import { background, font, type } from "../../theme";

export default function Hero(props) {
  return (
    <HeroContainer className="hero">
      <ContainerDefault>
        <div className="xl:py-64 lg:py-52 md:py-48">
          <Headers>
            <Lead className="lg:text-6xl md:text-4xl text-3xl">
              {props.lead}
            </Lead>

            <Sub className="lg:text-2xl md:text-xl pb-12">{props.sub}</Sub>
          </Headers>

          <Action value="Listen to showreels" />
        </div>
      </ContainerDefault>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background: ${background.light};
  position: relative;
  overflow: hidden;
  // z-index: 30;
`;

const Headers = styled.div``;

const Lead = styled.h1`
  color: ${type.default};
  font-weight: 500;
  line-height: 1.1em;
  font-family: ${font.sans.family};
  font-weight: ${font.sans.weight};
`;

const Sub = styled.h2`
  color: ${type.default};
  font-weight: 400;
`;
