import { VStack, Text, Wrap, Link, Heading } from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import Section from "../components/Section";
import aboutData from "../data/about.json";
import InterestTag from "../components/InterestTag";
import shuffle from "../functions/shuffle";

const About = () => (
  <PageTransition>
    <VStack minH="100vh" spacing={8} fontSize="xl" pb={{ base: 24, md: 16 }}>
      <Section>
        <VStack align="start">
          <Heading>About</Heading>
          <Text>
            I am currently an undergraduate at Drew University, majoring in
            Computer Science and Philosophy, and minoring in Data Science. I
            help run{" "}
            <Link
              isExternal
              color="blue.500"
              href={
                "https://www.drew.edu/library/2019/08/19/drew-publications/"
              }
            >
              Drew Review
            </Link>{" "}
            as the Senior Corresponding Editor, work as a Programming Fellow and
            Tutor at the{" "}
            <Link
              isExternal
              color="blue.500"
              href={"https://www.drew.edu/center-academic-excellence/"}
            >
              Center for Academic Excellence
            </Link>{" "}
            , and act as a co-president of the Drew University Philosophical
            Society. My passions in life revolve around research, design, and
            the creative applications of the former two to human contexts. I
            pride myself on my ability to approach problems in novel ways and
            draw from my multidisciplinary knowledge base to drive my design
            process.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading>Work</Heading>
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
            , and Creative Lead at{" "}
            <Link
              isExternal
              color="blue.500"
              href="https://tedxdrewuniversity.com/"
            >
              TEDxDrewUniversity
            </Link>
            . If you would like to learn more, please see my professional resume{" "}
            <Link color="blue.500" href="/resume.pdf">
              here
            </Link>{" "}
            or explore my projects{" "}
            <Link color="blue.500" href="/portfolio">
              at this page
            </Link>
            .
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4} pb={4}>
          <Heading>Tech I Know</Heading>
          <Wrap>
            {aboutData.tech.map((el) => (
              <InterestTag name={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4} pb={4}>
          <Heading>Things I Like</Heading>
          <Wrap>
            {shuffle(aboutData.likes).map((el) => (
              <InterestTag name={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
    </VStack>
  </PageTransition>
);

export default About;
