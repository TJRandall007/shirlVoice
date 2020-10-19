import React from "react";
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

const SectionPlayer = ({ title, img }) => (
  <Parallax y={[40, -40]} styleOuter={{ flex: 1 }}>
    <SectionGridPlayer>
      <Player
        title={`${title} showreel`}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        image={img}
      />
    </SectionGridPlayer>
  </Parallax>
);

const SectionCopy = ({ title, left, children }) => (
  <SectionGridCopy className="flex align-center">
    <div>
      <SectionMinorTitle classes="pb-6 text-left leading-3" text={title} />
      <div className={left ? "lg:pr-32" : "lg:pr-12"}>{children}</div>
      <Action
        classes="mt-2 inline-block"
        value={`Download ${title}`}
        to="#foo"
      />
    </div>
  </SectionGridCopy>
);

const Section = ({ title, img, left, children }) => (
  <section>
    <SectionGrid className="lg:py-16">
      {left && (
        <>
          <SectionPlayer title={title} img={img} />
          <SectionCopy title={title} left={left} children={children} />
        </>
      )}
      {!left && (
        <>
          <SectionCopy title={title} left={left} children={children} />
          <SectionPlayer title={title} img={img} />
        </>
      )}
    </SectionGrid>
  </section>
);

const Intro = () => (
  <ShowreelsIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p>
      During my career, I’ve been the female Sponsorship and Promotions
      voiceover for more than 25 UK Radio Stations including The Wireless Group,
      and UKRD Group. Currently, I am the female imaging voice over for KMFM and
      Virgin Radio.
    </p>

    <p>
      My skills stretch beyond just radio stations, as alongside this, I have
      voiced countless T.V. commercials and corporate campaigns, both local,
      national, and global.
    </p>

    <p>
      With great competency, excellent skills, and years of experience, I can
      bring a high degree of quality and creative experience to your project
      with undeniable professionalism and a bright voice that you won’t find
      anywhere else.
    </p>

    <p>
      Check out my showreels below for a snippet of the outstanding service I
      can provide for you.
    </p>
  </ShowreelsIntro>
);

const Showreels = ({ location }) => (
  <Layout location={location}>
    <SEO title="Showreels" />
    <Lead title="Showreels" />
    <ShowreelsContainer className="py-16">
      <ContainerDefault>
        <Intro />

        <Section
          title="Commercial"
          left={true}
          img="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          <p>
            Having voiced countless commercials, I can guarantee seamless
            delivery and performance. For your commercial needs, my versatility
            means that I can adapt my voice to whatever style your project
            requires. From bright and upbeat to smooth and sultry or natural and
            warm to cool and fresh, plus many more.
          </p>
        </Section>
        <Section
          title="Imaging"
          left={false}
          img="https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          <p>
            Currently the female imaging voice for Virgin Radio and KMFM, once
            again I can guarantee that my skills will provide the best quality
            for your project. Having been the female Sponsorship and Promotions
            voiceover for The Wireless Group and UKRD Group, I can apply this
            invaluable wealth of experience to ensure the best service for you.
          </p>
        </Section>
        <Section
          title="Narration"
          left={true}
          img="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          <p>
            My voice can be naturally warm and friendly for narration, but I can
            also present a sincere, authoritative voice for corporate,
            documentary and eLearning. I am also fantastic at creating a magical
            or mumsy voice for audiobooks.
          </p>
        </Section>
        <Section
          title="Continuity"
          left={false}
          img="https://images.pexels.com/photos/765139/pexels-photo-765139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          <p>
            With a natural and warm tone, I can provide a smooth and ebbless
            flow between programming for T.V. and Radio.
          </p>
        </Section>
        <Section
          title="Vocals (Jingles)"
          left={true}
          img="https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          <p>
            From being classically trained since the age of 9 to featuring on
            one of the most iconic charted Trance Tracks of all time, singing
            has always been a passion of mine. Having been the lead singer in a
            band for many years, I have gained a great deal of onstage
            experience and performance skills.
          </p>
        </Section>
        <Section
          title="Singing"
          left={false}
          img="https://images.pexels.com/photos/258890/pexels-photo-258890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          <p>
            With my singing experience and professional training, I can provide
            you with any vocals required for jingles and music beds. From bright
            and bubbly to cool and commercial, I can make sure that your jingle
            won’t be forgotten.
          </p>
        </Section>
      </ContainerDefault>
      <Banner
        text="I need one more testimonial to go here"
        name="Jon Reader"
        company="Website maker"
      />
      <Contact />
    </ShowreelsContainer>
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

const SectionGrid = styled.div`
  display: flex;
`;

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
