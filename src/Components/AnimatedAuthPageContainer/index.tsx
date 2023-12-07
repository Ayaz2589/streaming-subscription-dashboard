import { ReactElement } from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

interface AuthContextChildren {
  children: ReactElement | undefined;
  sx?: object;
}

const AnimatedAuthPageContainer = ({ children, sx }: AuthContextChildren) => {
  return (
    <Box
      sx={sx}
      component={motion.div}
      variants={{
        fadeOutLeft: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      initial="visible"
      exit="fadeOutLeft"
    >
      {children}
    </Box>
  );
};

export default AnimatedAuthPageContainer;
