import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { ContainerDefault } from "../container/container";
import { SectionTitle } from "../type/heading";

// Images
import Asda from "../../images/clients/asda.svg";
import Bauer from "../../images/clients/bauer.svg";
import Coop from "../../images/clients/coop.svg";
import Disney from "../../images/clients/disney.svg";
import Morrisons from "../../images/clients/morrisons.svg";
import Nhs from "../../images/clients/nhs.svg";
import Playmobil from "../../images/clients/playmobil.svg";
import Sky from "../../images/clients/sky.svg";
import Tui from "../../images/clients/tui.svg";
import Unilever from "../../images/clients/unilever.svg";
import Virgin from "../../images/clients/virgin-radio.svg";
import WW from "../../images/clients/weight-watchers.svg";

const clients = [
  { name: "Disney", fileName: Disney },
  { name: "Weight Watchers", fileName: WW },
  { name: "Unilever", fileName: Unilever },
  { name: "Playmobil", fileName: Playmobil },
  { name: "Co-op", fileName: Coop },
  { name: "Tui", fileName: Tui },
  { name: "Sky", fileName: Sky },
  { name: "Morrisons", fileName: Morrisons },
  { name: "Bauer Media", fileName: Bauer },
  { name: "NHS", fileName: Nhs },
  { name: "Virgin Radio", fileName: Virgin },
  { name: "ASDA", fileName: Asda },
];

function ClientInner({ name, fileName, i }) {
  return (
    <ClientsBlock
      style={{
        backgroundImage: `url("${fileName}")`,
      }}
      role="img"
      aria-label={`${name} client logo`}
      className="flex items-center justify-center h-20 lg:h-32"
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

  const y = 18;

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
    <ClientsContainer className="py-10 lg:py-20">
      <ContainerDefault>
        <SectionTitle classes="pb-6 md:pb-10" text="Selected clients" />
        <ClientsGrid className="grid grid-flow-col grid-rows-6 gap-x-4 md:grid-rows-3">
          {clients.map(({ name, fileName }, index) => (
            <Client key={index} i={index} name={name} fileName={fileName} />
          ))}
        </ClientsGrid>
        <ClientSummary>
          Voice-over work for leading brands and broadcasters, including Disney,
          Sky, NHS, Playmobil, Virgin Radio, Morrisons and more.
        </ClientSummary>
      </ContainerDefault>
    </ClientsContainer>
  );
}

const ClientsContainer = styled.section`
  background: white;
`;

const ClientsGrid = styled.div``;

const ClientSummary = styled.p`
  color: #272b44;
  max-width: 760px;
  margin: 2.5rem auto 0;
  text-align: center;
`;

const ClientsBlock = styled.span`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  text-indent: -1000%;
  filter: saturate(1.15) contrast(1.08);
`;
