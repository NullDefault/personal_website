import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import Tilt from "react-tilt";
import CyberpunkText from "./CyberpunkText";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="80vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <CyberpunkText text={title} />

        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            variant="outline"
            color="primary.800"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            w={['70vw', '15vw']}
            h='7vh'
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <Image
            src={image}
            alt="splash art"
            rounded="1rem"
            shadow="dark-lg"
            bg="white"
            w="70vw"
            minH={["20vh", "25vh"]}
          />
        </Tilt>
      </Box>
    </Flex>
  );
}
