import type { NextPage } from "next";
import Head from "next/head";
// import { useDispatch } from "react-redux";

// import { Reducers } from "../shared/store/reducers";
import { ThemeButton } from "../components";
import * as S from "../styles";

const Home: NextPage = () => {
  // const dispatch = useDispatch();
  // const authActions = Reducers.authReducer.authActions;

  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <ThemeButton />
      <S.Teste>teste</S.Teste>
    </>
  );
};

export default Home;
