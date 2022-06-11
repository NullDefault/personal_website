import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Code,
  Divider,
  Image,
  Link,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Post({ blog, storage }) {
  const mdFileReference = ref(storage, blog.md_file);
  const [mdContent, setMdContent] = useState();

  useEffect(() => {
    getDownloadURL(mdFileReference)
      .then((url) => {
        fetch(url)
          .then((response) => response.text())
          .then((result) => setMdContent(result));
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            console.log("Object not found!");
            break;
          case "storage/unauthorized":
            console.log("User doesn't have permission to access the object");
            break;
          case "storage/unknown":
            console.log(error.code);
            console.log("Unknown error");
            break;
        }
      });
  });

  return (
    <Center py={6}>
      <Box
        minW={"400px"}
        maxW="95vw"
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Heading fontSize={"6xl"} letterSpacing={1.5}>
            {blog.title}
          </Heading>
          <Divider py={4} />
          <ReactMarkdown
            children={mdContent}
            components={{
              ul: ({ node, ...props }) => (
                <Box pl="18px" display="block" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <Box
                  pl="18px"
                  display="block"
                  listStyleType="decimal"
                  {...props}
                />
              ),
              em: ({ node, ...props }) => <Text as="em" {...props} />,
              strong: ({ node, ...props }) => <Text as="strong" {...props} />,
              h1: ({ node, ...props }) => (
                <Heading
                  as="h1"
                  display="block"
                  size="2xl"
                  color="red.300"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <Heading
                  as="h2"
                  display="block"
                  size="xl"
                  color="orange.300"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <Heading
                  as="h3"
                  display="block"
                  size="lg"
                  color="green.300"
                  {...props}
                />
              ),
              h4: ({ node, ...props }) => (
                <Heading
                  as="h4"
                  display="block"
                  size="md"
                  color="blue.300"
                  {...props}
                />
              ),
              h5: ({ node, ...props }) => (
                <Heading
                  as="h5"
                  display="block"
                  size="sm"
                  color="blueviolet.300"
                  {...props}
                />
              ),
              h6: ({ node, ...props }) => (
                <Heading
                  as="h6"
                  display="block"
                  size="xs"
                  color="purple.300"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <Text
                  style={{
                    display: "block",
                    marginBlockStart: "1em",
                    marginBlockEnd: "1em",
                    marginInlineStart: "0px",
                    marginInlineEnd: "0px",
                    lineHeight: "175%",
                  }}
                  {...props}
                />
              ),
              a: ({ node, ...props }) => <Link {...props} />,
              code: ({ node, ...props }) => <Code {...props} />,
              img: ({ node, ...props }) => <Image {...props} />,
              blockquote: ({ node, ...props }) => (
                <Box
                  style={{
                    fontStyle: "italic",
                    display: "block",
                    marginBlockStart: "1em",
                    marginBlockEnd: "1em",
                    borderLeft: "5px solid #ccc",
                    padding: "0.5em 10px 0.5em 10px",
                  }}
                  {...props}
                />
              ),
            }}
          />
        </Stack>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text color={"gray.500"}>
            NullDefault - {blog.added.toDate().toUTCString()}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
