import { Box, Image, useColorModeValue } from "@chakra-ui/react";

export const NavLogo = (props) => {
  const color = useColorModeValue(
    {},
    {
        WebkitFilter: "invert(1)",
        filter: "invert(1)"
    }
  );

  return (
    <Box {...props}>
      <a href="/">
        <Image src="/nullLogo.png" style={color}/>
      </a>
    </Box>
  );
};
