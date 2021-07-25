import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { ContainerDefault } from "../container/container";
import { Action, ActionSecondary } from "../action/action";
import Player from "../player/player";
import { Signature, SignatureMobile } from "../graphical/signature";

import { accent, font } from "../../theme";

export function IntroComponentMobile() {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGridMobile className="py-10">
          <IntroCard className="p-8 mb-8 block">
            <h2>About me</h2>
            <p>
              I’m Shirlie Randall, and have been the voice for numerous brands
              and projects for over 20 years! I can adapt my voice to whatever
              style your project requires, from bright and upbeat to smooth and
              sultry or natural and warm to cool and fresh, plus many more.
            </p>

            <p className="mb-20">
              With excellent communication skills, I am renowned with
              <br />
              producers as a female voice over who can “nail a script” <br />
              on the first take.
            </p>

            <SignatureMobile />

            <Actions className="px-8 pb-10">
              <Action to="contact" value="Get in touch" />
            </Actions>
          </IntroCard>

          <Box>
            <Player
              title="Commercial showreel"
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              image="https://storage.googleapis.com/shirl-voice/images/players/commercial.jpg"
              src="https://storage.googleapis.com/shirl-voice/audio/Commercial_Demo_Shirlie_Randall_MAIN.mp3"
            />
          </Box>
        </IntroGridMobile>
      </ContainerDefault>
    </IntroContainer>
  );
}

export function IntroComponent() {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGrid className="flex gap-x-4 py-16">
          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Commercial showreel"
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                image="https://storage.googleapis.com/shirl-voice/images/players/commercial.jpg"
                src="https://storage.googleapis.com/shirl-voice/audio/Commercial_Demo_Shirlie_Randall_MAIN.mp3"
              />
            </Box>
          </Parallax>

          <Parallax y={[-40, 40]} styleOuter={{ zIndex: 2, flex: 2 }}>
            <IntroCard style={{ height: "375px" }} className="p-8">
              <h2>About me</h2>
              <p>
                I’m Shirlie Randall, and have been the voice for numerous brands
                and projects for over 20 years! I can adapt my voice to whatever
                style your project requires, from bright and upbeat to smooth
                and sultry or natural and warm to cool and fresh, plus many
                more.
              </p>

              <p>
                With excellent communication skills, I am renowned with
                <br />
                producers as a female voice over who can “nail a script” <br />
                on the first take.
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
                image="https://storage.googleapis.com/shirl-voice/images/players/imaging.jpg"
                src="https://storage.googleapis.com/shirl-voice/audio/Imaging_Demo_Shirlie_Randall.mp3"
              />
            </Box>
          </Parallax>
        </IntroGrid>
      </ContainerDefault>
    </IntroContainer>
  );
}

export default function Intro() {
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

  return resi > 0 ? <IntroComponent /> : <IntroComponentMobile />;
}

const IntroContainer = styled.div`
  background: white;
`;

const IntroGrid = styled.div`
  position: relative;
  padding-bottom: 200px;
`;

const IntroGridMobile = styled.div`
  position: relative;
  padding-bottom: 36px;
  margin-top: -70px;
`;

const IntroCard = styled.div`
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
