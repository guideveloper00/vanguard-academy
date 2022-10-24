import type { GetStaticProps, NextPage } from "next";
// import { useDispatch } from "react-redux";

// import { Reducers } from "../shared/store/reducers";
import { HomeTemplate } from "../templates/Home";

type ISignature = {
  signatureTime: string;
  price: number;
  link: string;
};

interface IServerSideProps {
  signatures: ISignature[];
}

// { product }: ServerSideProps

const Home: NextPage<IServerSideProps> = (props: IServerSideProps) => {
  // const dispatch = useDispatch();
  // const authActions = Reducers.authReducer.authActions;
  // product={product}

  return <HomeTemplate signatures={props.signatures} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const signatures = [
    {
      signatureTime: "1 mês",
      price: 50,
      link: "/teste",
    },
    {
      signatureTime: "3 mêses",
      price: 200,
      link: "/teste",
    },
    {
      signatureTime: "1 ano",
      price: 500,
      link: "/teste",
    },
  ];

  return {
    props: {
      signatures,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
