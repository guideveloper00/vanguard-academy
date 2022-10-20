import type { NextPage } from "next";
// import { useDispatch } from "react-redux";

// import { Reducers } from "../shared/store/reducers";
import { HomeTemplate } from "../templates/Home";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ServerSideProps {
  product: {
    priceId: number;
    priceAmount: number;
  };
}

// { product }: ServerSideProps

const Home: NextPage<ServerSideProps> = () => {
  // const dispatch = useDispatch();
  // const authActions = Reducers.authReducer.authActions;
  // product={product}

  return <HomeTemplate />;
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const product = {
//     priceId: 2,
//     priceAmount: 5,
//   };

//   return {
//     props: {
//       product,
//     },
//     revalidate: 60 * 60 * 24, // 24 hours
//   };
// };
