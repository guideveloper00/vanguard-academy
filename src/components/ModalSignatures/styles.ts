import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 45vw;
  height: 80vh;
  background-color: #363636;
  border-radius: 5px;
  padding: 50px;
  position: absolute;
`;

export const CardModalSignatures = styled.div`
  font-size: 1.2rem;
  margin-top: 50px;
  background: #232323;
  height: auto;
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

export const AssignLink = styled.a`
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 20%;
  background-color: #363636;
  color: rgb(225, 189, 45);
  &:hover {
    color: var(--background-button-hover);
  }
`;
