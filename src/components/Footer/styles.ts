import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--background-header);
`;

export const Content = styled.div`
  height: 80px;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1220px) {
    max-width: 840px;
  }
  @media screen and (max-width: 960px) {
    max-width: 680px;
    justify-content: center;
  }
  @media screen and (max-width: 800px) {
    max-width: 480px;
  }
  @media screen and (max-width: 600px) {
    max-width: 360px;
  }
  @media screen and (max-width: 400px) {
    max-width: 320px;
  }
`;

export const Vanguard = styled.div`
  width: 300px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const VanguardRights = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  a {
    margin-left: 5px;
    color: rgb(59, 173, 227);
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
