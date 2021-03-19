// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
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
        bg: mode('white', '#222222')(props),
        color: mode('black', '#DEE4E7')(props),
      },
    })
  }
});
export default theme;
