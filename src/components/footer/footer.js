import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { background } from "../../theme";

export default function Footer(props) {
  return (
    <FooterContainer className="py-4">
      <ContainerDefault>
        © {new Date().getFullYear()} Shirlie Randall
      </ContainerDefault>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  color: white;
  background: ${background.dark};
  display: block;
`;
