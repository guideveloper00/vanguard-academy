import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
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
  svg {
    margin-left: 10px;
    width: 25px;
    height: 25px;
  }
`;
