import App from "next/app";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import withApollo, { WithApollo } from "../lib/withApollo";

class MyApp extends App<WithApollo> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <>
        <Head>
          <title>Next.js + Prisma</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
