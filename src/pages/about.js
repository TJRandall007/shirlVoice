import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { ContainerRelative } from "../components/container/container";
import { SignatureBottom } from "../components/graphical/signature";

import { accent, font, type } from "../theme";

// Images
import About1Image from "../images/about1.jpeg";
import About2Image from "../images/about2.jpeg";
import About3Image from "../images/about3.jpeg";

const FloatImage1 = ({ resi }) => {
  if (resi > 1) {
    return (
      <Parallax y={[-20, 20]} styleOuter={{ flex: 1 }}>
        <Float1 className="my-12 md:my-0 md:w-4/5 md:absolute">
          <img
            className="shadow-2xl"
            src={About1Image}
            alt="Young Shirlie Randall"
          />
        </Float1>
      </Parallax>
    );
  }

  return (
    <Float1 className="my-12 md:w-80 md:mx-auto">
      <img className="" src={About1Image} alt="Young Shirlie Randall" />
    </Float1>
  );
};

const FloatImage2 = ({ resi }) => {
  if (resi > 1) {
    return (
      <Float2 className="my-12 md:my-0 md:w-4/5 md:absolute">
        <Parallax y={[-20, 20]} styleOuter={{ flex: 1 }}>
          <img
            className="shadow-2xl"
            src={About2Image}
            alt="Shirlie Randall voiceover for Heart FM"
          />
        </Parallax>
      </Float2>
    );
  }

  return (
    <Float2 className="my-12 md:w-80 md:mx-auto">
      <img
        className=""
        src={About2Image}
        alt="Shirlie Randall voiceover for Heart FM"
      />
    </Float2>
  );
};

const FloatImage3 = ({ resi }) => {
  if (resi > 1) {
    return (
      <Float3 className="my-12 md:my-0 md:w-4/5 md:absolute">
        <Parallax y={[-20, 20]} styleOuter={{ flex: 1 }}>
          <img
            className="shadow-2xl"
            src={About3Image}
            alt="Shirlie Randall smiling"
          />
        </Parallax>
      </Float3>
    );
  }

  return (
    <Float3 className="my-12 md:w-80 md:mx-auto">
      <img className="" src={About3Image} alt="Shirlie Randall smiling" />
    </Float3>
  );
};

const About = ({ location }) => {
  const [resi, setResi] = useState(3);

  function handleResize() {
    const w = document.documentElement.clientWidth;

    const size = w > 810 ? 2 : w > 414 ? 1 : 0;

    setResi(size);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout location={location}>
      <SEO title="About" />
      <Lead title="Shirlie Randall — About" />
      <AboutContainer className="pt-8 lg:py-16">
        <ContainerRelative>
          <Copy className="pb-32 m-auto mb-32 md:w-3/4 lg:w-1/3">
            <Sub>About Me</Sub>
            <p>
              I’m Shirlie Randall, a professional British female voice-over
              artist, here to bring your scripts to life with style and
              expertise.
            </p>
            <p>
              Voice-over work has been a cornerstone of my career since my early
              days as a young actress. I trained at the prestigious Corona
              Academy Stage School in London, earning top marks in all LAMDA
              acting exams. Alongside voice acting, I’m also a versatile
              singer—trained classically and even featured on one of the most
              iconic charted Trance tracks of all time.
            </p>
            <p>
              I work from my own broadcast-quality studio in Kent, providing
              quick turnaround times with a professional touch. For in-person
              sessions, I’m conveniently located within easy reach of central
              London and also available for remote direction via Skype, Source
              Connect, or Cleanfeed.
            </p>
            <FloatImage1 resi={resi} />

            <Sub>What I Offer</Sub>
            <p>
              With a voice that ranges from{" "}
              <strong className="font-semibold">bright and upbeat</strong> to{" "}
              <strong className="font-semibold">smooth and sultry</strong>, I
              bring variety and versatility to every project. Producers value my
              ability to "nail a script" on the first take, thanks to my strong
              communication skills, adaptability, and deep understanding of the
              craft.
            </p>

            <Sub>Continuing Excellence</Sub>
            <p>
              Despite years of experience, I continually hone my skills with
              ongoing coaching and master classes, including training with
              world-renowned voice-over coach{" "}
              <strong className="font-semibold">Nancy Wolfson</strong> at
              Braintracks Audio. My commitment to growth ensures I deliver
              cutting-edge performances tailored to your needs.
            </p>

            <Sub>A Family Talent</Sub>
            <p>
              Voice acting runs in my family! My brother, Dave Bethell, is an
              exceptional voice-over artist and a brilliant music composer based
              in Los Angeles, California. With his own state-of-the-art studio,
              he delivers world-class audio. Check out his incredible work on{" "}
              <a href="https://www.instagram.com/voicedave/">his Instagram</a>.
            </p>
            <FloatImage2 resi={resi} />
            <Sub>Music to Match</Sub>
            <p>
              Looking for the perfect soundtrack to accompany your project? I’ve
              got you covered! My{" "}
              <strong className="font-semibold">Beats Bakery</strong> music
              production library offers tracks for every need. Explore our
              outstanding selection of albums at{" "}
              <a href="https://beatsbakery.com">beatsbakery.com</a>.
            </p>
            <p className="pt-12">
              With my passion, skill, and dedication, I’m your one-stop solution
              for professional voice-over and custom music. Let’s create
              something amazing together!
            </p>
            <SignatureBottom />
          </Copy>
        </ContainerRelative>
        <Banner
          text="Shirlie is an outstanding voiceover, who always delivers a great read on anything"
          name="Duncan Brown"
          company="Group SPi Producer, Wireless"
        />
        <Contact />
      </AboutContainer>
    </Layout>
  );
};

export default About;

const Sub = styled.h2`
  color: ${type.default};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1em;
  font-family: ${font.sans.family};
  font-weight: ${font.sans.weight};
  padding-bottom: 14px;
`;

const AboutContainer = styled.div`
  background: white;
`;

const Copy = styled.div`
  position: relative;

  a {
    color: ${type.link};
    text-decoration: underline;
  }

  p {
    text-align: justify;
    padding-bottom: 1em;
  }

  strong {
    font-weight: 500;
  }

  hr {
    height: 4px;
    border: none;
    position: relative;
    padding-top: 0.5em;
    padding-bottom: 1.5em;

    &:after {
      content: " ";
      width: 42px;
      height: 4px;
      background: ${accent};
      display: block;
      margin: 0 auto;
    }
  }
`;

const Float = styled.div`
  padding: 0 5%;

  img {
    border: 10px solid ${accent};
  }
`;

const Float1 = styled(Float)`
  top: 0;
  left: -100%;

  img {
    transform: rotate(-1deg);
  }
`;

const Float2 = styled(Float)`
  top: 30%;
  right: -100%;

  img {
    transform: rotate(2deg);
  }
`;

const Float3 = styled(Float)`
  top: 60%;
  left: -100%;

  img {
    transform: rotate(1deg);
  }
`;

// const Float4 = styled(Float)`
//   top: 70%;
//   right: 0;
// `;
