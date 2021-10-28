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

import { accent, type } from "../theme";

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
          <Copy className="m-auto pb-32 mb-32 md:w-3/4 lg:w-1/3">
            <p>
              <strong>
                I’m Shirlie Randall: an award winning, professional British
                female voice-over artist, here to meet all your voicing needs.
              </strong>
            </p>
            <FloatImage1 resi={resi} />
            <p>
              Voice over work has always been at the forefront of my career
              since I started the industry as a young actress.
            </p>
            <p>
              I trained at a stage school in London (Corona Academy), completing
              and passing all LAMDA acting exams. As well as an actor and a
              qualified voice over, I’m also a versatile singer. From being
              trained classically to featuring on one of the most popular
              charted Trance tracks of all time.
            </p>
            <p>
              I work from my own professional, broadcast quality home studio
              based in Kent. If needed, I’m within easy reach of central London
              and available to travel to a studio of your choice. Alternatively,
              you can direct me remotely using Skype, Source Connect, ipDTL or
              Cleanfeed.
            </p>
            <FloatImage2 resi={resi} />
            <p>
              I have incredible flexibility and can provide a fast turnaround
              for your project. With excellent communication skills and the
              ability to take direction, I’m renowned with producers as a female
              voice over who can “nail a script” on the first take.
            </p>
            <p>
              With a commercial voice that ranges from bright and upbeat to
              smooth and sultry, I can offer variety and versatility.
            </p>
            <FloatImage3 resi={resi} />
            <p>
              Despite my immense skill and experience, my talent continues to be
              refined and improved all the time, attending voice-over master
              classes and having ongoing professional voice coaching with the
              world-renowned voice-over coach{" "}
              <a href="https://braintracksaudio.com/" target="_blank">
                Nancy Wolfson at Braintracks Audio
              </a>
              .
            </p>
            <hr />
            <p>
              My passion for voice-overs doesn’t just stop with my career, as
              the talent runs in my family. My brother Dave Bethell is not only
              an incredible voice-over artist but an undeniably brilliant music
              composer too.
            </p>
            <p>
              Based in Los Angeles, California, he operates from his own top of
              the range studio. Feel free to check out his extraordinary gift at{" "}
              <a href="http://www.davebethell.com/" target="_blank">
                davebethell.com
              </a>
              .
            </p>
            <hr />
            <p>
              Just call this your one-stop shop as not only can I supply an
              outstanding voice for your project, but I can also supply the
              music!
            </p>
            <p>
              Beats Bakery is my very own music production library, with a track
              suited for your every need. Head over to listen to some of the
              amazing albums that can be featured on your next project at{" "}
              <a href="https://beatsbakery.com/" target="_blank">
                beatsbakery.com
              </a>
              .
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
