import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  @keyframes animatedTopToPlace {
    0% {
      top: -50px;
      opacity: 0;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  @keyframes animatedRightToPlace {
    0% {
      right: -50px;
      opacity: 0;
    }
    100% {
      right: 0px;
      opacity: 1;
    }
  }
  @keyframes animatedLeftToPlace {
    0% {
      left: -50px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
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
  
  [data-theme='dark'] {
  --testeee: white;
  --background: #171717;
  --background-header: #262626;
  --background-button: rgba(155, 16, 225, 1);
  --background-button-hover: #dadada;
  }

  [data-theme='light'] {
    --testeee: black;
    --background: white;
    --background-header: rgb(249, 249, 249);
    --background-button: rgba(155, 16, 225, 1);
    --background-button-hover: #8a8a8a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    list-style: none;

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
