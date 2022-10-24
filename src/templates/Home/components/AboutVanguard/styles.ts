import styled from "styled-components";

import MedalV from "../../../../../public/badge-medal-svgrepo-com-2.svg";
import Medal from "../../../../../public/badge-medal-svgrepo-com.svg";
import Class from "../../../../../public/coding-browser-svgrepo-com.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const Content = styled.div`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  div {
    color: #edc967;
    display: inline-block;
  }
`;

export const OurMethodology = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OurMethodologySubtitle = styled.h3`
  display: flex;
  div {
    color: #edc967;
  }
`;
export const OurMethodologyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OurMethodologyText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  animation: animatedLeftToPlace 2s ease;
  position: relative;
  left: 0px;

  a {
    width: fit-content;
    color: rgb(59, 173, 227);
    &:hover {
      color: var(--background-header-hover);
    }
  }
`;

export const OurMethodologyImage = styled(Class)`
  width: 20%;
  animation: animatedRightToPlace 2s ease;
  position: relative;
  right: 0px;
`;

export const Assemble = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AssembleSubtitle = styled.h3`
  display: flex;
  div {
    color: #edc967;
  }
`;

export const AssembleText = styled.div`
  margin-top: 40px;
  animation: animatedTopToPlace 2s ease;
  position: relative;
  top: 0px;
`;

export const Medals = styled.div`
  margin-top: 20px;
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const ImageMasterMedal = styled(Medal)`
  fill: #edc967;
  position: relative;
  animation: animatedLeftToPlace 2s ease;
`;
export const ImageVanguardMedal = styled(MedalV)`
  fill: red;
  position: relative;
  animation: animatedRightToPlace 2s ease;
`;
