import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 940px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  form {
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px) {
      max-width: 360px;
    }
    @media screen and (max-width: 400px) {
      max-width: 320px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    a {
      color: rgb(59, 173, 227);
      &:hover {
        color: var(--background-header-hover);
      }
    }
    input {
      height: 40px;
      width: 100%;
      margin-top: 30px;
      padding-left: 10px;
      border: none;
      border-radius: 5px;
    }
    span {
      height: 1rem;
      color: red;
    }
  }
`;

export const Captcha = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const BackIcon = styled(IoMdArrowBack)`
  margin-right: 10px;
`;

export const LinkHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  color: rgb(59, 173, 227);
  align-items: center;
  &:hover {
    color: var(--background-header-hover);
  }
`;

export const RegisterForm = styled.div`
  width: fit-content;
  animation: animatedLeftToPlace 2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0px;
`;

export const CreateAccount = styled.button`
  padding: 10px 25px;
  font-size: 1.4rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: #373737;
  color: rgb(225, 189, 45);
  transition: background ease 0.4s, color ease 0.4s;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  &:hover {
    background-color: rgb(225, 189, 45);
    color: #fff;
  }
  div {
    color: #fff;
  }
`;

export const Logo = styled(Image)`
  border-radius: 50%;
`;

export const LogoContent = styled.div`
  height: 200px;
  width: 200px;
`;
