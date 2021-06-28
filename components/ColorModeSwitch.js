import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { CgMoon, CgSun } from "react-icons/cg";
import { motion } from "framer-motion";

export const ColorModeSwitch = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(CgMoon, CgSun);

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
