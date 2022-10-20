import Link from "next/link";

import useWindowDimensions from "../../shared/utils/WindowWidth";
import { ThemeButton } from "../ThemeButton";
import * as S from "./styles";

export const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <S.Content>
        {width! > 960 && (
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
        )}
        {width! < 960 && <ThemeButton />}
      </S.Content>
    </S.Container>
  );
};
