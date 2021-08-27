import { Flex, Text } from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        minH="70vh"
        m="0 auto"
        pt={8}
      >
        <Text fontSize="6xl" fontWeight="semibold" color="red.500">
          404
        </Text>
        <Text fontSize="6xl" fontWeight="semibold" color="red.500">
          Page Not Found
        </Text>
      </Flex>
    </PageTransition>
  );
}
