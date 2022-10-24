import { AiOutlineHome } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--background-header);
  display: flex;
  justify-content: center;
`;

export const Content = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  width: 1120px;
  justify-content: space-between;

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

export const Logo = styled.div`
  width: 300px;
`;

export const ImagePosition = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  width: 45px;
  height: 45px;
  border: 1px solid black;
`;

export const PagesNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 960px) {
    display: none;
  }
  div + div {
    margin-left: 10px;
  }
`;

export const HomeIcon = styled(AiOutlineHome)`
  margin-left: 10px;
`;

export const ClassIcons = styled(SiGoogleclassroom)`
  margin-left: 10px;
`;

export const PostsIcon = styled(RiPagesLine)`
  margin-left: 10px;
`;

export const Posts = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  &:hover {
    color: var(--background-button-hover);
  }
`;

export const AccountNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  color: rgb(225, 189, 45);
  width: 300px;
  @media screen and (max-width: 960px) {
    display: none;
  }
  div + div {
    margin-left: 10px;
  }
`;

export const Login = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  &:hover {
    color: var(--background-button-hover);
  }
`;

export const Register = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: #373737;
  transition: background ease 0.4s, color ease 0.4s;
  &:hover {
    background-color: rgb(225, 189, 45);
    color: var(--background-button-hover);
  }
`;

export const DropDownButton = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: #373737;
  transition: background ease 0.4s, color ease 0.4s;
  &:hover {
    color: var(--background-button-hover);
  }
`;

export const DropDownMenu = styled.div`
  position: relative;
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const DropDownMenuContent = styled.div`
  position: absolute;
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
  top: 60px;
  right: 0px;
  height: fit-content;
  background-color: var(--background-header);
  width: 150px;

  div {
    margin-top: 5px;
    &:first-child {
      margin-top: 0px;
    }
  }
`;
