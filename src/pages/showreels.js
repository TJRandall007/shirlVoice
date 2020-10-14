import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
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

const SectionCopy = ({ title, left }) => (
  <SectionGridCopy className="flex align-center">
    <div>
      <SectionMinorTitle classes="pb-6 text-left leading-3" text={title} />
      <div className={left ? "lg:pr-32" : "lg:pr-12"}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          risus lacus, tincidunt eu fermentum et, pharetra nec est.
        </p>
        <p>
          Mauris porttitor nec tellus auctor aliquam. Donec quis accumsan augue.
          Donec eu tortor viverra, commodo urna nec, suscipit dolor. Ut sapien
          magna, porta a accumsan non, euismod vel velit. Maecenas varius luctus
          pellentesque.
        </p>
      </div>
      <Action
        classes="mt-2 inline-block"
        value={`Download ${title}`}
        to="#foo"
      />
    </div>
  </SectionGridCopy>
);

const Section = ({ title, img, left }) => (
  <section>
    <SectionGrid className="lg:py-16">
      {left && (
        <>
          <SectionPlayer title={title} img={img} />
          <SectionCopy title={title} left={left} />
        </>
      )}
      {!left && (
        <>
          <SectionCopy title={title} left={left} />
          <SectionPlayer title={title} img={img} />
        </>
      )}
    </SectionGrid>
  </section>
);

const Intro = () => (
  <ShowreelsIntro className="lg:w-8/12 lg:text-lg m-auto">
    <p>
      During my career, I’ve been the female Sponsorship and Promotions voice
      over for more than 25 UK radio stations, including the Wireless Group and
      UKRD Group, along with voicing countless commercials and corporate
      campaigns, both local and national.
    </p>

    <p>
      Currently, I’m the female imaging voice over for KMFM and Virgin Radio.
    </p>

    <p>
      I can apply this wealth of experience to your project; check out the
      showreels below for a snippet of my repetiteur:
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
        />
        <Section
          title="Imaging"
          left={false}
          img="https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Section
          title="Narration"
          left={true}
          img="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Section
          title="Continuity"
          left={false}
          img="https://images.pexels.com/photos/765139/pexels-photo-765139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Section
          title="Vocals (Jingles)"
          left={true}
          img="https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Section
          title="Singing"
          left={false}
          img="https://images.pexels.com/photos/258890/pexels-photo-258890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </ContainerDefault>
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
