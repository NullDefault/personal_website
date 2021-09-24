import { useState, useRef } from "react";
import {
  Text,
  Box,
  IconButton,
  Flex,
  useColorModeValue,
  useDisclosure,
  Image,
  HStack,
  Skeleton,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import { BiFullscreen } from "react-icons/bi";

const Carousel = ({ slides }) => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "12px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const finalRef = useRef();
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <>
      <Flex
        w="full"
        bg={useColorModeValue("gray.300", "gray.700")}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                {slidesCount !== 1 ? (
                  <Text
                    color="white"
                    fontSize="xs"
                    p="8px 12px"
                    pos="absolute"
                    top="0"
                    roundedBottomRight="lg"
                    _hover={{
                      opacity: 0.8,
                      bg: "black",
                    }}
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                ) : (
                  <div />
                )}
                <Image
                  src={"/screenshots/" + slide.img}
                  boxSize="full"
                  backgroundSize="cover"
                  w="100%"
                  h="100%"
                  fallback={<Skeleton h="40vh" w="100%" />}
                />
                <Text
                  fontSize="xs"
                  display={{sm: "none", md: "block"}}
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                  right="0"
                  roundedBottomLeft="lg"
                >
                  <IconButton onClick={onOpen} icon={<BiFullscreen />} />
                </Text>
              </Box>
            ))}
          </Flex>
          {slidesCount !== 1 ? (
            <div>
              <Text
                {...arrowStyles}
                left="0"
                roundedRight="lg"
                onClick={prevSlide}
              >
                &#10094;
              </Text>
              <Text
                {...arrowStyles}
                right="0"
                roundedLeft="lg"
                onClick={nextSlide}
              >
                &#10095;
              </Text>{" "}
            </div>
          ) : (
            <div />
          )}
          {slidesCount !== 1 ? (
            <HStack justify="center" pos="absolute" bottom="8px" w="full">
              {Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={["7px", , "15px"]}
                  m="0 2px"
                  bg={
                    currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                  }
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{ bg: "blackAlpha.800" }}
                  onClick={() => setSlide(slide)}
                />
              ))}
            </HStack>
          ) : (
            <div />
          )}
        </Flex>
      </Flex>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        allowPinchZoom={true}
        isCentered={true}
        motionPreset={"slideInBottom"}
      >
        <ModalOverlay />
        <ModalContent onClick={onClose} bg="transparent">
          <Image
            src={"/screenshots/" + slides[currentSlide].img}
            fallback={<Skeleton h="100%" w="100%" />}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
export default Carousel;
