import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(38, 38, 38);
`;

export const Content = styled.div`
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  padding: 50px 0;
  max-width: 1120px;
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

export const SignatureArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 1220px) {
    flex-direction: column;
    height: 600px;
  }
`;

export const SignatureCard = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  font-size: 1.1rem;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
`;

export const AssignLink = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 54px;
  background-color: #363636;
  width: 100%;
  color: rgb(225, 189, 45);
  &:hover {
    color: var(--background-button-hover);
  }
`;
