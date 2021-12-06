import { Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import AboutSection from "../components/AboutSection";
import CyberpunkText from "../components/CyberpunkText";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Flex w="full" justify="center" align="center" direction="column" textAlign="center">
        <Avatar
          bg={useColorModeValue("black", "white")}
          size="full"
          loading="eager"
          name="David Nesterov-Rappoport"
          src="/Portreto.png"
          w="240px"
          h="240px"
        />
        <CyberpunkText text={"Hi, I'm David."} />
      </Flex>
      <AboutSection mt={24}/>
    </PageTransition>
  );
}
