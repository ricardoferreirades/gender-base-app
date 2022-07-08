import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled: boolean }>`
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #0496ff;
  margin-top: 0.5rem;
  opacity: ${(disabled) => (disabled ? 0.5 : 1)};
  cursor: ${(disabled) => (disabled ? "not-allowed" : "pointer")};
`;
