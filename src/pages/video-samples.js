import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Banner } from "../components/roadblock/banner";
import { Contact } from "../components/roadblock/contact";
import { ContainerDefault } from "../components/container/container";
import Lead from "../components/lead/lead";
import { SectionTitle, SectionMiniTitle } from "../components/type/heading";
import ContactActions from "../components/contact-actions/contact-actions";

import { accent } from "../theme";

let youtubeApiPromise;
const videoPlayers = new Set();

const loadYouTubeApi = () => {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);

  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise(resolve => {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousReady) previousReady();
        resolve(window.YT);
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    });
  }

  return youtubeApiPromise;
};

const VideoPlayer = ({ id, title }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    let player;
    let cancelled = false;

    loadYouTubeApi().then(YT => {
      if (!YT || cancelled || !iframeRef.current) return;

      player = new YT.Player(iframeRef.current, {
        events: {
          onReady: event => videoPlayers.add(event.target),
          onStateChange: event => {
            if (event.data !== YT.PlayerState.PLAYING) return;

            videoPlayers.forEach(otherPlayer => {
              if (otherPlayer !== event.target) otherPlayer.pauseVideo();
            });
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (player) {
        videoPlayers.delete(player);
        player.destroy();
      }
    };
  }, []);

  return (
    <VideoWrapper>
      <iframe
        ref={iframeRef}
        width="100%"
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
        title={`${title} voice-over video featuring Shirlie Randall`}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>
  );
};

const VideoGroup = ({ id, title }) => (
  <div>
    <SectionMiniTitle text={title} />
    <VideoPlayer id={id} title={title} />
  </div>
);

const Intro = () => (
  <ShowreelsIntro className="m-auto lg:w-8/12 lg:text-lg">
    <p>
      Explore Shirlie Randall’s British female voice-over work across television
      commercials, corporate films, explainer videos, documentaries, online
      campaigns and digital applications.
    </p>

    <p>
      From warm and conversational to bright, authoritative or characterful,
      each performance is tailored to the audience, brand and message.
    </p>
    <p>
      Looking for a voice for your next production? Email Shirlie to discuss
      your brief or request a custom audition.
    </p>
    <ContactActions compact />
  </ShowreelsIntro>
);

const Showreels = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Voice-over Video Portfolio | TV & Corporate Work"
      description="Explore Shirlie Randall’s British voice-over portfolio across TV advertising, corporate films, explainer videos, continuity and online campaigns."
    />
    <Lead title="Shirlie Randall — Voice-over Video Portfolio" />
    <ShowreelsContainer className="pt-8 lg:py-16">
      <ContainerDefault>
        <Intro />
        <div className="pt-24">
          <SectionTitle text="TV advertising" classes="pb-10" />

          <div className="grid gap-8 pb-16 lg:grid-cols-3">
            <VideoGroup id="brjGZcMftqg" title="Crosse and Blackwell" />
            <VideoGroup id="gSGrPSTgAgk" title="Selfie Mic" />
            <VideoGroup id="P0lDmfj9Xis" title="Lotto Go" />
            <VideoGroup id="YDMUKlOQfb8" title="Abellio Greater Anglia" />
            <VideoGroup id="rHenWt5-x1U" title="Sky Vegas" />
            <VideoGroup id="-M4eEFR93SE" title="Equazen" />
          </div>
        </div>

        <div>
          <SectionTitle
            text="Corporate and online videos"
            classes="pt-10 pb-10"
          />
          <div className="grid gap-8 pb-16 lg:grid-cols-3">
            <VideoGroup id="wd9O2YUmf4Q" title="Weight Watchers" />
            <VideoGroup id="bqpGmArQiL8" title="Nextdoor App" />
            <VideoGroup id="A0uVkz-jJN4" title="My Morrisons" />
          </div>
        </div>

        <div className="grid gap-8 pb-16 lg:grid-cols-3">
          <div>
            <SectionTitle text="Continuity" classes="pt-10 pb-10" />
            <VideoGroup id="Ghsi0O64gzM" title="Paddington 2" />
          </div>
          <div>
            <SectionTitle text="Singing Advert" classes="pt-10 pb-10" />
            <VideoGroup id="nLZn1S8NEas" title="Kiddizoom Duo" />
          </div>
          <div>
            <SectionTitle text="Infomercial" classes="pt-10 pb-10" />
            <VideoGroup id="-2lcjZsz7Zs" title="KCC 30mph" />
          </div>
        </div>
      </ContainerDefault>
      <Banner
        text="We love working with Shirlie as she’s an absolute pro - always goes the extra mile to make sure clients are happy and does the business every time."
        name="Chris Thorpe"
        company="On The Sly"
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

const VideoWrapper = styled.div`
   {
    position: relative;
    margin-top: 10px;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
