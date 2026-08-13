import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { Action } from "../components/action/action";
import { ContainerDefault } from "../components/container/container";
import Lead from "../components/lead/lead";
import Player from "../components/player/player";
import { SectionMinorTitle } from "../components/type/heading";

import { accent } from "../theme";

// Audio
import CommercialAudio from "../audio/commercial.mp3";
import ContinuityAudio from "../audio/continuity.mp3";
import ImagingAudio from "../audio/imaging.mp3";
import JingleAudio from "../audio/jingle.mp3";
import NarrationAudio from "../audio/narration.mp3";
import SingingAudio from "../audio/singing.mp3";

// Images
import CommercialImage from "../images/commercial.jpeg";
import ImagingImage from "../images/imaging.jpeg";
import CorporateImage from "../images/corporate.jpeg";
import ContinuityImage from "../images/continuity.jpeg";
import JinglesImage from "../images/jingles.jpeg";
import SingingImage from "../images/singing.jpeg";

const SectionPlayer = ({ title, img, src, resi, showreel }) => {
  if (resi > 0) {
    return (
      <Parallax y={[40, -40]} styleOuter={{ flex: 1 }}>
        <SectionGridPlayer>
          <Player
            title={`${title}${showreel ? " showreel" : ""}`}
            src={src}
            image={img}
          />
        </SectionGridPlayer>
      </Parallax>
    );
  }

  return (
    <SectionGridPlayer>
      <Player title={`${title} showreel`} src={src} image={img} />
    </SectionGridPlayer>
  );
};

const SectionCopy = ({ title, left, children, download, resi }) => (
  <SectionGridCopy
    style={{ flex: resi === 1 ? 1 : 2 }}
    className="flex align-center"
  >
    <div>
      <SectionMinorTitle classes="pb-6 text-left leading-3" text={title} />
      <div className={left ? "lg:pr-32" : "lg:pr-12"}>{children}</div>
      <Action
        classes="mt-2 inline-block"
        value={`Download ${title}`}
        to={download}
        download={true}
      />
    </div>
  </SectionGridCopy>
);

export const Section = ({
  title,
  img,
  src,
  left,
  dl,
  showreel = true,
  children,
}) => {
  const [resi, setResi] = useState(3);

  function handleResize() {
    const w = document.documentElement.clientWidth;

    const size = w > 768 ? 2 : w > 414 ? 1 : 0;

    setResi(size);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <SectionGrid className="lg:py-16 md:flex">
        {left && (
          <>
            <SectionPlayer
              title={title}
              img={img}
              src={src}
              resi={resi}
              showreel={showreel}
            />
            {resi > 0 && (
              <SectionCopy
                title={title}
                left={left}
                children={children}
                download={dl}
                resi={resi}
              />
            )}
          </>
        )}
        {!left && (
          <>
            {resi > 0 && (
              <SectionCopy
                title={title}
                left={left}
                children={children}
                download={dl}
                resi={resi}
              />
            )}
            <SectionPlayer
              title={title}
              img={img}
              src={src}
              resi={resi}
              showreel={showreel}
            />
          </>
        )}
      </SectionGrid>
    </section>
  );
};

const Intro = () => (
  <ShowreelsIntro className="m-auto lg:w-8/12 lg:text-lg">
    <p>
      Looking for a professional female voiceover artist with a proven track
      record? Throughout my career, I’ve been the Sponsorship and Promotions
      voiceover for over 25 UK radio stations, including Virgin Radio, The
      Wireless Group, and the UKRD Group. Currently, I’m the female imaging
      voice for Globals Smooth Radio Network.
    </p>

    <p>
      My expertise extends beyond radio, with extensive experience voicing TV
      commercials and corporate campaigns for local, national, and global
      clients. With a bright, engaging voice and years of experience, I deliver
      top-quality results with creativity, professionalism, and attention to
      detail.
    </p>

    <p>
      Explore my audio showreels below to hear how I can elevate your project to
      the next level. Let’s create something exceptional together!
    </p>
  </ShowreelsIntro>
);

