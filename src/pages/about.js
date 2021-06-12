import React from "react";
import { Link } from "gatsby";
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

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />
    <Lead title="Shirlie Randall — About" />
    <AboutContainer className="py-16">
      <ContainerRelative>
        <Copy className="w-1/3 m-auto pb-32 mb-32">
          <p>
            <strong>
              I’m Shirlie Randall: a professional British female voice-over
              artist, here to meet all your voicing needs.
            </strong>
          </p>
          <p>
            Voice over work has always been at the forefront of my career since
            I started the industry as a young actress.
          </p>
          <p>
            I trained at a stage school in London (Corona Academy), completing
            and passing all LAMDA acting exams. As well as an actor and a
            qualified voice over, I’m also a versatile singer. From being
            trained classically to featuring on one of the most popular charted
            Trance tracks of all time.
          </p>
          <p>
            I work from my own professional, broadcast quality home studio based
            in Kent. If needed, I’m within easy reach of central London and
            available to travel to a studio of your choice. Alternatively, you
            can direct me remotely using Skype, Source Connect, ipDTL or
            Cleanfeed.
          </p>
          <p>
            I have incredible flexibility and the ability to give a fast
            turnaround for your project. With excellent communication skills and
            the ability to take direction, I’m renowned with producers as a
            female voice over who can “nail a script” on the first take.
          </p>
          <p>
            With a commercial voice that ranges from bright and upbeat to smooth
            and sultry, I can offer variety and versatility.
          </p>
          <p>
            Despite my immense skill and experience, my talent continues to be
            refined and improved all the time, attending voice-over master
            classes and having ongoing professional voice coaching with the
            world-renowned voice-over coach{" "}
            <a href="https://braintracksaudio.com/">
              Nancy Wolfson at Braintracks Audio
            </a>
            .
          </p>
          <hr />
          <p>
            My passion for voice-overs doesn’t just stop with my career, as the
            talent runs in my family. My brother Dave Bethell is not only an
            incredible voice-over artist but an undeniably brilliant music
            composer too.
          </p>
          <p>
            Based in Los Angeles, California, he operates from his own top of
            the range studio. Feel free to check out his extraordinary gift at{" "}
            <a href="http://www.davebethell.com/">davebethell.com</a>.
          </p>
          <hr />
          <p>
            Just call this your one-stop shop as not only can I supply an
            outstanding voice for your project, but I can also supply the music!
          </p>
          <p>
            Beats Bakery is my very own music production library, with a track
            suited for your every need. Head over to listen to some of the
            amazing albums that can be featured on your next project at{" "}
            <a href="https://beatsbakery.com/">beatsbakery.com</a>.
          </p>
          <SignatureBottom />
        </Copy>

        <Float1 className="w-1/3 absolute">
          <Parallax y={[-20, 20]} styleOuter={{ flex: 1 }}>
            <img
              className="shadow-2xl"
              src="https://storage.googleapis.com/shirl-voice/images/photos/shirl-young.jpg"
              alt="Young Shirlie Randall"
            />
          </Parallax>
        </Float1>

        <Float2 className="w-1/3 absolute">
          <Parallax y={[-20, 20]} styleOuter={{ flex: 1 }}>
            <img
              className="shadow-2xl"
              src="https://storage.googleapis.com/shirl-voice/images/photos/shirl-heart.jpg"
              alt="Shirlie Randall voiceover for Heart FM"
            />
          </Parallax>
        </Float2>

        <Float3 className="w-1/3 absolute">
          <Parallax y={[-20, 20]} styleOuter={{ flex: 1 }}>
            <img
              className="shadow-2xl"
              src="https://storage.googleapis.com/shirl-voice/images/photos/shirl-smile.jpg"
              alt="Shirlie Randall smiling"
            />
          </Parallax>
        </Float3>
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
  position: absolute;

  img {
    border: 10px solid ${accent};
  }
`;

const Float1 = styled(Float)`
  top: 0;
  left: 0;

  img {
    transform: rotate(-1deg);
  }
`;

const Float2 = styled(Float)`
  top: 30%;
  right: 0;

  img {
    transform: rotate(2deg);
  }
`;

const Float3 = styled(Float)`
  top: 60%;
  left: 0;

  img {
    transform: rotate(1deg);
  }
`;

// const Float4 = styled(Float)`
//   top: 70%;
//   right: 0;
// `;
