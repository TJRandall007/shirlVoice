import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { ContainerDefault } from "../container/container";
import { Action, ActionSecondary } from "../action/action";
import Player from "../player/player";
import { Signature, SignatureMobile } from "../graphical/signature";

import { font } from "../../theme";

const AboutCopy = () => (
  <>
    <p>
      I’m <strong className="font-semibold">Shirlie Randall</strong>, an
      award-winning British female voice-over artist with over 25 years’
      experience bringing scripts, brands and stories to life.
    </p>
    <p>
      From commercials and radio imaging to corporate narration and e-learning,
      I deliver warm, engaging and broadcast-ready voice-overs tailored to each
      project.
    </p>
    <p>
      Clients value my clear communication, versatility and ability to take
      direction—with producers often saying I can “nail the script” on the first
      take.
    </p>
  </>
);

// Audio
import CommercialAudio from "../../audio/commercial.mp3";
import ImagingAudio from "../../audio/imaging.mp3";

// Images
import CommercialImage from "../../images/commercial.jpeg";
import ImagingImage from "../../images/imaging.jpeg";

export function IntroComponentMobile() {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGridMobile className="py-10">
          <MobileIntroCard className="block p-8 mb-8">
            <h2>About me</h2>
            <AboutCopy />

            <SignatureMobile />

            <MobileActions>
              <Action to="contact" value="Email Shirlie" />
              <ActionSecondary to="about" value="More about Shirlie" />
            </MobileActions>
          </MobileIntroCard>

          <Box>
            <Player
              title="Commercial showreel"
              image={CommercialImage}
              src={CommercialAudio}
            />
          </Box>
        </IntroGridMobile>
      </ContainerDefault>
    </IntroContainer>
  );
}

export function IntroComponentTabletSmall() {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGrid className="flex py-16 gap-x-4">
          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Commercial showreel"
                image={CommercialImage}
                src={CommercialAudio}
              />
            </Box>
          </Parallax>

          <Parallax y={[0, 0]} styleOuter={{ zIndex: 2, flex: 2 }}>
            <IntroCard className="p-8">
              <h2>About me</h2>
              <AboutCopy />

              <Signature />

              <Actions className="px-8 pb-10">
                <Action to="contact" value="Email Shirlie" />
                <ActionSecondary to="about" value="More about Shirlie" />
              </Actions>
            </IntroCard>
          </Parallax>
        </IntroGrid>
      </ContainerDefault>
    </IntroContainer>
  );
}

export function IntroComponentTablet() {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGrid className="flex py-16 gap-x-4">
          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Commercial showreel"
                image={CommercialImage}
                src={CommercialAudio}
              />
            </Box>
          </Parallax>

          <Parallax y={[0, 0]} styleOuter={{ zIndex: 2, flex: 2 }}>
            <IntroCard className="p-8">
              <h2>About me</h2>
              <AboutCopy />

              <Signature />

              <Actions className="px-8 pb-10">
                <Action to="contact" value="Email Shirlie" />
                <ActionSecondary to="about" value="More about Shirlie" />
              </Actions>
            </IntroCard>
          </Parallax>

          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Imaging showreel"
                image={ImagingImage}
                src={ImagingAudio}
              />
            </Box>
          </Parallax>
        </IntroGrid>
      </ContainerDefault>
    </IntroContainer>
  );
}

export function IntroComponent() {
  return (
    <IntroContainer>
      <ContainerDefault>
        <IntroGrid className="flex py-16 gap-x-4">
          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Commercial showreel"
                image={CommercialImage}
                src={CommercialAudio}
              />
            </Box>
          </Parallax>

          <Parallax y={[0, 0]} styleOuter={{ zIndex: 2, flex: 2 }}>
            <IntroCard className="p-8">
              <h2>About me</h2>
              <AboutCopy />

              <Signature />

              <Actions className="px-8 pb-10">
                <Action to="contact" value="Email Shirlie" />
                <ActionSecondary to="about" value="More about Shirlie" />
              </Actions>
            </IntroCard>
          </Parallax>

          <Parallax y={[40, -40]} styleOuter={{ zIndex: 1, flex: 1 }}>
            <Box>
              <Player
                title="Imaging showreel"
                image={ImagingImage}
                src={ImagingAudio}
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

    const size =
      w > 1530
        ? "DESKTOP"
        : w > 827
        ? "TABLET"
        : w > 767
        ? "TABLET SMALL"
        : "MOBILE";

    setResi(size);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (resi === "DESKTOP") return <IntroComponent />;

  if (resi === "TABLET") return <IntroComponentTablet />;

  if (resi === "TABLET SMALL") return <IntroComponentTabletSmall />;

  return <IntroComponentMobile />;
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
  padding-top: 36px;
`;

const IntroCard = styled.div`
  background: white;
  margin-top: 0;
  flex: 2;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  min-height: 430px;
  padding-bottom: 6rem !important;
  h2 {
    font-size: 2rem;
    font-family: ${font.sans.family};
    font-weight: ${font.sans.weight};
    padding-bottom: 0.2em;
  }

  p {
    padding-bottom: 1em;
    z-index: 2;
    position: relative;
  }
`;

const MobileIntroCard = styled(IntroCard)`
  min-height: 0;
  padding-bottom: 2rem !important;
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

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  position: static;

  a {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: 3rem;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }
`;
