import React from "react";
import { Tag, WrapItem } from "@chakra-ui/react";

const InterestTag = ({ name, like }) => {
    return (
        <WrapItem>
            <Tag
                size="lg"
                variant="subtle"
                colorScheme={like ? "green" : "red"}
                rounded="lg"
            >
                {name}
            </Tag>
        </WrapItem>
    );
};

export default InterestTag;