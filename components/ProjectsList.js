import {
  Heading,
  HStack,
  SimpleGrid,
  GridItem,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList({ projects }) {
  return (
    <VStack spacing={7} alignItems="flex-start">
      <HStack pt={3}>
        <Heading as="h2">Projects</Heading>
      </HStack>

      <SimpleGrid spacing={{ base: 4, md: 12 }} columns={{ base: 1, lg: 2 }}>
        {projects.map(
          (
            { id, title, stack, liveUrl, githubUrl, mainImage, description },
            i,
            arr
          ) => {
            const { url } = mainImage;
            let breakpoint = useBreakpointValue({ base: false, lg: true });
            let projectCard = (
              <ProjectCard
                key={id}
                title={title}
                stack={stack}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
                mainImageUrl={url}
                description={description}
              />
            );

            if (breakpoint && arr.length - 1 === i) {
              return (
                <GridItem
                  colSpan={1}
                  ml="50%"
                  width="100%"
                  children={[projectCard]}
                />
              );
            }
            return projectCard;
          }
        )}
      </SimpleGrid>
    </VStack>
  );
}
