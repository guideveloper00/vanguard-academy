import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  height: 100%;

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
  a {
    cursor: default;
  }
`;

export const IntroductionText = styled.div`
  height: 50%;
  display: flex;
  align-items: flex-start;
  width: 70%;
  flex-direction: column;
  animation: animatedLeftToPlace 2s ease;
  position: relative;
  left: 0px;
`;

export const Title = styled.h1`
  font-weight: normal;
`;

export const Subtitle = styled.h2`
  margin-top: 170px;
  line-height: 40px;
  font-weight: normal;
  @media screen and (max-width: 1080px) {
    margin-top: 100px;
  }
`;

export const AssignButton = styled.button`
  padding: 10px 25px;
  margin-top: 20px;
  font-size: 1.4rem;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: #373737;
  color: rgb(225, 189, 45);
  transition: background ease 0.4s, color ease 0.4s;
  &:hover {
    background-color: rgb(225, 189, 45);
    color: #fff;
  }
  div {
    color: #fff;
  }
`;

export const IntroductionImage = styled.div`
  svg {
    width: 550px;
    height: 600px;
    animation: animatedRightToPlace 2s ease;
    position: relative;
    right: 0px;
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
`;
