import Head from "next/head";

import { ThemeButton } from "../../components/ThemeButton";
import * as S from "./styles";

export const HomeTemplate = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <ThemeButton />
      <S.Teste>testeaeeeeeeeeeeeeeeeee</S.Teste>
    </>
  );
};
