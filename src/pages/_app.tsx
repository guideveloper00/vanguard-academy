import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";

import store from "../shared/store";
import { GlobalStyle } from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
