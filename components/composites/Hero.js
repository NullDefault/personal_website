import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import CyberpunkText from "../CyberpunkText";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  const router = useRouter();

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
        textAlign="center"
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
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              onClick={() => {
                router.push("/about");
              }}
              color="primary.800"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
            >
              {ctaText}
            </Button>
          </motion.button>
        </Link>
      </Stack>
      <Box
        w={{ base: "100%", md: "400px", lg: "600px", xl: "800px" }}
        h={{ base: "225px", md: "300px", lg: "450px", xl: "600px" }}
        mb={{ base: 24, md: 0 }}
        ml={{ base: 0, md: 24 }}
      >
        <Image src={image} rounded="1rem" shadow="dark-lg" bg="white" />
      </Box>
    </Flex>
  );
}
