import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { Action } from "../action/action";
import { MainTitle } from "../type/heading";
import { background, font, type } from "../../theme";

export default function Hero(props) {
  return (
    <HeroContainer className="hero">
      <ContainerDefault>
        <div className="xl:py-64 lg:py-52 md:py-48">
          <Headers>
            <MainTitle text={props.lead} />
            <Sub className="lg:text-2xl md:text-xl pb-12">{props.sub}</Sub>
          </Headers>

          <Action to="/showreels" value="Listen to showreels" />
        </div>
      </ContainerDefault>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background: ${background.light};
  position: relative;
  overflow: hidden;
`;

const Headers = styled.div``;

const Sub = styled.h2`
  color: ${type.default};
  font-weight: 400;
`;
