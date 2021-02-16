import { Flex, ScaleFade, Box } from "@chakra-ui/react";
import CyberpunkText from "../components/CyberpunkText";

export default function About() {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Box mt="20vh" h="80vh">
          <CyberpunkText text={"I am currently working on this page"} />
        </Box>
      </Flex>
    </ScaleFade>
  );
}
