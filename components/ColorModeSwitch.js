import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ColorModeSwitch = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const sun = () => (<Image src="/sol.svg"/>);
  const moon = () => (<Image src="/luna.svg"/>);
  const SwitchIcon = useColorModeValue(sun, moon);

  return (
    <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
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
    </motion.button>
  );
};
