import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
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
          ctaText="Learn more about me"
          ctaLink="/about"
        />
      </Flex>
    </PageTransition>
  );
}
