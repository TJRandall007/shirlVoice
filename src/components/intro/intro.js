import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { ContainerDefault } from "../container/container";
import { Action, ActionSecondary } from "../action/action";
import Player from "../player/player";
import { Signature } from "../graphical/signature";

import { accent, font } from "../../theme";

export default function Intro(props) {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGrid className="flex gap-x-4 py-16">
          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Commercial showreel"
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                image="https://images.pexels.com/photos/879814/pexels-photo-879814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                src="https://storage.googleapis.com/shirl-voice/audio/Commercial_Demo_Shirlie_Randall_MAIN.mp3"
              />
            </Box>
          </Parallax>

          <Parallax y={[-40, 40]} styleOuter={{ zIndex: 2, flex: 2 }}>
            <IntroCard className="p-8">
              <h2>About me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas risus lacus, tincidunt eu fermentum et, pharetra nec
                est.
              </p>
              <p>
                Mauris porttitor nec tellus auctor aliquam. Donec quis accumsan
                augue. Donec eu tortor viverra, commodo urna nec, suscipit
                dolor. Ut sapien magna, porta a accumsan non, euismod vel velit.
                Maecenas varius luctus pellentesque.
              </p>

              <Signature />

              <Actions className="px-8 pb-10">
                <Action to="contact" value="Get in touch" />
                <ActionSecondary to="about" value="Read more" />
              </Actions>
            </IntroCard>
          </Parallax>

          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Imaging showreel"
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                image="https://images.pexels.com/photos/4652258/pexels-photo-4652258.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                src="https://storage.googleapis.com/shirl-voice/audio/Imaging_Demo_Shirlie_Randall.mp3"
              />
            </Box>
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
  padding-bottom: 200px;
`;

const IntroCard = styled.div`
  height: 400px;
  background: white;
  margin-top: -20px;
  flex: 2;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  h2 {
    font-size: 2rem;
    font-family: ${font.sans.family};
    font-weight: ${font.sans.weight};
    padding-bottom: 0.5em;
  }

  p {
    padding-bottom: 1em;
    z-index: 2;
    position: relative;
  }
`;

const Box = styled.div`
  background-position: cover;
  height: 360px;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
