import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { playerAtom } from "../../store";

import { accent, type } from "../../theme";

const defaultVolumes = [
  { active: true, height: 40 },
  { active: true, height: 60 },
  { active: false, height: 80 },
  { active: false, height: 100 },
];

export default function Player(props) {
  const [player, setPlayer] = useRecoilState(playerAtom);

  const audioRef = useRef();
  const seekRef = useRef();

  const [interacted, setInteracted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [percent, setPercent] = useState(0);
  const [volumes, setVolumnes] = useState(defaultVolumes);

  function timeString(seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;

    if (!audio) return;

    setTime(timeString(audio.currentTime));

    if (audio.duration) {
      setPercent((audio.currentTime / audio.duration) * 100);

      if (audio.currentTime >= audio.duration) setPlaying(false);
    }
  }

  function handleLoadData() {
    setDuration(timeString(audioRef.current.duration));
  }

  function handlePlay() {}

  function handlePause() {}

  function handleSeek(e) {
    const per = e.nativeEvent.offsetX / seekRef.current.offsetWidth;

    const audio = audioRef.current;

    audio.currentTime = per * audio.duration;

    if (!playing) handleButtonPress();
  }

  function handleButtonPress() {
    setInteracted(true);
    setPlaying(!playing);

    const audio = audioRef.current;

    const p = !playing;

    if (p) audio.play();
    else audio.pause();
  }

  function handleVolumePress(index) {
    const v = defaultVolumes.map(({ height }, i) => {
      return {
        active: i <= index,
        height,
      };
    });

    audioRef.current.volume = v[index].height * 0.01;

    setVolumnes(v);
  }

  useEffect(() => {
    if (!interacted) return;

    playing && setPlayer(props.title);

    const audio = audioRef.current;

    if (!playing) audio.pause();
  }, [playing]);

  useEffect(() => {
    if (player === null) return;

    if (props.title !== player) setPlaying(false);
  }, [player]);

  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = 0.4;

    audio.load();

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("loadeddata", handleLoadData);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("loadeddata", handleLoadData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PlayerContainer>
        <PlayerTitle>{props.title}</PlayerTitle>
        <Timer>
          {time}/{duration}
        </Timer>
        <Volume>
          {volumes.map((level, index) => (
            <Bar
              key={level.height}
              style={{ height: `${level.height}%` }}
              className={level.active ? "active" : ""}
              onClick={() => handleVolumePress(index)}
            />
          ))}
        </Volume>
        <Button className={playing ? "" : "play"} onClick={handleButtonPress} />
        <Seeker ref={seekRef} onClick={handleSeek}>
          <SeekerPip
            style={{ left: `${percent}%`, opacity: `${percent > 0 ? 1 : 0}` }}
          />
          <SeekerProgress style={{ width: `${percent}%` }} />
          <SeekerBackground />
        </Seeker>

        <Cover />
        <Background style={{ backgroundImage: `url("${props.image}")` }} />
      </PlayerContainer>
      <audio src={props.src} preload="metadata" type="audio/mp3" ref={audioRef}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );
}

const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-color: black;

  position: relative;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${accent};
    border-radius: 12px;
    transform: rotate(-4deg);
    display: block;
    position: absolute;
    top: 0;
    left: 1px;
    z-index: -1;
  }
`;

const Cover = styled.div`
  background: rgba(34, 40, 63, 0.5);
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const PlayerTitle = styled.h3`
  color: white;
  font-size: 28px;
  line-height: 1.2em;
  padding-right: 50%;
  position: relative;
  z-index: 10;
`;

const Volume = styled.div`
  height: 30px;
  position: absolute;
  bottom: 30px;
  right: 90px;
  transform: scaleY(-1);
  z-index: 10;
`;

const Bar = styled.div`
  width: 5px;
  height: 100%;
  background: black;
  border-radius: 1px;
  margin-left: 5px;
  float: left;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 10;

  &:hover {
    cursor: pointer;
    background: ${accent};
  }

  &.active {
    background: ${accent};
  }
`;

const Timer = styled.span`
  color: ${type.muted};
  position: relative;
  margin-top: 10px;
  display: block;
  z-index: 10;
`;

const Seeker = styled.div`
  height: 12px;
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 150px;
  z-index: 5;

  &:hover {
    cursor: pointer;
  }
`;

const SeekerBackground = styled.div`
  width: 100%;
  background: black;
  border-radius: 200px;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;

  &:hover {
    background: #111111;
  }
`;

const SeekerProgress = styled.div`
  width: 0px;
  background: ${accent};
  transition: width 0.2s ease-in-out;
  border-radius: 200px;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 7;
`;

const SeekerPip = styled.div`
  width: 5px;
  height: 20px;
  background: white;

  border-radius: 200px;
  position: absolute;
  left: 0;
  bottom: -4px;

  margin-left: -4px;

  transition: all 0.2s ease-in-out;
  z-index: 8;
`;

const Button = styled.button`
  color: white;
  width: 50px;
  height: 50px;
  background: ${accent};
  text-align: center;
  font-size: 15px;
  text-indent: 6px;
  border-radius: 200px;
  position: absolute;
  bottom: 20px;
  right: 20px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 10;

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    bottom: 19px;
  }

  &:before {
    content: "▌▌";
  }

  &.play {
    font-size: 24px;
    text-indent: 4px;

    &:before {
      content: "►";
    }
  }
`;
