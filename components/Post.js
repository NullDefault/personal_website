import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export default function Post({ blog }) {
  const parseFirebaseMarkdownString = (str) => {
    return str.replace(/\\n/g, "\n");
  };
  return (
    <Center py={6}>
      <Box
        minW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Heading color={"green.500"} fontSize={"5xl"} letterSpacing={1.5}>
            {blog.title}
          </Heading>
          <ReactMarkdown
            children={parseFirebaseMarkdownString(blog.md_content)}
          />
        </Stack>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text color={"gray.500"}>{blog.added.toDate().toUTCString()}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
