import React, { useState } from "react";
import styled from "styled-components";

import { accent, border, type } from "../../theme";

const email = "hello@shirlierandall.com";
const phoneDisplay = "+44 (0) 7825 248481";
const phoneHref = "+447825248481";

export default function ContactActions({ compact = false }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      window.prompt("Copy Shirlie’s email address:", email);
    }
  };

  return (
    <Wrapper className={compact ? "py-4" : "py-8"}>
      <Buttons>
        <Button href={`mailto:${email}?subject=Voice-over%20enquiry`}>
          Email Shirlie
        </Button>
        <ButtonAsButton type="button" onClick={copyEmail}>
          {copied ? "Email copied" : "Copy email address"}
        </ButtonAsButton>
        <Button href={`tel:${phoneHref}`}>Call {phoneDisplay}</Button>
      </Buttons>
      <Email href={`mailto:${email}?subject=Voice-over%20enquiry`}>
        {email}
      </Email>
      <Status aria-live="polite">
        {copied ? "Email address copied." : ""}
      </Status>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

const buttonStyles = `
  color: ${type.default};
  background: white;
  border: 2px solid ${border.light};
  border-radius: 200px;
  font: inherit;
  padding: 0.75rem 1.25rem;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: ${accent};
    border-color: ${accent};
  }
`;

const Button = styled.a`
  ${buttonStyles}
`;

const ButtonAsButton = styled.button`
  ${buttonStyles}
`;

const Email = styled.a`
  color: ${type.default};
  display: inline-block;
  margin-top: 1rem;
  text-decoration: underline;
`;

const Status = styled.span`
  display: block;
  min-height: 1.5rem;
  margin-top: 0.25rem;
`;
