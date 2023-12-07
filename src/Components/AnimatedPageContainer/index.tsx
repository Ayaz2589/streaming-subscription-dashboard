import { ReactElement } from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

interface AuthContextChildren {
  children: ReactElement | undefined;
  sx?: object;
}

const fadeInUpVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AnimatedPageContainer = ({ children, sx }: AuthContextChildren) => {
  console.log(window.history);
  return (
    <Box
      sx={sx}
      component={motion.div}
      variants={fadeInUpVariant}
      transition={{ duration: 0.5 }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </Box>
  );
};

export default AnimatedPageContainer;
