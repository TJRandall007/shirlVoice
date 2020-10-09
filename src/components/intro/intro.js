import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { ContainerDefault } from "../container/container";
import { accent } from "../../theme";

export default function Intro(props) {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGrid className="flex gap-4 py-16">
          <Parallax y={[40, -40]} styleOuter={{ flex: 1 }}>
            <Box
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/5533931/pexels-photo-5533931.jpeg?auto=compress&cs=tinysrgb&h=730&w=1260)",
              }}
            />
          </Parallax>

          <Parallax y={[-40, 40]} styleOuter={{ flex: 2 }}>
            <IntroCard className="p-8">Foo</IntroCard>
          </Parallax>

          <Parallax y={[40, -40]} styleOuter={{ flex: 1 }}>
            <Box
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/879814/pexels-photo-879814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
            />
          </Parallax>
        </IntroGrid>
      </ContainerDefault>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  background: white;
`;

const IntroGrid = styled.div`
  position: relative;
  height: 900px;
`;

const IntroCard = styled.div`
  height: 400px;
  background: white;
  //   border: 16px solid ${accent};
  margin-top: -20px;
  flex: 2;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

const Box = styled.div`
  background-position: cover;
  height: 360px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;
