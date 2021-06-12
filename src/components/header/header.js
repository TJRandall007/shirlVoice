import React from "react";
import { Link as A } from "gatsby";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { accent, background, type } from "../../theme";

import LogoImg from "../../images/SV.png";

function Link(props) {
  const active = props.path === props.to;

  return (
    <LinkOuter className={active ? "pl-3 active" : "pl-3"}>
      <A className="p-1" to={props.to}>
        {props.value}
      </A>
    </LinkOuter>
  );
}

export default function Header(props) {
  return (
    <HeaderContainer className={props.abs ? "floating" : ""}>
      <ContainerDefault>
        <Brand href="/" title="Go to homepage">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 304.8 422"
          >
            <path
              class="st0"
              d="M230.8 320.2c-2.9-.8-4.8-3-6-5.2-1.1-1.9-1.8-4.6-2.1-8-.3-4.4-.6-9.4-.7-14.7-.2-5.9-1-11.9-2.5-17.7-1.6-6.3-4.8-12.2-9.5-17.5-1.7-1.9-3.7-3.7-6-5.4-3.3-2.4-3.3-7.4 0-9.7 4.6-3.2 8.5-7 11.7-11.3 5.7-7.8 8.7-17.1 8.7-27.5 0-9.5-2.2-17.7-6.7-24.5-4.2-6.5-9.9-12.1-16.8-16.6-6.5-4.2-13.8-8-21.6-11.2-7.5-3.1-15.2-5.9-22.8-8.6-7.3-2.5-14-5.2-20.1-8-5.5-2.6-10-5.6-13.3-8.9-2.7-2.7-4-6-4-10.1 0-5.9 2.3-10.4 7.4-14 5.5-4 14-6 25.4-6 8.2 0 15.7 1.3 22.3 3.8 6.3 2.4 11.7 6.2 15.9 11.1 4.2 4.9 7.2 11.4 8.8 19.1.6 2.8 3 4.8 5.9 4.8h5.1c3.3 0 6-2.7 6-6V84.7c0-3.3-2.7-6-6-6h-4.4c-1.7 0-3.3.7-4.4 1.9l-5.5 5.9c-1.9 2-4.9 2.5-7.3 1.2-4-2.2-8.3-4-12.9-5.4-7.9-2.4-16.6-3.6-26-3.6-11 0-21.1 1.8-30.1 5.3-9.3 3.6-16.8 8.8-22.5 15.5-5.9 7-8.9 15.2-8.9 24.4 0 9.1 2.3 16.9 6.9 23.4 4.3 6.1 10.1 11.4 17.1 15.6 6.6 4 14 7.6 21.8 10.6 7.5 2.9 15.2 5.7 22.9 8.4 7.3 2.6 14.1 5.4 20.3 8.4 5.7 2.8 10.2 6.1 13.5 9.7 2.8 3.2 4.2 7 4.2 11.7 0 5.7-1.4 10.3-4.4 14-3 3.9-7.5 7-13.3 9.1-6.2 2.3-13.8 3.4-22.5 3.4-8.3 0-15.7-.9-21.9-2.8-6.1-1.8-11.5-4.3-15.8-7.5-4.3-3.1-8.5-6.5-10.6-11.1-2-4.3-4.8-14.1-6-19.2-.7-2.7-3.1-4.6-5.8-4.6h-5.2c-3.3 0-6 2.7-6 6v110.9c0 3.3-2.7 6-6 6h-2.4c-3.3 0-6 2.7-6 6v4.1c0 3.3 2.7 6 6 6H132c3.3 0 6-2.7 6-6v-4.1c0-3.3-2.7-6-6-6h-4c-3.3 0-6-2.7-6-6v-50c0-3.3 2.7-6 6-6h17.8c3.7.3 7.5.5 11.3.5h1.6c3.7.5 6.8 1.2 9.2 2.3 3.8 1.7 6.5 3.9 8.1 6.6 1.8 3.1 3 6.6 3.6 10.5.6 4.4 1 9.1 1.1 13.8.1 5.2.4 10.2 1 15.1.6 5.5 2.1 10.5 4.6 14.9 2.7 4.9 6.9 8.7 12.6 11.5 5.4 2.7 12.6 3.9 21.7 3.9 4.8 0 9.3-.2 13.3-.7 2.5-1.1 4.2-10.1-3.1-12.1z"
            />
            <path
              class="st0"
              d="M152.4 7.8C71.4 7.8 5.7 73.5 5.7 154.6v113c0 81 65.7 146.7 146.7 146.7 81 0 146.7-65.7 146.7-146.7v-113c0-81.1-65.7-146.8-146.7-146.8zm0 388.3c-64.3 0-116.3-52.1-116.3-116.3v-1.6c0-1.7 1.3-3 3-3h5.8c4.9 0 8.8-3.9 8.8-8.8V261c0-4.9-3.9-8.8-8.8-8.8h-5.8c-1.7 0-3-1.3-3-3v-23.7c0-1.7 1.3-3 3-3h9.8c4.9 0 8.8-3.9 8.8-8.8v-5.4c0-4.9-3.9-8.8-8.8-8.8h-9.8c-1.7 0-3-1.3-3-3v-23.7c0-1.7 1.3-3 3-3h5.8c4.9 0 8.8-3.9 8.8-8.8v-5.4c0-4.9-3.9-8.8-8.8-8.8h-5.8c-1.7 0-3-1.3-3-3v-1.6c0-64.2 52-116.3 116.3-116.3S268.7 78 268.7 142.2v1.6c0 1.7-1.3 3-3 3h-5.8c-4.9 0-8.8 3.9-8.8 8.8v5.4c0 4.9 3.9 8.8 8.8 8.8h5.8c1.7 0 3 1.3 3 3v23.7c0 1.7-1.3 3-3 3h-9.8c-4.9 0-8.8 3.9-8.8 8.8v5.4c0 4.9 3.9 8.8 8.8 8.8h9.8c1.7 0 3 1.3 3 3v23.7c0 1.7-1.3 3-3 3h-5.8c-4.9 0-8.8 3.9-8.8 8.8v5.4c0 4.9 3.9 8.8 8.8 8.8h5.8c1.7 0 3 1.3 3 3v1.6c0 64.2-52.1 116.3-116.3 116.3z"
            />
          </svg>
        </Brand>
        <Navigation>
          <Links>
            <Link to="/" value="Home" path={props.path} />
            <Link to="/audio-samples" value="Audio Samples" path={props.path} />
            <Link to="/video-samples" value="Video Samples" path={props.path} />
            <Link to="/studio" value="Studio" path={props.path} />
            <Link to="/about" value="About" path={props.path} />
            <Link to="/contact" value="Contact" path={props.path} />
          </Links>
        </Navigation>
      </ContainerDefault>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 100px;
  line-height: 100px;
  background: ${background.light};
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  &.floating {
    background: transparent;
    position: absolute;
  }
`;

const Brand = styled.a`
  width: 70px;
  margin-top: 20px;
  float: left;

  svg {
    fill: ${type.default};
  }
`;

const Navigation = styled.nav`
  text-align: right;

  a {
    color: ${type.default};
    font-weight: 500;
  }
`;

const Links = styled.ul``;

const LinkOuter = styled.li`
  display: inline;

  &.active {
    a {
      border-bottom: 3px solid ${accent};
    }
  }
`;
