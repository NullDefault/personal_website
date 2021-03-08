import "../styles/globals.css";
import Head from "next/head";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import {ChakraWrapper} from "../components/ChakraWrapper";

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
export { getServerSideProps } from "../components/ChakraWrapper";