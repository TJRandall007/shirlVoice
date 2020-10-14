import React from "react";
import { Link as A } from "gatsby";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { accent, background } from "../../theme";

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
        <Brand />
        <Navigation>
          <Links>
            <Link to="/" value="Home" path={props.path} />
            <Link to="/showreels" value="Showreels" path={props.path} />
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

const Brand = styled.div`
  width: 60px;
  height: 60px;
  background: #ddd;
  margin-top: 20px;
  float: left;
`;

const Navigation = styled.nav`
  text-align: right;
`;

const Links = styled.ul``;

const LinkOuter = styled.li`
  display: inline;

  &.active {
    a {
      border-bottom: 2px solid ${accent};
    }
  }
`;
