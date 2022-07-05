import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
`;

export const Input = styled.input<{ error?: boolean }>`
  border: 1px solid ${({ error }) => (error ? "red" : "gray")};
  display: block;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 40px;
`;

export const Label = styled.label`
  display: block;
  padding: 0.5rem 0;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  height: 40px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #0496ff;
  margin-top: 0.5rem;
`;
