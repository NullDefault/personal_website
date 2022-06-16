import { Box, Text, IconButton, useColorModeValue } from "@chakra-ui/react";
import { GiEyeball } from "react-icons/gi";

function PostCard({ title }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      m={8}
      justifyContent="space-around"
      borderRadius="md"
      bg={useColorModeValue("gray.200", "gray.700")}
      fontSize={48}
    >
      <Text>{title}</Text>
      <IconButton>
        <GiEyeball />
      </IconButton>
    </Box>
  );
}

export default PostCard;
