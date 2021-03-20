import {
  Flex,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import art from "../data/art.json";
import shuffle from "../functions/shuffle";

export default function Art() {
  return (
    <PageTransition>
      <Flex minH="80vh" w="95%" pt="3rem" direction="column">
        <Wrap align="center" justify="center" px="5vw">
          {shuffle(art).map(
              ({ id, title, image }) => {
                return (
                      <WrapItem key={id}>
                        <Image maxW="800px" src={`art/${image}`} alt={title} shadow="dark-lg" bg="white" />
                      </WrapItem>
                );
              }
          )}
        </Wrap>
      </Flex>
    </PageTransition>
  );
}
