import type { NextPage } from "next";
// import { useDispatch } from "react-redux";

// import { Reducers } from "../shared/store/reducers";
import { HomeTemplate } from "../templates/Home";

const Home: NextPage = () => {
  // const dispatch = useDispatch();
  // const authActions = Reducers.authReducer.authActions;

  return <HomeTemplate />;
};

export default Home;
