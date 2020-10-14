import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { ContainerDefault } from "../container/container";
import { SectionTitle } from "../type/heading";

import {} from "../../theme";

const clients = [
  { name: "Disney", fileName: "disney" },
  { name: "Weight Watchers", fileName: "weight-watchers" },
  { name: "Unilever", fileName: "unilever" },
  { name: "Playmobil", fileName: "playmobil" },
  { name: "Co-op", fileName: "coop" },
  { name: "Tui", fileName: "tui" },
  { name: "Sky", fileName: "sky" },
  { name: "Morrisons", fileName: "morrisons" },
  { name: "Bauer Media", fileName: "bauer" },
  { name: "NHS", fileName: "nhs" },
  { name: "Virgin Radio", fileName: "virgin-radio" },
  { name: "ASDA", fileName: "asda" },
];

function Client({ name, fileName, i }) {
  const y = 40;

  return (
    <Parallax y={i % 2 ? [y, -y] : [-y, y]} styleOuter={{ flex: 1 }}>
      <ClientsBlock
        style={{
          backgroundImage: `url("https://storage.googleapis.com/shirl-voice/images/clients/${fileName}.svg")`,
        }}
        className="h-12 flex items-center justify-center"
      >
        {name}
      </ClientsBlock>
    </Parallax>
  );
}

export default function Clients(props) {
  return (
    <ClientsContainer className="py-32">
      <ContainerDefault>
        <SectionTitle classes="pb-16" text="Clients I've worked with" />
        <ClientsGrid className="grid grid-flow-col grid-cols-4 grid-rows-3 gap-x-4">
          {clients.map(({ name, fileName }, index) => (
            <Client key={index} i={index} name={name} fileName={fileName} />
          ))}
        </ClientsGrid>
      </ContainerDefault>
    </ClientsContainer>
  );
}

const ClientsContainer = styled.section`
  background: white;
`;

const ClientsGrid = styled.div``;

const ClientsBlock = styled.span`
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  text-indent: -1000%;
`;
