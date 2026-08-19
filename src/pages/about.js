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
      <SEO
        title="About Shirlie Randall | British Female Voice-over Artist"
        description="Meet Shirlie Randall, an award-winning British female voice-over artist with over 25 years’ experience in commercials, radio imaging, narration and e-learning."
      />
      <Lead title="About Shirlie Randall" />
      <AboutContainer className="pt-8 lg:py-16">
        <ContainerRelative>
          <Copy className="pb-32 m-auto mb-32 md:w-3/4 lg:w-1/2">
            <Sub>About Shirlie</Sub>
            <p>
              I’m Shirlie Randall, an award-winning British female voice-over
              artist based in Kent. With over 25 years’ experience, I record
              broadcast-quality voice-overs for clients across the UK and
              internationally.
            </p>
            <p>
              My work spans commercials, radio imaging, sponsorship and
              promotions, corporate narration, e-learning, continuity, IVR and
              on-hold messaging, in-store radio, retail announcements, jingles
              and singing.
            </p>
            <FloatImage1 resi={resi} />

            <Sub>Experience and training</Sub>
            <p>
              Voice-over has been central to my career since my early days as an
              actress. I trained at Corona Academy Stage School in London and
              completed my LAMDA acting exams. I’m also a classically trained
              singer and featured on Darren Tate’s charted trance track “Let the
              Light Shine In”.
            </p>

            <Sub>Voice, performance and direction</Sub>
            <p>
              From bright and upbeat to smooth and sophisticated, warm and
              conversational or clear and authoritative, I adapt every read to
              the audience, brand and brief. Producers value my communication,
              versatility and ability to take direction—with many saying I can
              “nail the script” on the first take.
            </p>

            <Sub>Radio and broadcasting</Sub>
            <p>
              I’m the female imaging voice for Global’s Smooth Radio Network and
              have voiced sponsorships, promotions and imaging for more than 25
              UK radio stations, including Virgin Radio, KMFM, The Wireless
              Group and UKRD.
            </p>

            <Sub>Studio and remote sessions</Sub>
            <p>
              I record from a purpose-built, soundproof and acoustically treated
              studio in Kent. Clients can direct sessions using Source-Connect,
              Cleanfeed, Zoom, Microsoft Teams or Google Meet, and I can also
              travel to studios in London and elsewhere.
            </p>

            <Sub>Professional development</Sub>
            <p>
              I continue to refine my performance through coaching and master
              classes, including training with voice-over coach Nancy Wolfson at
              Braintracks Audio.
            </p>

            <Sub>Frequently asked questions</Sub>
            <Faq>
              <dt>What types of voice-over work do you provide?</dt>
              <dd>
                Commercials, radio imaging, sponsorship and promotions,
                corporate narration, e-learning, continuity, IVR, telephone
                prompts, on-hold messaging, in-store radio, retail
                announcements, jingles and singing.
              </dd>
              <dt>Can clients direct a recording session remotely?</dt>
              <dd>
                Yes. Sessions can be directed through Source-Connect, Cleanfeed,
                Zoom, Microsoft Teams or Google Meet.
              </dd>
              <dt>How quickly can you deliver a recording?</dt>
              <dd>
                Same-day delivery is often available, depending on script
                length, session requirements and availability.
              </dd>
              <dt>How much does a professional voice-over cost?</dt>
              <dd>
                Rates depend on recording length, usage, platform, territory and
                campaign duration. Contact Shirlie for a clear, no-obligation
                quotation.
              </dd>
              <dt>Can I request a custom audition?</dt>
              <dd>
                A short custom audition can be provided when appropriate,
                helping you confirm that the style and delivery suit your
                project.
              </dd>
              <dt>Where can I hear more of Shirlie’s work?</dt>
              <dd>
                Listen to the <a href="/audio-samples">voice-over demos</a> or
                view selected <a href="/video-samples">video projects</a>.
              </dd>
            </Faq>

            <Related>
              <Sub>Looking for additional voices?</Sub>
              <p>
                Explore a wider selection of professional voice talent at{" "}
                <a href="https://humanvoiceovers.co.uk">Human Voiceovers</a>.
              </p>
            </Related>
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
    text-align: left;
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

const Faq = styled.dl`
  dt {
    color: ${type.default};
    font-weight: 600;
    margin-top: 1.25rem;
  }

  dd {
    margin-top: 0.35rem;
  }
`;

const Related = styled.aside`
  border-top: 4px solid ${accent};
  margin-top: 3rem;
  padding-top: 2rem;
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
