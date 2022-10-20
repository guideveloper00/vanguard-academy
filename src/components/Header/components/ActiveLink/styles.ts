import styled from "styled-components";

export const Container = styled.div``;

export const ActiveTrail = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  color: rgb(59, 173, 227);
`;

export const Trails = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  color: var(--background-button-hover);
  &:hover {
    color: #fff;
  }
`;
