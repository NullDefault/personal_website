import { Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import AboutSection from "../components/composites/AboutSection";
import CyberpunkText from "../components/CyberpunkText";
import PageTransition from "../components/structural/PageTransition";

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
      <AboutSection/>
    </PageTransition>
  );
}
