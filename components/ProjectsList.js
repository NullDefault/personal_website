import {
  Flex,
  SimpleGrid,
  HStack,
  VStack,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList({ projects }) {
  return (
    <VStack width="full" spacing={7} alignItems="flex-start" pl={["5vw", ""]}>
      <HStack pt={3}>
        <Heading as="h2">Projects</Heading>
        <Popover>
          <PopoverTrigger>
            <IconButton
              colorScheme="green"
              isRound={true}
              fontSize="20px"
              icon={<InfoIcon />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody p={5}>
              Click on the project cards to see more information about them! The
              icons are also interactive.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <SimpleGrid spacing={4} columns={[1, null, 2]}>
        {projects.map(
          ({
            id,
            title,
            stack,
            liveUrl,
            githubUrl,
            mainImage,
            description,
          }) => {
            const { url } = mainImage;

            return (
              <ProjectCard
                key={id}
                w={"90%"}
                title={title}
                stack={stack}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
                mainImageUrl={url}
                description={description}
              />
            );
          }
        )}
      </SimpleGrid>
    </VStack>
  );
}
