import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "../shared/store";
import { GlobalStyle } from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== "/register") {
      localStorage.removeItem("reload");
    }
  }, [router]);

  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true}>
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
