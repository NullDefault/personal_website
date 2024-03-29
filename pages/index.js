import { Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import AboutSection from "../components/composites/AboutSection";
import { ProjectsList } from "../components/ProjectsList";
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
        pb={{ base: 2, md: 10 }}
      >
        <Avatar
          bg={useColorModeValue("black", "white")}
          size="full"
          loading="eager"
          name="David Nesterov-Rappoport"
          src="/portreto.jpg"
          w="280px"
          h="280px"
        />
        <CyberpunkText text={"Hi, I'm David."} />
      </Flex>
      <AboutSection />
      <Flex
        direction="column"
        m="0 auto"
        width={{ base: "90%", md: "80%" }}
        pb={{ base: 24, md: 16 }}
      >
        <ProjectsList projects={projects} />
      </Flex>
    </PageTransition>
  );
}
