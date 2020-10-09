import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";

function Link(props) {
  return (
    <LinkOuter className="pl-2">
      <a className="p-2" href={props.href}>
        {props.value}
      </a>
    </LinkOuter>
  );
}

export default function Header(props) {
  return (
    <HeaderContainer className={props.abs ? "absolute" : "relative"}>
      <ContainerDefault>
        <Navigation>
          <Links>
            <Link value="Home" />
            <Link value="Showreels" />
            <Link value="Studio" />
            <Link value="About" />
            <Link value="Contact" />
          </Links>
        </Navigation>
      </ContainerDefault>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 80px;
  line-height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

const Navigation = styled.nav`
  text-align: right;
`;

const Links = styled.ul``;

const LinkOuter = styled.li`
  display: inline;
`;
