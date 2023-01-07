import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../services/api";
import { RootState } from "../shared/store";
import { authActions } from "../shared/store/reducers/auth";
import { LoginTemplate } from "../templates/Login";

const Login: NextPage = () => {
  const dispatch = useDispatch();

  function verify() {
    api.get("/login").then((result) => {
      dispatch(authActions.auth(result.data.loggedIn));
    });
  }
  useEffect(() => {
    verify();
  },[])


  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  console.log(isLoggedIn);

  const renderPage = isLoggedIn == false ? <LoginTemplate /> : <>not found</>;

  return renderPage;
};

export default Login;
