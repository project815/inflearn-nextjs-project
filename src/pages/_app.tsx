import Layout from "@/components/layout";
import "@/styles/globals.css";
import { GlobalStyles } from "@/styles/globalscss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import "../styles/slick-theme.css";
import "../styles/slick.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <>
        <Global styles={GlobalStyles}></Global>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloProvider>
  );
}
