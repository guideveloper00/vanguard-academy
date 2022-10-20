import styled from "styled-components";

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  width: 45px;
  background-color: #373737;
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: AnimateThemeChange 1s ease;
  }

  @keyframes AnimateThemeChange {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ThemeButtonWithoutAnimation = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  width: 45px;
  background-color: #373737;
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
