import React from "react";
import styled from "styled-components";

import { accent, border, type } from "../../theme";

export function Action(props) {
  return <ActionDefault className="px-5 py-3">{props.value}</ActionDefault>;
}

const ActionDefault = styled.a`
  color: ${type.default};
  border: 2px solid ${border.light};
  border-radius: 200px;
  font-weight: 400;

  &:hover {
    background: ${accent};
    border-color: ${accent};
  }
`;
