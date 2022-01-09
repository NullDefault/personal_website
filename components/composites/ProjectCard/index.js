import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Carousel from "../../Carousel";
import CategoryBadge from "./CategoryBadge";
import StackAccordion from "./StackAccordion";

export default function ProjectCard({
  stack,
  title,
  liveUrl,
  githubUrl,
  description,
  slides,
  ...rest
}) {
  const frameworks = (stack.frameworks ?? []).join(", ");
  const languages = (stack.languages ?? []).join(", ");
  const otherTech = (stack.otherTech ?? []).join(", ");
  const bg = useColorModeValue("#FFFAFA", "#222222");

  return (
    <Stack
      spacing={5}
      padding={5}
      direction="column"
      background={bg}
      borderWidth={0.5}
      {...rest}
    >
      <Box w="100%">
        <Carousel slides={slides} />
      </Box>
      <Stack
        spacing={2}
        direction="column"
        alignSelf="start"
        justifyContent="space-between"
        width="100%"
      >
        <Stack spacing={1} direction="column" alignItems="start">
          <Stack
            direction="row"
            alignItems="center"
            fontSize={[28, 32]}
            pb="2%"
          >
            <Heading as="strong" textAlign="left" fontSize={[22, 32]}>
              {title}
            </Heading>
            {githubUrl && (
              <Link
                href={githubUrl}
                title="See the project on GitHub"
                isExternal
                aria-label="See project on GitHub"
                _hover={{
                  color: "green.500",
                }}
              >
                <AiFillGithub>{githubUrl}</AiFillGithub>
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                title="See project live version"
                isExternal
                aria-label="See project live version"
                _hover={{
                  color: "blue.500",
                }}
              >
                <AiOutlineLink>{liveUrl}</AiOutlineLink>
              </Link>
            )}
          </Stack>
          <Wrap spacing={2} my="2%">
            {stack.categories.map((category) => (
              <WrapItem key={category}>{CategoryBadge(category)}</WrapItem>
            ))}
          </Wrap>
          <StackAccordion
            languages={languages}
            frameworks={frameworks}
            otherTech={otherTech}
          />
        </Stack>
        <Text variant="regular" textAlign="left">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}
