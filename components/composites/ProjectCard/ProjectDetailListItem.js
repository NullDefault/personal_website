import { ListItem, ListIcon, Text } from "@chakra-ui/react";

function ProjectDetailListItem({ icon, title, value }) {
  return (
    <ListItem color="dark">
      <ListIcon as={icon} color="green.400" />
      <Text as="strong">{title}:</Text> {value}
    </ListItem>
  );
}

export default ProjectDetailListItem;
