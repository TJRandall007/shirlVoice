import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { accent, border, type } from "../../theme";

export function Action({ to, value }) {
  return (
    <ActionDefault to={to} className="px-5 py-3">
      {value}
    </ActionDefault>
  );
}

export function ActionSecondary({ to, value }) {
  return (
    <ActionSecondaryBtn to={to} className="px-5 py-3">
      {value}
    </ActionSecondaryBtn>
  );
}

const ActionDefault = styled(Link)`
  color: ${type.default};
  border: 2px solid ${border.light};
  border-radius: 200px;
  font-weight: 400;

  &:hover {
    background: ${accent};
    border-color: ${accent};
  }
`;

const ActionSecondaryBtn = styled(ActionDefault)`
  border-color: transparent;
`;
