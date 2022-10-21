import Head from "next/head";

import { Footer } from "../../components/";
import { Header } from "../../components/";
import { AboutVanguard } from "./components/";
import { ClassesVanguard } from "./components/";
import { ContactVanguard } from "./components/";
import { Introduction } from "./components/";
import { SignaturePlans } from "./components/";
import * as S from "./styles";

export const HomeTemplate = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="keywords"
          content="aulas, trilhas, front-end, front end, back-end, back end, dados, cursos avançados, curso javascript, curso java, curso python"
        ></meta>
        <meta
          name="description"
          content="Vanguard - cursos de tecnologia do iniciante ao avançado"
        ></meta>
      </Head>
      <Header />
      <S.Container>
        <Introduction />
        <ClassesVanguard />
        <AboutVanguard />
        <SignaturePlans />
        <ContactVanguard />
      </S.Container>
      <Footer />
    </>
  );
};
