import {
  Box,
  List,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { MdLanguage, MdLibraryBooks } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import ProjectDetailListItem from "./ProjectDetailListItem";

function StackAccordion({ languages, frameworks, otherTech }) {
  return (
    <Accordion allowToggle width="100%">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Stack
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ProjectDetailListItem
              icon={MdLanguage}
              title="Languages"
              value={languages}
            />
            <ProjectDetailListItem
              icon={MdLibraryBooks}
              title="Frameworks"
              value={frameworks}
            />
            {otherTech.length > 0 && (
              <ProjectDetailListItem
                icon={AiFillTool}
                title="Other tech"
                value={otherTech}
              />
            )}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default StackAccordion;
