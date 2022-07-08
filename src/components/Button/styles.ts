import styled, { css } from "styled-components";

export const ButtonContainer = styled.button<{ disabled: boolean }>`
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  background-color: var(--blue);
  transition: all 0.3 ease;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
  }}
`;
