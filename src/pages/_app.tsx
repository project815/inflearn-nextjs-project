import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { GlobalStyles } from "@/styles/globalscss";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/slick-theme.css";
import "../styles/slick.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const uploadLink: ApolloLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql", // Replace with your GraphQL endpoint
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <>
        <Global styles={GlobalStyles}></Global>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </ApolloProvider>
  );
}
