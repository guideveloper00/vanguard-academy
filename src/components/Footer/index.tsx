import Link from "next/link";

import { ThemeButton } from "../ThemeButton";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <>
          <S.Vanguard>Vanguard - academy</S.Vanguard>
          <ThemeButton />
          <S.VanguardRights>
            Created by{" "}
            <Link href={"https://github.com/guideveloper00"}>
              Guilherme Gonçalves
            </Link>
          </S.VanguardRights>
        </>
      </S.Content>
    </S.Container>
  );
};
