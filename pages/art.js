import {
  Flex,
  Image,
  Wrap,
  WrapItem,
  Skeleton,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import art from "../data/art.json";
import shuffle from "../functions/shuffle";

export default function Art() {
  return (
    <PageTransition>
      <Flex
        minH="80vh"
        pt="3rem"
        direction="column"
      >
        <Wrap
          align="center"
          justify="center"
          spacing={{ base: "0px", md: "7rem" }}
        >
          {shuffle(art).map(({ id, title, image, description, medium }) => {
            return (
              <WrapItem key={id} role="group" position="relative">
                <Image
                  maxW={{ base: "350px", md: "800px" }}
                  my={{ base: "10px", md: "" }}
                  src={`art/${image}`}
                  alt={title}
                  shadow="dark-lg"
                  bg="white"
                  _groupHover={{ opacity: "0.5", filter: "blur(8px)" }}
                  fallback={
                    <Skeleton
                      h={{ base: "200px", md: "400px" }}
                      w={{ base: "300px", md: "600px" }}
                    />
                  }
                />
                <Box
                  opacity="0"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                  _groupHover={{ opacity: "1" }}
                >
                  <Flex direction="column">
                    <Text fontSize={{ base: "md", md: "2xl" }}>{title}</Text>
                    <Text fontSize={{ base: "sm", md: "xl" }} pt="1rem">
                      {description}
                    </Text>
                    <Text fontSize={{ base: "sm", md: "xl" }} pt="1rem">
                      {medium}
                    </Text>
                  </Flex>
                </Box>
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </PageTransition>
  );
}
