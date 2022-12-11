import { Badge, Icon, Box, Stack } from "@chakra-ui/react";
import { AiFillDatabase, AiOutlineFolderView } from "react-icons/ai";
import { SiMoleculer } from "react-icons/si";
import { BiGame } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

function CategoryBadge(category) {
  const iconDict = {
    Frontend: <Icon as={AiOutlineFolderView} fontSize={26} />,
    Backend: <Icon as={AiFillDatabase} fontSize={26} />,
    Simulation: <Icon as={SiMoleculer} fontSize={26} />,
    Game: <Icon as={BiGame} fontSize={26} />,
    "Artificial Intelligence": <Icon as={GiBrain} fontSize={26} />,
  };

  return (
    <Badge colorScheme="teal" variant="outline" size="lg" fontSize={18}>
      <Stack p={2} align="center" direction="row">
        <Box h="100%">{category}</Box> <Box h="100%">{iconDict[category]}</Box>
      </Stack>
    </Badge>
  );
}

export default CategoryBadge;
