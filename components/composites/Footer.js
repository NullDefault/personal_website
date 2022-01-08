import { Flex, HStack, VStack, Image } from "@chakra-ui/react";
import { FooterIcon } from "../FooterIcon";

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
