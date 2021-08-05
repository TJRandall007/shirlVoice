import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { Action, ActionHeroMobile } from "../action/action";
import { MainTitle } from "../type/heading";
import { background, type } from "../../theme";

export default function Hero(props) {
  const [resi, setResi] = useState(3);

  function handleResize() {
    const w = document.documentElement.clientWidth;

    const size = w > 768 ? 2 : w > 375 ? 1 : 0;

    setResi(size);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeroContainer className="hero">
      <ContainerDefault>
        <div className="relative pt-28 pb-32 md:py-48 lg:py-52 xl:py-64">
          <Headers>
            <MainTitle text={props.lead} />
            <Sub className="lg:text-2xl lg:w-auto md:text-xl pb-12 w-40">
              {props.sub}
            </Sub>
          </Headers>

          {resi > 0 ? (
            <Action to="/audio-samples/" value="Listen to showreels" />
          ) : (
            <ActionHeroMobile
              to="/audio-samples/"
              value="Listen to showreels"
            />
          )}

          {resi > 1 ? (
            <ImageContainer>
              <img
                className="w-2/3"
                src="https://storage.googleapis.com/shirl-voice/images/hero/hero-smile.jpg"
                alt="Shirlie Randall"
              />
            </ImageContainer>
          ) : resi > 0 ? (
            <ImageContainerTablet>
              <img
                src="https://storage.googleapis.com/shirl-voice/images/hero/hero-smile.jpg"
                alt="Shirlie Randall"
              />
            </ImageContainerTablet>
          ) : (
            <ImageContainerMobile>
              <img
                src="https://storage.googleapis.com/shirl-voice/images/hero/hero-smile.jpg"
                alt="Shirlie Randall"
              />
            </ImageContainerMobile>
          )}
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
    margin: 0;
    padding: 0;
    float: right;
  }
`;

const ImageContainerTablet = styled.div`
  position: absolute;
  bottom: 0;
  right: -20%;
  z-index: 1;

  img {
    width: 520px;
    height: auto;
    margin: 0;
    padding: 0;
    float: right;
  }
`;

const ImageContainerMobile = styled.div`
  position: absolute;
  bottom: 0;
  right: -49%;
  z-index: 1;

  img {
    width: 370px;
    height: auto;
    margin: 0;
    padding: 0;
    float: right;
  }
`;
