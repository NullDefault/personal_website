import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Icon,
  Text,
  Wrap,
  WrapItem,
  Skeleton,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillTool,
  AiOutlineLink,
  AiFillDatabase,
  AiOutlineFolderView,
} from "react-icons/ai";
import { SiMoleculer } from "react-icons/si";
import { BiGame } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { MdLanguage, MdLibraryBooks } from "react-icons/md";

function ProjectDetailsListItem({ icon, title, value }) {
  return (
    <ListItem color="dark">
      <ListIcon as={icon} color="green.400" />
      <Text as="strong">{title}:</Text> {value}
    </ListItem>
  );
}

function makeBadge(category) {
  const iconDict = {
    Frontend: <Icon as={AiOutlineFolderView} fontSize={26} />,
    Backend: <Icon as={AiFillDatabase} fontSize={26} />,
    Simulation: <Icon as={SiMoleculer} fontSize={26} />,
    Game: <Icon as={BiGame} fontSize={26} />,
    "Artificial Intelligence": <Icon as={GiBrain} fontSize={26} />,
  };

  return (
    <Badge colorScheme="teal" variant="outline" size="lg" fontSize={18}>
      <Box p={1}>
        {category} {iconDict[category]}
      </Box>
    </Badge>
  );
}

export function ProjectCard({
  stack,
  title,
  liveUrl,
  githubUrl,
  description,
  mainImageUrl,
  ...rest
}) {
  const frameworks = (stack.frameworks ?? []).join(", ");
  const languages = (stack.languages ?? []).join(", ");
  const otherTech = (stack.otherTech ?? []).join(", ");

  return (
    <Stack
      spacing={5}
      padding={5}
      direction="column"
      borderWidth={0.5}
      {...rest}
    >
      <Box borderWidth={1}>
        <Image
          alt={title}
          src={`screenshots/${mainImageUrl}`}
          fallback={
            <Skeleton
              h="40vh"
              w="100%"
            />
          }
        />
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
            {githubUrl ? (
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
            ) : null}
            {liveUrl ? (
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
            ) : null}
          </Stack>
          <Wrap spacing={2} my="2%">
            {stack.categories.map((category) => (
              <WrapItem key={category}>{makeBadge(category)}</WrapItem>
            ))}
          </Wrap>
          <Accordion allowToggle width="100%">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Stack
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  <ProjectDetailsListItem
                    icon={MdLanguage}
                    title="Languages"
                    value={languages}
                  />
                  <ProjectDetailsListItem
                    icon={MdLibraryBooks}
                    title="Frameworks"
                    value={frameworks}
                  />
                  {otherTech.length > 0 ? (
                    <ProjectDetailsListItem
                      icon={AiFillTool}
                      title="Other tech"
                      value={otherTech}
                    />
                  ) : null}
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Text variant="regular" textAlign="left">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}
