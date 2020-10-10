import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { accent, border, type } from "../../theme";

export function Action(props) {
  return (
    <ActionDefault to={props.to} className="px-5 py-3">
      {props.value}
    </ActionDefault>
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
