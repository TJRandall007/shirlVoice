import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { Action } from "../action/action";
import { MainTitle } from "../type/heading";
import { background, type } from "../../theme";

export default function Hero(props) {
  return (
    <HeroContainer className="hero">
      <ContainerDefault>
        <div className="xl:py-64 lg:py-52 md:py-48 relative">
          <Headers>
            <MainTitle text={props.lead} />
            <Sub className="lg:text-2xl md:text-xl pb-12">{props.sub}</Sub>
          </Headers>

          <Action to="/showreels" value="Listen to showreels" />
          <ImageContainer>
            <img
              src="https://storage.googleapis.com/shirl-voice/images/hero/hero-smile.jpg"
              alt="Shirlie Randall"
            />
          </ImageContainer>
        </div>
      </ContainerDefault>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background: ${background.light};
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

const Headers = styled.div`
  position: relative;
  z-index: 2;
`;

const Sub = styled.h2`
  color: ${type.default};
  font-weight: 400;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  z-index: 1;

  img {
    height: auto;
    width: 70%;
    margin: 0;
    padding: 0;
    float: right;
  }
`;
