import {
  Wrap,
  Text,
  Link,
  Badge,
  Stack,
  Box,
  WrapItem,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { ProjectDetailsModal } from "./ProjectDetailModal";

export function ProjectCard({
  stack,
  title,
  liveUrl,
  githubUrl,
  description,
  mainImageUrl,
  ...rest
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { categories } = stack;

  return (
    <>
      <ProjectDetailsModal
        title={title}
        stack={stack}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Stack
        height="full"
        as="button"
        onClick={onOpen}
        spacing={5}
        padding={5}
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        borderWidth={0.5}
        {...rest}
      >
        <Box borderWidth={1}>
          <Image alt={title} src={mainImageUrl} alignSelf="center" objectFit="fill" />
        </Box>

        <Stack
          spacing={2}
          direction="column"
          alignSelf="start"
          alignItems="start"
          justifyContent="space-between"
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

              {githubUrl ? (
                <Link
                  href={githubUrl}
                  title="See the project on GitHub"
                  isExternal
                  aria-label="See project on GitHub"
                >
                  <AiFillGithub>{githubUrl}</AiFillGithub>
                </Link>
              ) : null}

              {liveUrl ? (
                <Link
                  href={liveUrl}
                  title="See project live version"
                  isExternal
                  aria-label="See project live version"
                >
                  <AiOutlineLink>{liveUrl}</AiOutlineLink>
                </Link>
              ) : null}
            </Stack>

            <Wrap spacing={2} my="2%">
              {categories.map((technology) => (
                <WrapItem key={technology}>
                  <Badge colorScheme="green" size="lg" fontSize={18}>
                    {technology}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>

          <Text variant="regular" textAlign="left">
            {description}
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
