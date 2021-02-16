import { VStack, Text, Wrap, Link } from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import Section from "../components/Section";
import interests from "../data/interests.json";
import InterestTag from "../components/InterestTag";
import CyberpunkText from "../components/CyberpunkText";

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const About = () => (
  <PageTransition>
    <VStack spacing={8} pb={{ base: 24, md: 16 }}>
      <Section>
        <VStack align="start">
          <CyberpunkText text="About" />
          <Text>
            I am currently an undergraduate at Drew University, studying
            Computer & Data Science, as well as Philosophy. I help run{" "}
            <Link
              isExternal
              color="blue.500"
              href={"https://tedxdrewuniversity.com/"}
            >
              TEDxDrewUniversity
            </Link>{" "}
            as the Creative Director, sit on the{" "}
            <Link
              isExternal
              color="blue.500"
              href={"https://drewreview.vercel.app/"}
            >
              Drew Review
            </Link>{" "}
            editorial board, and act as a co-president of the Drew University
            Philosophical Society. My passions in life revolve around research,
            design, and the creative applications of the former two to human
            contexts. I pride myself on my ability to approach problems in novel
            ways and draw from my multidisciplinary knowledge base to drive my
            design process.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <CyberpunkText text="Work" />
          <Text>
            I have professional experience in software development, team
            management, independent research and visual design. My skills have
            been developed in my roles as a Software Development Intern at{" "}
            <Link
              isExternal
              color="blue.500"
              href={"https://www.afreebird.org/"}
            >
              A Free Bird Corporation
            </Link>
            , Research Collaborator at the{" "}
            <Link
              isExternal
              color="blue.500"
              href={"https://www.drew.edu/digital-humanities/"}
            >
              Digital Humanities Institute
            </Link>
            , and Programming Fellow at the{" "}
            <Link
              isExternal
              color="blue.500"
              href="https://www.drew.edu/center-academic-excellence/"
            >
              Center for Academic Excellence
            </Link>
            . If you would like to learn more, please see my professional resume{" "}
            <Link color="blue.500" href="/resume.pdf">
              here
            </Link>
            .
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <CyberpunkText text="Things I Like" />
          <Wrap>
            {shuffle(interests.like).map((el) => (
              <InterestTag name={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <CyberpunkText text="Things I Dislike" />
          <Wrap>
            {shuffle(interests.dislike).map((el) => (
              <InterestTag name={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>
    </VStack>
  </PageTransition>
);

export default About;
