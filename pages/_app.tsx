import type { AppProps } from "next/app";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import { Header } from "../components/header";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};
const Main = styled.div`
  margin-top: 4rem;
  background-color: rgb(243 244 246);
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
