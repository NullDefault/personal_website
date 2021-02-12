import '../styles/globals.css';
import Head from 'next/head';
import {ChakraProvider} from '@chakra-ui/react';
import {Footer} from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
          <Head>
              <link rel="shortcut icon" href="/favicon.png" />
              <title>NullDefault</title>
          </Head>
        <Component {...pageProps} />
        <Footer/>
      </ChakraProvider>
  )
}

export default MyApp
