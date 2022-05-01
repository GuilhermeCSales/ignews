import { AppProps } from "next/dist/shared/lib/router/router";
("next/app");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
