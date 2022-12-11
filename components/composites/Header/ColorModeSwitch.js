import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export const ColorModeSwitch = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const sun = () => <Image src="/icons/sol.svg" />;
  const moon = () => <Image src="/icons/luna.svg" />;
  const SwitchIcon = useColorModeValue(sun, moon);

  return (
      <IconButton
        {...props}
        size="md"
        fontSize="2xl"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        _focus={{}}
        {...props}
      />
  );
};
