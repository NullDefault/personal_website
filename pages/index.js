import {
  Box,
  Grid,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  const color = useColorModeValue("black", "white");

  return (
    <Box textAlign="center" fontSize="xl" bg="primary" color={color}>
      <Grid minH="100vh" p={3}>
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" pt="20vh">
            Website is currently being rebuilt.
          </Heading>
        </VStack>
      </Grid>
    </Box>
  );
}
