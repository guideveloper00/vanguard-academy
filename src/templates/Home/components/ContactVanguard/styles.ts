import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  @media screen and (max-width: 1220px) {
    width: 840px;
  }
  @media screen and (max-width: 960px) {
    width: 680px;
  }
  @media screen and (max-width: 800px) {
    width: 480px;
  }
  @media screen and (max-width: 600px) {
    width: 360px;
  }
  @media screen and (max-width: 400px) {
    width: 320px;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 30px;
  width: 100%;
  height: auto;
  margin-bottom: 150px;
`;

export const SocialMediaLink = styled(Link)`
  display: flex;
  width: 100%;
`;

export const SocialMediaLinkContent = styled.div`
  cursor: pointer;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animatedTopToPlace 2s ease;
  position: relative;
  top: 0px;
  svg {
    margin-left: 10px;
    width: 25px;
    height: 25px;
  }
`;
