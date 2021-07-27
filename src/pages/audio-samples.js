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

const SectionPlayer = ({ title, img, src, resi }) => {
  if (resi > 0) {
    return (
      <Parallax y={[40, -40]} styleOuter={{ flex: 1 }}>
        <SectionGridPlayer>
          <Player title={`${title} showreel`} src={src} image={img} />
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

const SectionCopy = ({ title, left, children, download }) => (
  <SectionGridCopy className="flex align-center">
    <div>
      <SectionMinorTitle classes="pb-6 text-left leading-3" text={title} />
      <div className={left ? "lg:pr-32" : "lg:pr-12"}>{children}</div>
      <Action
        classes="mt-2 inline-block"
        value={`Download ${title}`}
        to={`${download}.zip`}
      />
    </div>
  </SectionGridCopy>
);

export const Section = ({ title, img, src, left, children }) => {
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
    <section>
      <SectionGrid className="lg:py-16 lg:flex">
        {left && (
          <>
            <SectionPlayer title={title} img={img} src={src} resi={resi} />
            {resi > 0 && (
              <SectionCopy
                title={title}
                left={left}
                children={children}
                download={src}
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
                download={src}
              />
            )}
            <SectionPlayer title={title} img={img} src={src} resi={resi} />
          </>
        )}
      </SectionGrid>
    </section>
  );
};

const Intro = () => (
  <ShowreelsIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p>
      During my career, I’ve been the female Sponsorship and Promotions
      voiceover for more than 25 UK Radio Stations including The Wireless Group,
      and UKRD Group. Currently, I’m the female imaging voice over for KMFM and
      Virgin Radio.
    </p>

    <p>
      My skills stretch beyond just radio stations, as alongside this, I have
      voiced countless TV commercials and corporate campaigns, both local,
      national, and global.
    </p>

    <p>
      With great competency, excellent skills, and years of experience, I can
      bring a high degree of quality and creative experience to your project,
      with undeniable professionalism and a bright voice that you won’t find
      anywhere else.
    </p>

    <p>
      Check out my audio showreels below for a snippet of the outstanding
      service I can provide for you.
    </p>
  </ShowreelsIntro>
);

const Showreels = ({ location }) => (
  <Layout location={location}>
    <RecoilRoot>
      <SEO title="Audio Samples" />
      <Lead title="Shirlie Randall — Audio Samples" />
      <ShowreelsContainer className="pt-8 lg:py-16">
        <ContainerDefault>
          <Intro />

          <Section
            title="Commercial"
            left={true}
            img="https://storage.googleapis.com/shirl-voice/images/players/commercial.jpg"
            src="https://storage.googleapis.com/shirl-voice/audio/Commercial_Demo_Shirlie_Randall_MAIN.mp3"
          >
            <p>
              Having voiced countless commercials, I can guarantee seamless
              delivery and performance. For your commercial needs, my
              versatility means that I can adapt my voice to whatever style your
              project requires. From bright and upbeat to smooth and sultry or
              natural and warm to cool and fresh, plus many more.
            </p>
          </Section>
          <Section
            title="Imaging"
            left={false}
            img="https://storage.googleapis.com/shirl-voice/images/players/imaging.jpg"
            src="https://storage.googleapis.com/shirl-voice/audio/Imaging_Demo_Shirlie_Randall.mp3"
          >
            <p>
              Currently the female imaging voice for Virgin Radio and KMFM, once
              again I can guarantee that my skills will provide the best quality
              for your project. Having been the female Sponsorship and
              Promotions voiceover for The Wireless Group and UKRD Group, I can
              apply this invaluable wealth of experience to ensure the best
              service for you.
            </p>
          </Section>
          <Section
            title="Corporate"
            left={true}
            img="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            src="https://storage.googleapis.com/shirl-voice/audio/Narration_Demo_Shirlie_Randall.mp3"
          >
            <p>
              My voice can be naturally warm and friendly for narration, but I
              can also present a sincere, authoritative voice for corporate,
              documentary and eLearning. I’m also fantastic at creating a
              magical or mumsy voice for audiobooks.
            </p>
          </Section>
          <Section
            title="Continuity"
            left={false}
            img="https://storage.googleapis.com/shirl-voice/images/players/continuity.jpg"
            src="https://storage.googleapis.com/shirl-voice/audio/Continuity_Demo_Shirlie_Randall%20.mp3"
          >
            <p>
              With a natural, warm and friendly tone and an ability for
              improvisation and scriptwriting, I can provide a smooth and
              seamless flow between programming for TV and Radio, perfect for
              any of your continuity needs.
            </p>
          </Section>
          <Section
            title="Vocals (Jingles)"
            left={true}
            img="https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            src="https://storage.googleapis.com/shirl-voice/audio/Jingle_Demo_Shirlie_Randall.mp3"
          >
            <p>
              With my singing experience and professional training, I can
              provide you with any vocals required for jingles and music beds.
              From bright and bubbly to cool and commercial, I can make sure
              that your jingle won’t be forgotten.
            </p>
          </Section>
          <Section
            title="Singing"
            left={false}
            img="https://storage.googleapis.com/shirl-voice/images/players/singing.jpg"
            src="https://storage.googleapis.com/shirl-voice/audio/Singing_Demo_Shirlie_Randall.mp3"
          >
            <p>
              From being classically trained since the age of 9 to featuring on
              one of the most iconic charted Trance Tracks of all time, singing
              has always been a passion of mine. Having been the lead singer in
              a band for many years, I have gained a great deal of onstage
              experience and performance skills.
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
  flex: 2;
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
