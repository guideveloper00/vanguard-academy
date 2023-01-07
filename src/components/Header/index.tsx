import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../services/api";
import { RootState } from "../../shared/store";
import { authActions } from "../../shared/store/reducers/auth";
import { ActiveLink } from "./components/ActiveLink";
import * as S from "./styles";

export const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleIsDropDownMenuOpen = () => {
    setIsDropDownMenuOpen((prev) => !prev);
  };

  function verify() {
    api.get("/login").then((result) => {
      dispatch(authActions.auth(result.data.loggedIn));
      setIsLoading(false);
    });
  }
  verify();

  const AccountNav = isLoggedIn ? (
    <button>Sair</button>
  ) : (
    <>
      <Link href={"/login"}>
        <S.Login>Entrar</S.Login>
      </Link>
        <S.Register href={"/register"}>Criar conta</S.Register>
    </>
  );

  const DropdownItems =
    isDropDownMenuOpen &&
    (isLoggedIn ? (
      <>
        <Link href="/posts">
          <div>Posts</div>
        </Link>
        <Link href="/classes">
          <div>Aulas</div>
        </Link>
      </>
    ) : (
      <>
        <Link href="/register">
          <div>Criar conta</div>
        </Link>
        <Link href="/login">
          <div>Entrar</div>
        </Link>
        <Link href="/posts">
          <div>Posts</div>
        </Link>
        <Link href="/classes">
          <div>Aulas</div>
        </Link>
      </>
    ));

  return (
    <S.Container>
      <S.Content>
        <S.Logo>Vanguard</S.Logo>
        <S.PagesNavigation>
          <ActiveLink href={"/"}>
            <>
              Home
              <S.HomeIcon />
            </>
          </ActiveLink>
          <ActiveLink href={"/classes"}>
            <>
              Aulas
              <S.ClassIcons />
            </>
          </ActiveLink>
          <ActiveLink href={"/posts"}>
            <>
              Posts
              <S.PostsIcon />
            </>
          </ActiveLink>
        </S.PagesNavigation>
        <S.AccountNavigation>
          {isLoading ? null : AccountNav}
        </S.AccountNavigation>
        <S.DropDownMenu>
          <S.DropDownButton onClick={handleIsDropDownMenuOpen}>
            Menu
          </S.DropDownButton>
          <S.DropDownMenuContent>
            {isLoading ? null : DropdownItems}
          </S.DropDownMenuContent>
        </S.DropDownMenu>
      </S.Content>
    </S.Container>
  );
};
