import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
