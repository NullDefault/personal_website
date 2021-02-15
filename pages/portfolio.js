import {Box, Flex, ScaleFade} from "@chakra-ui/react";
import CyberpunkText from "../components/CyberpunkText";

export default function Portfolio() {
    return (
        <Flex direction="column" align="center" maxW={{xl: "1200px"}} m="0 auto">
            <ScaleFade initialScale={0.9} in={true}>
                <Box mt='20vh' h='80vh'>
                    <CyberpunkText text={"I am currently working on this page"}/>
                </Box>
            </ScaleFade>
        </Flex>
    );
}