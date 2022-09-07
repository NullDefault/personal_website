import {
  Flex,
  VStack,
  Text,
  Wrap,
  Link,
  Heading,
  Image,
} from "@chakra-ui/react";
import Section from "../../structural/Section";
import aboutData from "../../../data/about.json";
import InterestTag from "./InterestTag";
import shuffle from "../../../functions/shuffle";

const AboutSection = () => (
  <VStack spacing={16} justify="space-between">
    <VStack>
      <Section maxW="2xl">
        <VStack>
          <Heading>I Currently Work At</Heading>
          <Image src={"/employers/Chainalysis-logo.svg"} />
        </VStack>
      </Section>
      <Section pt={8}>
        <Text fontSize="3xl" textAlign="center">
          I am a full-stack developer with a focus on frontend and a passion for
          system architecture. My design process is organic, data-driven, and
          results-oriented. For me, people always come first and computers
          second.
        </Text>
      </Section>
    </VStack>

    <VStack spacing={16}>
      <Section>
        <VStack align="center" spacing={4} pb={4}>
          <Heading>Tech I Know</Heading>
          <Wrap>
            {aboutData.tech.map((el, index) => (
              <InterestTag name={el} key={index} />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="center" spacing={4} pb={4}>
          <Heading>Things I Like</Heading>
          <Wrap>
            {aboutData.likes.map((el, index) => (
              <InterestTag name={el} key={index} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
    </VStack>
  </VStack>
);

export default AboutSection;
