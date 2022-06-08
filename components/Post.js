import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Post({ blog }) {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {blog.category}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {blog.title}
          </Heading>
          <Text color={"gray.500"}>{blog.md_content}</Text>
        </Stack>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text color={"gray.500"}>{blog.added.toDate().toUTCString()}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
