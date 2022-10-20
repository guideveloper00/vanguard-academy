import Link from "next/link";
import { useState } from "react";

import useWindowDimensions from "../../shared/utils/WindowWidth";
import { ActiveLink } from "./components/ActiveLink";
import * as S from "./styles";

export const Header = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const { width } = useWindowDimensions();

  const handleIsDropDownMenuOpen = () => {
    setIsDropDownMenuOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo>Vanguard</S.Logo>
        {width! > 1220 && (
          <>
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
              <Link href={"/login"}>
                <S.Login>Entrar</S.Login>
              </Link>
              <Link href={"/register"}>
                <S.Register>Criar conta</S.Register>
              </Link>
            </S.AccountNavigation>
          </>
        )}
        {width! < 1220 && (
          <S.DropDownMenu>
            <S.DropDownButton onClick={handleIsDropDownMenuOpen}>
              Menu
            </S.DropDownButton>
            {isDropDownMenuOpen && (
              <S.DropDownMenuContent>
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
              </S.DropDownMenuContent>
            )}
          </S.DropDownMenu>
        )}
      </S.Content>
    </S.Container>
  );
};
