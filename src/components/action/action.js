import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { accent, border, background, type } from "../../theme";

export function Action({ to, value, classes, download = null }) {
  return (
    <ActionDefault
      to={to}
      className={`px-5 py-3 ${classes}`}
      download={download}
    >
      {value}
    </ActionDefault>
  );
}

export function ActionHeroMobile({ to, value, classes, download = null }) {
  return (
    <ActionHeroMobileBtn
      to={to}
      className={`px-5 py-3 ${classes}`}
      download={download}
    >
      {value}
    </ActionHeroMobileBtn>
  );
}

export function ActionSecondary({ to, value, classes }) {
  return (
    <ActionSecondaryBtn to={to} className={`px-5 py-3 ${classes}`}>
      {value}
    </ActionSecondaryBtn>
  );
}

const ActionDefault = styled(Link)`
  color: ${type.default};
  border: 2px solid ${border.light};
  border-radius: 200px;
  font-weight: 400;
  user-select: none;
  position: relative;
  z-index: 3;

  &:hover {
    background: ${accent};
    border-color: ${accent};
    cursor: pointer;
  }
`;

const ActionHeroMobileBtn = styled(ActionDefault)`
  background: ${background.light};
`;

const ActionSecondaryBtn = styled(ActionDefault)`
  border-color: transparent;

  &:hover {
    background: transparent;
    text-decoration: underline;
    border-color: transparent;
  }
`;
