import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export const NavLogo = (props) => {
  const color = useColorModeValue(
    {},
    {
      WebkitFilter: "invert(1)",
      filter: "invert(1)",
    }
  );

  return (
    <Box {...props}>
      <a href="/">
          <Box  style={color} >
              <Image src="/nullLogo.svg" width='100%' height='100%'/>
          </Box>
      </a>
    </Box>
  );
};
