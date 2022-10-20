import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 25px;
  justify-content: center;
  display: flex;
  align-items: center;

  cursor: pointer;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`;

export const Text = styled.div`
  color: white;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  @media screen and (max-width: 1080px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 5px;
  }
`;

export const NotSelectedContainer = styled.div`
  width: 100%;
  padding: 10px 25px;
  justify-content: center;
  display: flex;
  background-color: #363636;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  color: var(--background-button-hover);
  &:hover {
    color: #fff;
  }
`;

export const NotSelectedText = styled.div``;

export const NotSelectedIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  @media screen and (max-width: 1080px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 5px;
  }
`;

export const TrailIntroduction = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 15px;
`;
63;
