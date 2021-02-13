import {
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
      <Flex
          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
      >
        <Hero
          title="Hi, I'm David."
          subtitle="I'm a software engineer and artist."
          image="/doodles.svg"
          ctaText="Find out more about me!"
          ctaLink="/about"
        />
      </Flex>
  );
}
