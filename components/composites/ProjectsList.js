import {
  Heading,
  Flex,
  Box,
  IconButton,
  Tooltip,
  SimpleGrid,
  VStack,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { AiFillDatabase, AiOutlineFolderView } from "react-icons/ai";
import { SiMoleculer } from "react-icons/si";
import { BiGame } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

function FilterButton({ stateFunc, stateVar, icon, type }) {
  return (
    <Tooltip label={"Show projects with the " + type + " tag"}>
      <IconButton
        aria-label={"filter " + type}
        size="md"
        fontSize="2xl"
        icon={icon}
        colorScheme={stateVar ? "green" : "gray"}
        onClick={stateFunc}
      />
    </Tooltip>
  );
}

export function ProjectsList({ projects }) {
  const [backendFilter, setBackendFilter] = useState(false);
  const [frontendFilter, setFrontendFilter] = useState(false);
  const [simulationFilter, setSimulationFilter] = useState(false);
  const [gameFilter, setGameFilter] = useState(false);
  const [aiFilter, setAiFilter] = useState(false);

  let filterValues = [
    ...(backendFilter ? ["Backend"] : []),
    ...(frontendFilter ? ["Frontend"] : []),
    ...(simulationFilter ? ["Simulation"] : []),
    ...(gameFilter ? ["Game"] : []),
    ...(aiFilter ? ["Artificial Intelligence"] : []),
  ];

  return (
    <VStack spacing={7} alignItems="flex-start">
      <Flex pt={3} w="100%" direction={{base: "column", md: "row"}}>
        <Box>
          <Heading as="h2">Projects</Heading>
        </Box>

        <Spacer />
        <HStack spacing={3} pt={{base: 4, md: 0}}>
          <FilterButton
            stateFunc={() => setBackendFilter(!backendFilter)}
            stateVar={backendFilter}
            icon={<AiFillDatabase />}
            type="backend"
          />
          <FilterButton
            stateFunc={() => setFrontendFilter(!frontendFilter)}
            stateVar={frontendFilter}
            icon={<AiOutlineFolderView />}
            type="frontend"
          />
          <FilterButton
            stateFunc={() => setSimulationFilter(!simulationFilter)}
            stateVar={simulationFilter}
            icon={<SiMoleculer />}
            type="simulation"
          />
          <FilterButton
            stateFunc={() => setGameFilter(!gameFilter)}
            stateVar={gameFilter}
            icon={<BiGame />}
            type="game"
          />
          <FilterButton
            stateFunc={() => setAiFilter(!aiFilter)}
            stateVar={aiFilter}
            icon={<GiBrain />}
            type="ai"
          />
        </HStack>
      </Flex>

      <SimpleGrid spacing={{ base: 4, md: 12 }} columns={{ base: 1, lg: 2 }}>
        {projects
          .filter(({ stack }) => {
            if (!filterValues.length) {
              return true;
            } else if (
              stack.categories.some((value) => filterValues.includes(value))
            ) {
              return true;
            }
            return false;
          })
          .map(
            (
              { id, title, stack, liveUrl, githubUrl, slides, description },
              i,
              arr
            ) => {
              let projectCard = (
                <ProjectCard
                  key={"project-#" + id}
                  title={title}
                  stack={stack}
                  liveUrl={liveUrl}
                  githubUrl={githubUrl}
                  slides={slides}
                  description={description}
                />
              );

              return projectCard;
            }
          )}
      </SimpleGrid>
    </VStack>
  );
}
