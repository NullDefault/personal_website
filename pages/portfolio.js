import { Flex } from "@chakra-ui/react";
import PageTransition from "../components/structural/PageTransition";
import { ProjectsList } from "../components/composites/ProjectsList";
import projects from "../data/projects.json";

export default function Portfolio() {
  return (
    <PageTransition>
      <Flex
        direction="column"
        m="0 auto"
        width="90%"
        pb={{ base: 24, md: 16 }}
        pt={8}
      >
        <ProjectsList projects={projects} />
      </Flex>
    </PageTransition>
  );
}
