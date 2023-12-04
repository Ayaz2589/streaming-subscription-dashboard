import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const ContentContainer = ({ currentSection }: { currentSection: string }) => {
  const navigate = useNavigate();
  useEffect(() => navigate(currentSection), [currentSection]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    ></Box>
  );
};

export default ContentContainer;
