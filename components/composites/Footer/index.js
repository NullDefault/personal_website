import { Flex, HStack, VStack, Image } from "@chakra-ui/react";
import { getKrakenData } from "../../../functions/cryptoApi";
import { FooterIcon } from "./FooterIcon";
import { useState, useEffect } from "react";
import { CryptoStats } from "./CryptoStats";

export const Footer = (props) => {
  const [btc, setBTC] = useState(null);
  const [eth, setETH] = useState(null);
  const [ada, setADA] = useState(null);

  useEffect(() => {
    getKrakenData("Bitcoin", setBTC);
    getKrakenData("Ethereum", setETH);
    getKrakenData("Cardano", setADA);
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
        <Flex
          direction={["column", "row"]}
          alignItems="center"
          justifyContent="center"
          pt={8}
        >
          {btc && <CryptoStats data={btc} currency={"bitcoin"} />}
          {eth && <CryptoStats data={eth} currency={"ethereum"} />}
          {ada && <CryptoStats data={ada} currency={"cardano"} />}
        </Flex>
      </VStack>
    </Flex>
  );
};
