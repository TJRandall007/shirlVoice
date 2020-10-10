import React from "react";
import styled from "styled-components";

import { ContainerDefault } from "../container/container";
import { MainTitle } from "../type/heading";
import { background } from "../../theme";

export default function Lead(props) {
  return (
    <LeadContainer className="hero py-12">
      <ContainerDefault>
        <MainTitle text={props.title} />
      </ContainerDefault>
    </LeadContainer>
  );
}

const LeadContainer = styled.div`
  background: ${background.light};
  text-align: center;
`;
