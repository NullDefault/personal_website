import { Flex, HStack, VStack, Image } from "@chakra-ui/react";
import { getKrakenData } from "../../functions/cryptoApi";
import { FooterIcon } from "../FooterIcon";
import { useState, useEffect } from "react";

export const Footer = (props) => {
  const [loading, setLoading] = useState(true);
  const [btc, setBTC] = useState(null);
  const [eth, setETH] = useState(null);
  const [ada, setADA] = useState(null);

  useEffect(() => {
    setBTC(getKrakenData("Bitcoin"));
    setETH(getKrakenData("Ethereum"));
    setADA(getKrakenData("Cardano"));
    setLoading(false);
  }, []);

  return (
    <Flex as="footer" py="5rem" mt="4rem" bg="black" color="white" {...props}>
      <VStack w="100%">
        <HStack spacing="32px">
          <FooterIcon type="email" />
          <FooterIcon type="LinkedIn" />
          <FooterIcon type="GitHub" />
        </HStack>
        <Image
          src="/nulldefault.svg"
          w={["40vw", "20vw"]}
          style={{ WebkitFilter: "invert(1)", filter: "invert(1)" }}
        />
      </VStack>
      {!loading && (
        <HStack>
          <div>{btc.buy}</div>
          <div>{eth.buy}</div>
          <div>{ada.buy}</div>
        </HStack>
      )}
    </Flex>
  );
};
