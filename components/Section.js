import React from "react";
import { Center } from "@chakra-ui/react";
import Container from "../components/Container";

const Section = (props) => {
    const { full, children, ...rest } = props;
    return (
        <Center as="section" {...rest} w="100%">
            {full ? children : <Container>{children}</Container>}
        </Center>
    );
};

export default Section;