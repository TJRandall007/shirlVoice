import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { SectionTitle } from "../type/heading";

import { accent, type } from "../../theme";

const Twitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
  >
    <path
      id="a"
      d="M77 40.1c0 23.6-13.5 40.5-37.1 40.5-13.5 0-18.9-7-23.6-13.5m-.1 0c.1 0 10.1-3.4 10.1-3.4C15.1 52.3 14.2 35.4 23 23.2c4.2 7.7 11.9 14.8 20.2 16.9.3-9.8 6.9-16.9 16.9-16.9 6.8 0 10.8 2.6 13.5 6.8h10.1L77 40.1"
    />
  </svg>
);

const Instagram = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <path d="M33.1 16.2h33.8c9.3 0 16.9 7.5 16.9 16.9v33.8c0 9.3-7.5 16.9-16.9 16.9H33.1c-9.3 0-16.9-7.5-16.9-16.9V33.1c0-9.3 7.6-16.9 16.9-16.9z" />
    <path d="M68.6 30.2c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3-.1-.8-.6-1.3-1.3-1.3" />
    <circle class="st0" cx="50" cy="50" r="13.5" />
  </svg>
);

const Facebook = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0"
    y="0"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <path
      class="st0"
      d="M41.3 47.4h17.4M58.7 33h-3c-4.7 0-8.5 3.8-8.5 8.5V67"
    />
    <circle cx="50" cy="50" r="37.5" />
  </svg>
);

const LinkedIn = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0"
    y="0"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <path d="M35.4 46.6v20.3M48.9 66.9V55.1c0-4.7 3.8-8.4 8.4-8.4 4.7 0 8.4 3.8 8.4 8.4v11.8" />
    <path d="M35.4 34.4c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8.1-.4-.3-.8-.8-.8" />
    <path d="M66.5 83.5h-33c-9.4 0-17-7.6-17-17v-33c0-9.4 7.6-17 17-17h33c9.4 0 17 7.6 17 17v33c0 9.4-7.6 17-17 17z" />
  </svg>
);

const YouTube = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0"
    y="0"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <path d="M85.9 28.9c-.9-3.8-3.4-6.7-6.6-7.8-5.8-1.8-29.3-1.8-29.3-1.8s-23.4 0-29.3 1.8c-3.2 1-5.8 4-6.6 7.8-1.6 6.8-1.6 21.1-1.6 21.1s0 14.3 1.6 21.1c.9 3.8 3.4 6.7 6.6 7.8 5.9 1.8 29.3 1.8 29.3 1.8s23.5 0 29.3-1.8c3.2-1 5.8-4 6.6-7.8 1.6-6.8 1.6-21.1 1.6-21.1s0-14.3-1.6-21.1z" />
    <path d="M42.5 61.3L62 50 42.5 38.7z" />
  </svg>
);

export const Contact = () => (
  <ContactContainer className="lg:py-32">
    <ContainerDefault>
      <SectionTitle text="Get in touch" />
      <Copy className="lg:text-4xl">
        +44 (0) 7825 248 481 <Divider>/</Divider> hello<Mask>@</Mask>
        shirlierandall
        <Mask>.com</Mask>
      </Copy>
      <ul className="flex justify-center py-8">
        <Icon>
          <a href="https://twitter.com/shirlierandall" target="_blank">
            <Twitter />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.instagram.com/shirlierandall/" target="_blank">
            <Instagram />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.facebook.com/shirlie.randall/" target="_blank">
            <Facebook />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.linkedin.com/in/shirlie-randall-4b4a9565/" target="_blank">
            <LinkedIn />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.youtube.com/channel/UCK-jWHW4pfzZSJXM6IbTQMw" target="_blank">
            <YouTube />
          </a>
        </Icon>
      </ul>
    </ContainerDefault>
  </ContactContainer>
);

const ContactContainer = styled.div`
  background: white;
`;

const Copy = styled.p`
  color: ${type.default};
  text-align: center;
  padding-top: 0.5em;
`;

const Divider = styled.span`
  color: ${accent};
`;

const Mask = styled.code`
  font-family: inherit;
`;

const Icon = styled.li`
  width: 64px;
  height: 50px;
  display: block;

  svg {
    width: 50px;
    height: 50px;
    fill: none;
    stroke: #dbabae;
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    svg {
      stroke: #f7c0c4;
    }
  }
`;
