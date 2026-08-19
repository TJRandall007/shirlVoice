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
import ContactActions from "../components/contact-actions/contact-actions";

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
        value={`Download ${title} demo (MP3)`}
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
      Listen to Shirlie Randall’s professional British female voice-over demos,
      including commercials, radio imaging, narration, continuity, jingles and
      singing.
    </p>
    <p>
      With over 25 years’ experience, Shirlie is the female imaging voice for
      Global’s Smooth Radio Network and has voiced sponsorships, promotions and
      imaging for more than 25 UK radio stations, including Virgin Radio, The
      Wireless Group and UKRD.
    </p>
    <p>
      From bright, engaging commercials to warm narration and authoritative
      corporate delivery, every performance is recorded with creativity,
      professionalism and attention to detail.
    </p>
    <p>
      Need a particular style or a custom audition? Email Shirlie to discuss
      your project.
    </p>
    <ContactActions compact />
  </ShowreelsIntro>
);

const Showreels = ({ location }) => (
  <Layout location={location}>
    <RecoilRoot>
      <SEO
        title="British Voice-over Demos | Commercial & Radio Imaging"
        description="Listen to Shirlie Randall’s British female voice-over demos for commercials, radio imaging, corporate narration, continuity, jingles and singing."
      />
      <Lead title="Shirlie Randall — British Voice-over Demos" />
      <ShowreelsContainer className="pt-8 lg:py-16">
        <ContainerDefault>
          <Intro />

          <Section
            title="Commercial voice-over"
            left={true}
            img={CommercialImage}
            src={CommercialAudio}
            dl="https://shirlierandall.b-cdn.net/commercial.mp3.zip"
          >
            <p>
              Bright and upbeat, smooth and sophisticated, natural and warm, or
              cool and contemporary—Shirlie delivers versatile commercial
              voice-overs tailored to your brand, audience and campaign.
            </p>
          </Section>
          <Section
            title="Radio imaging"
            left={false}
            img={ImagingImage}
            src={ImagingAudio}
            dl="https://shirlierandall.b-cdn.net/imaging.mp3.zip"
          >
            <p>
              The female imaging voice for Global’s Smooth Radio Network,
              Shirlie brings pace, personality and polish to radio imaging,
              sponsorship and promotions. Previous stations include Virgin
              Radio, KMFM, The Wireless Group and UKRD.
            </p>
          </Section>
          <Section
            title="Narration and corporate"
            left={true}
            img={CorporateImage}
            src={NarrationAudio}
            dl="https://shirlierandall.b-cdn.net/narration.mp3.zip"
          >
            <p>
              Warm and friendly or sincere and authoritative, Shirlie records
              clear, engaging narration for corporate films, documentaries,
              e-learning and audiobooks.
            </p>
          </Section>
          <Section
            title="TV and radio continuity"
            left={false}
            img={ContinuityImage}
            src={ContinuityAudio}
            dl="https://shirlierandall.b-cdn.net/continuity.mp3.zip"
          >
            <p>
              A natural, warm delivery combined with improvisation and
              scriptwriting experience gives Shirlie’s continuity work an easy,
              seamless flow between programmes.
            </p>
          </Section>
          <Section
            title="Jingles and vocals"
            left={true}
            img={JinglesImage}
            src={JingleAudio}
            dl="https://shirlierandall.b-cdn.net/jingle.mp3.zip"
          >
            <p>
              Professionally trained and highly versatile, Shirlie records
              memorable vocals for jingles and music beds, from bright and
              bubbly to cool and commercial.
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
              Classically trained from the age of nine, Shirlie featured on
              Darren Tate’s charted trance track “Let the Light Shine In” and
              brings extensive stage and studio experience to every singing
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
