import styled from "styled-components";

export const InputContainer = styled.input<{ error?: boolean }>`
  border: 1px solid ${({ error }) => (error ? "red" : "gray")};
  display: block;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 40px;
`;
