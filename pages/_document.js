import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>NullDefault</title>
          <meta property="og:url" content="https://www.nulldefault.com/" />
          <meta property="og:type" content="Portfolio Website" />
          <meta property="og:title" content="David Nesterov-Rappoport Website" />
          <meta name="twitter:card" content="David Nesterov-Rappoport's Online Portfolio" />
          <meta
            property="og:description"
            content="Hi, I'm David! I'm a software engineer and designer."
          />
          <meta property="og:image" content={"https://www.nulldefault.com/doodles.svg"} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
