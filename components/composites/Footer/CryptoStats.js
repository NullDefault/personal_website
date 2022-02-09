import { HStack, VStack, Box, Image, Badge } from "@chakra-ui/react";

export const CryptoStats = ({ currency, data }) => {
  return (
    <HStack spacing="12px" p={4}>
      <Box>
        <Image
          w={["8vw", "4vw"]}
          src={`/${currency}.png`}
          style={{ WebkitFilter: "invert(1)", filter: "invert(1)" }}
        />
      </Box>
      <VStack>
        <Badge colorScheme="green">Buy: {data.buy}</Badge>
        <Badge colorScheme="red">Sell: {data.sell}</Badge>
      </VStack>
    </HStack>
  );
};
