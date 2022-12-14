import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../services/api";
import { RootState } from "../shared/store";
import { authActions } from "../shared/store/reducers/auth";
import { RegisterTemplate } from "../templates/Register";

const Register: NextPage = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  function verify() {
    api.get("/login").then((result) => {
      dispatch(authActions.auth(result.data.loggedIn));
      console.log(result.data.loggedIn);
    });
  }

  verify();

  return isLoggedIn === false ? <RegisterTemplate /> : <>not found</>;
};

export default Register;