const Showreels = ({ location }) => (
  <Layout location={location}>
    <RecoilRoot>
      <SEO
        title="Voiceover Demos | Commercial, Corporate & Radio Imaging"
        description="Listen to Shirlie Randall's voiceover demos: commercial, corporate, radio imaging & promos. Current female imaging voice for Smooth Radio Network."
      />
      <Lead title="Shirlie Randall — Audio Samples" />
      <ShowreelsContainer className="pt-8 lg:py-16">
        <ContainerDefault>
          <Intro />

          <Section
            title="Commercial"
            left={true}
            img={CommercialImage}
            src={CommercialAudio}
            dl="https://shirlierandall.b-cdn.net/commercial.mp3.zip"
          >
            <p>
              With extensive experience voicing countless commercials, I
              guarantee a seamless delivery tailored to your project. My
              versatile range allows me to adapt my voice to any style, from{" "}
              <strong className="font-semibold">bright and upbeat</strong> to{" "}
              <strong className="font-semibold">smooth and sultry</strong>, or{" "}
              <strong className="font-semibold">natural and warm</strong> to{" "}
              <strong className="font-semibold">cool and fresh</strong>,{" "}
              ensuring the perfect match for your brand.
            </p>
          </Section>
          <Section
            title="Imaging"
            left={false}
            img={ImagingImage}
            src={ImagingAudio}
            dl="https://shirlierandall.b-cdn.net/imaging.mp3.zip"
          >
            <p>
              As the current female Sponsorship and Promotions voice for{" "}
              <strong className="font-semibold">Smooth Radio</strong>, I bring
              unmatched quality and expertise to every project. With prior
              experience as the female imaging voiceover for{" "}
              <strong className="font-semibold">Virgin Radio</strong>,{" "}
              <strong className="font-semibold">KMFM</strong>,{" "}
              <strong className="font-semibold">The Wireless Group</strong> and{" "}
              <strong className="font-semibold">UKRD Group</strong>, I will{" "}
              deliver professional, engaging results that elevate your station's
              sound.
            </p>
          </Section>
          <Section
            title="Corporate"
            left={true}
            img={CorporateImage}
            src={NarrationAudio}
            dl="https://shirlierandall.b-cdn.net/narration.mp3.zip"
          >
            <p>
              Whether you need a{" "}
              <strong className="font-semibold">
                naturally warm and friendly
              </strong>{" "}
              narration or a <strong className="font-semibold">sincere</strong>,{" "}
              <strong className="font-semibold">authoritative</strong> tone for
              corporate videos, documentaries, or eLearning, my voice fits the
              bill. I can also bring a{" "}
              <strong className="font-semibold">
                magical or nurturing "mumsy" quality
              </strong>{" "}
              to audiobooks, adding depth and personality to your story.
            </p>
          </Section>
          <Section
            title="Continuity"
            left={false}
            img={ContinuityImage}
            src={ContinuityAudio}
            dl="https://shirlierandall.b-cdn.net/continuity.mp3.zip"
          >
            <p>
              My <strong className="font-semibold">natural</strong>,{" "}
              <strong className="font-semibold">warm</strong>, and{" "}
              <strong className="font-semibold">friendly tone</strong>, combined
              with skills in improvisation and scriptwriting, ensures a smooth
              and seamless flow between programming for TV and Radio. I’m the
              perfect fit to handle all your continuity needs with
              professionalism and charm.
            </p>
          </Section>
          <Section
            title="Vocals (Jingles)"
            left={true}
            img={JinglesImage}
            src={JingleAudio}
            dl="https://shirlierandall.b-cdn.net/jingle.mp3.zip"
          >
            <p>
              With my professional training and singing background, I can
              provide standout vocals for jingles and music beds. From{" "}
              <strong className="font-semibold">bright and bubbly</strong> to{" "}
              <strong className="font-semibold">cool and commercial</strong>,{" "}
              I’ll ensure your jingle leaves a lasting impression.
            </p>
          </Section>
          <Section
            title="Singing"
            left={false}
            img={SingingImage}
            src={SingingAudio}
            dl="https://shirlierandall.b-cdn.net/singing.mp3.zip"
          >
            <p>
              Classically trained since the age of 9 and featured on one of the
              most iconic charted Trance tracks of all time—Darren Tate's "Let
              The Light Shine In"—singing has always been a true passion of
              mine. As a former lead singer in a band for many years, I bring
              extensive stage experience and performance skills to every singing
              project.
            </p>
          </Section>
        </ContainerDefault>
        <Banner
          text="You're just the best at what you do - what more is there to say!"
          name="Danny Rhodes"
          company="KMFM Audio Producer"
        />
        <Contact />
      </ShowreelsContainer>
    </RecoilRoot>
  </Layout>
);

export default Showreels;

const ShowreelsContainer = styled.div`
  background: white;
`;

const ShowreelsIntro = styled.div`
  &:after {
    content: "";
    width: 42px;
    height: 4px;
    background: ${accent};
    position: absolute;
    left: 50%;
    margin-left: -21px;
  }

  p {
    padding-bottom: 1em;
  }
`;

const SectionGrid = styled.div``;

const SectionGridCopy = styled.div`
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 32px;

  p {
    padding-bottom: 1em;
  }
`;

const SectionGridPlayer = styled(SectionGridCopy)`
  flex: 1;
`;
