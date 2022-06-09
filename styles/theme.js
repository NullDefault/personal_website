// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "#222222")(props),
        color: mode("black", "#FFFAFA")(props),
      },
      p: {
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        lineHeight: "160%",
      },
      li: {
        display: "list-item",
        textAlign: "-webkit-match-parent",
      },
      ul: {
        paddingInlineStart: "18px",
      },
      ol: {
        display: "block",
        listStyleType: "decimal",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        paddingInlineStart: "32px",
      },
      h1: {
        display: "block",
        fontSize: "3em",
        marginBlockStart: "0.67em",
        marginBlockEnd: "0.67em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: "bold",
      },
      h2: {
        display: "block",
        fontSize: "2em",
        marginBlockStart: "0.83em",
        marginBlockEnd: "0.83em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: "bold",
      },
      h3: {
        display: "block",
        fontSize: "1.5em",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: "bold",
      },
      h4: {
        display: "block",
        fontSize: "1.2em",
        marginBlockStart: "1.33em",
        marginBlockEnd: "1.33em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: "bold",
      },
      h5: {
        display: "block",
        fontSize: "1em",
        marginBlockStart: "1.67em",
        marginBlockEnd: "1.67em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: "bold",
      },
      a: {
        color: "#58a6ff",
      },
      pre: {
        display: "block",
        fontFamily: "monospace",
        whiteSpace: "pre",
        margin: "1em 0",
      },
      strong: {
        fontWeight: "bold",
      },
      em: { fontStyle: "italic" },
      blockquote: {
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "40px",
        marginInlineEnd: "40px",
        borderLeft: "5px solid #ccc",
        margin: "1em 8px",
        padding: "0.5em 10px 0.5em 10px",
      },
      code: { fontFamily: "monospace" },
    }),
  },
});

export default theme;
