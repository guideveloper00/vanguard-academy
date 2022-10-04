import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    background-color: var(--background)
  }

  [data-theme='dark'] {
  --background: #111111;
  --text: white;
}

[data-theme='light'] {
  --background: #eeeeee;
  --text: black;
}

  html {
    @media (max-width: 1680px) {
      font-size: 93.75%;
    }
    @media (max-width: 1080px) {
      font-size: 87.5%;
    }
    @media (max-width: 720px) {
      font-size: 75%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    list-style: none;
    font-style: italic;

    --webkit-font-smoothing: antialiased;

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;

      button {
        cursor: pointer;
      }
    }
  }
`;
