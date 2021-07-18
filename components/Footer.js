import {
  Flex,
  HStack,
  IconButton,
  Link,
  VStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const iconData = {
  email: {
    color: "red",
    icon: <FaEnvelope />,
    ref: "mailto:davisha999@gmail.com",
  },
  LinkedIn: {
    color: "linkedin",
    icon: <FaLinkedin />,
    ref: "https://linkedin.com/in/nulldefault",
  },
  GitHub: {
    color: "green",
    icon: <FaGithub />,
    ref: "https://github.com/NullDefault",
  },
};

const FooterIcon = ({ type }) => {
  return (
    <Link href={iconData[type].ref}>
      <IconButton
        colorScheme={iconData[type].color}
        aria-label={type}
        isRound={true}
        fontSize="32px"
        size="lg"
        variant="link"
        icon={iconData[type].icon}
      />
    </Link>
  );
};

export const Footer = (props) => (
  <Flex as="footer" py="5rem" mt="4rem" bg="black" color="white" {...props}>
    <VStack w="100%">
      <HStack spacing="32px">
        <FooterIcon type="email" />
        <FooterIcon type="LinkedIn" />
        <FooterIcon type="GitHub" />
      </HStack>
      <Image
        src="/nulldefault.svg"
        w={["40vw", "20vw"]}
        style={{ WebkitFilter: "invert(1)", filter: "invert(1)" }}
      />
    </VStack>
  </Flex>
);
