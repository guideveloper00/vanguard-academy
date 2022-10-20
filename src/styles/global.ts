import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  background-color: var(--background);
}
  
  [data-theme='dark'] {
  --testeee: yellow;
  --background: black;
  }

  [data-theme='light'] {
    --testeee: blue;
    --background: white;
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
    transition: all ease 0.4s;

    --webkit-font-smoothing: antialiased;

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;

      button {
        cursor: pointer;
      }
    }
  }


  html {
    @media (max-width: 1680px) {
      a, p, span, h1, h2 {
        font-size: 93.75%;
      }
    }
    @media (max-width: 1080px) {
      a, p, span, h1, h2  {
      font-size: 87.5%;
      }
    }
    @media (max-width: 720px) {
      a, p, span, h1, h2  {
      font-size: 75%;
    }
  }
}
`;
