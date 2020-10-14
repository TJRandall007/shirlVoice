import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { accent, border, type } from "../../theme";

export function Action({ to, value, classes }) {
  return (
    <ActionDefault to={to} className={`px-5 py-3 ${classes}`}>
      {value}
    </ActionDefault>
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

  &:hover {
    background: ${accent};
    border-color: ${accent};
    cursor: pointer;
  }
`;

const ActionSecondaryBtn = styled(ActionDefault)`
  border-color: transparent;

  &:hover {
    background: transparent;
    text-decoration: underline;
    border-color: transparent;
  }
`;
