import styled, { css } from "styled-components";
import { MessageType } from "../Message";

export const MessageContainer = styled.div<{ type: MessageType }>`
  color: var(--light);
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  ${({ type }) => {
    if (type === "success") {
      return css`
        background-color: var(--green);
      `;
    } else if (type === "error") {
      return css`
        background-color: var(--red);
      `;
    } else {
      return css`
        background-color: var(--blue);
      `;
    }
  }};

  .text,
  .close {
    padding: 0.5rem 1rem;
  }

  .close {
    display: flex;
    background-color: inherit;
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
