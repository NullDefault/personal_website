import "../styles/globals.css";
import Head from "next/head";
import { Footer } from "../components/composites/Footer";
import Header from "../components/composites/Header";
import { ChakraWrapper } from "../components/structural/ChakraWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraWrapper cookies={pageProps.cookies}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>NullDefault</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraWrapper>
  );
}

export default MyApp;
export { getServerSideProps } from "../components/structural/ChakraWrapper";
