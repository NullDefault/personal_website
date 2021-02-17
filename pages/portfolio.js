import { Flex } from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import {ProjectsList} from "../components/ProjectsList";
import projects from "../data/projects.json";

export default function Portfolio() {
  return (
    <PageTransition>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        pb={{ base: 24, md: 16 }}
      >
          <ProjectsList projects={projects}/>
      </Flex>
    </PageTransition>
  );
}
