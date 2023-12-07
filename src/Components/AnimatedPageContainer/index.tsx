import { ReactElement } from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

interface AuthContextChildren {
  children: ReactElement | undefined;
  sx?: object;
}

const AnimatedPageContainer = ({ children, sx }: AuthContextChildren) => {
  return (
    <Box
      sx={sx}
      component={motion.div}
      transition={{ duration: 0.5 }}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </Box>
  );
};

export default AnimatedPageContainer;
