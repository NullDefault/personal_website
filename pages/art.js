import { Flex, Image, Wrap, WrapItem, Skeleton } from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import art from "../data/art.json";
import shuffle from "../functions/shuffle";

export default function Art() {
  return (
    <PageTransition>
      <Flex
        minH="80vh"
        w={{ base: "100%", md: "95%" }}
        pt="3rem"
        direction="column"
      >
        <Wrap
          align="center"
          justify="center"
          spacing={{base: "0px", md: "7rem"}}
          shouldWrapChildren={false}
        >
          {shuffle(art).map(({ id, title, image }) => {
            return (
              <WrapItem key={id}>
                <Image
                  maxW={{ base: "350px", md: "800px" }}
                  my={{base: "10px", md: ""}}
                  src={`art/${image}`}
                  alt={title}
                  shadow="dark-lg"
                  bg="white"
                  fallback={
                    <Skeleton
                      h={{ base: "200px", md: "400px" }}
                      w={{ base: "300px", md: "600px" }}
                    />
                  }
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </PageTransition>
  );
}
