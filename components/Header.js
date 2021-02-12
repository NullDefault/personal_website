import { Box, Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { FaWindowClose, FaBars } from "react-icons/fa";
import { NavLogo } from "./NavLogo";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { useState } from "react";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Link href={to} fontSize={22} _hover={{ fontSize: 28 }} {...rest}>
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
      >
        {children}
      </Text>
    </Link>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const textColor = useColorModeValue("dark", "light");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={8}
      pt={8}
      bg="transparent"
      color={textColor}
      {...props}
    >
      <Flex align="center">
        <NavLogo w={["50px", "80px"]} />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <FaWindowClose /> : <FaBars />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/about">About Me </MenuItems>
          <MenuItems to="/portfolio">Portfolio </MenuItems>
          <ColorModeSwitch />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
