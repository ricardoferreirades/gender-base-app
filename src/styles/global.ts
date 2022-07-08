import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #e5224d;
    --green: #33CC95;
    --blue: #0496ff;
    --darkgray: #333333;
    --lightgray: #f2f2f2;
    --light: #ffffff;
}

.App {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

table {
  border-collapse: collapse;
  border: 1px solid;
  width: 100%;
}

table td,
th {
  padding: 0.2rem 0.4rem;
  border: 1px solid;
}

.form-area {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
`;
