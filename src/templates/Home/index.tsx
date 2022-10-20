import Head from "next/head";

import { Footer } from "../../components/";
import { Header } from "../../components/";
import { AboutVanguard } from "./components/";
import { ClassesVanguard } from "./components/";
import { ContactVanguard } from "./components/";
import { Introduction } from "./components/";
import { SignaturePlans } from "./components/";
import * as S from "./styles";

// eslint-disable-next-line @typescript-eslint/naming-convention
// interface ServerSideProps {
//   product: {
//     priceId: number;
//     priceAmount: number;
//   };
// }

// { product }: ServerSideProps

export const HomeTemplate = () => {
  // console.log(product);
  return (
    <>
      <Head>
        <title>Home</title>
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
