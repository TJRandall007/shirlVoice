import React, { useEffect, useState } from "react";
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

function ClientInner({ name, fileName, i }) {
  return (
    <ClientsBlock
      style={{
        backgroundImage: `url("https://storage.googleapis.com/shirl-voice/images/clients/${fileName}.svg")`,
      }}
      className="flex items-center justify-center h-24 lg:h-52"
    >
      {name}
    </ClientsBlock>
  );
}

function Client({ name, fileName, i }) {
  const [resi, setResi] = useState(3);

  function handleResize() {
    const w = document.documentElement.clientWidth;

    const size = w > 768 ? 2 : w > 375 ? 1 : 0;

    setResi(size);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y = 40;

  return resi > 0 ? (
    <Parallax y={i % 2 ? [y, -y] : [-y, y]} styleOuter={{ flex: 1 }}>
      <ClientInner name={name} fileName={fileName} i={i} />
    </Parallax>
  ) : (
    <ClientInner name={name} fileName={fileName} i={i} />
  );
}

export default function Clients(props) {
  return (
    <ClientsContainer className="py-10 lg:py-32">
      <ContainerDefault>
        <SectionTitle classes="pb-6 md:pb-16" text="Clients I've worked with" />
        <ClientsGrid className="grid grid-flow-col grid-rows-6 gap-x-4 md:grid-rows-3">
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  text-indent: -1000%;
`;
