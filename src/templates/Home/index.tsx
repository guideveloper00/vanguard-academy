import Head from "next/head";

import { Footer } from "../../components/";
import { Header } from "../../components/";
import { AboutVanguard } from "./components/";
import { ClassesVanguard } from "./components/";
import { ContactVanguard } from "./components/";
import { Introduction } from "./components/";
import { SignaturePlans } from "./components/";
import { IServerSideProps } from "./interfaces";
import * as S from "./styles";

export const HomeTemplate = ({ signatures, trails }: IServerSideProps) => {

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
        <Introduction signatures={signatures} />
        <ClassesVanguard trails={trails} />
        <AboutVanguard />
        <SignaturePlans />
        <ContactVanguard />
      </S.Container>
      <Footer />
    </>
  );
};
