import styled from "styled-components";

export const Container = styled.div`
  background-color: #262626;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  max-width: 1120px;
  h2 {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 1220px) {
    max-width: 840px;
  }
  @media screen and (max-width: 960px) {
    max-width: 680px;
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

export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1120px;
  gap: 5%;
  @media screen and (max-width: 1220px) {
    max-width: 840px;
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    width: 680px;
     gap: 5%;
  }
  @media screen and (max-width: 960px) {
     gap: 5%;
  }
`;

export const TrailIntroduction = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 40px;
`;

export const TrailContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  animation: animatedTopToPlace 2s ease;
  position: relative;
  top: 0px;
  a {
    width: fit-content;
    text-decoration: none;
    color: rgb(59, 173, 227);
    &:hover {
      color: var(--background-header-hover);
    }
  }
`;
