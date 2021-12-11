import { Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import AboutSection from "../components/composites/AboutSection";
import { ProjectsList } from "../components/composites/ProjectsList";
import CyberpunkText from "../components/CyberpunkText";
import PageTransition from "../components/structural/PageTransition";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <PageTransition>
      <Flex
        w="full"
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
      >
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
      <AboutSection />
      <Flex
        direction="column"
        m="0 auto"
        width={{base: "90%", md: "80%"}}
        pb={{ base: 24, md: 16 }}
        pt={8}
      >
        <ProjectsList projects={projects} />
      </Flex>
    </PageTransition>
  );
}
