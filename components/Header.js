import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FaRegWindowClose, FaBars } from "react-icons/fa";
import { NavLogo } from "./NavLogo";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
      <Link href={to}
            fontSize={22}
            _hover={{ fontSize: 28 }}
            {...rest}
      >
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
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <NavLogo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <FaRegWindowClose /> : <FaBars />}
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
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
