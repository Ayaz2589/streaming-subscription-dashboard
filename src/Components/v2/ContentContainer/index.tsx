import { useEffect } from "react";
import { Dashboard, Project } from "..";
import { SectionRoutes } from "../../Main";
import { Routes, Route, useNavigate } from "react-router-dom";
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
    >
      <Routes>
        <Route path={SectionRoutes.Dashboard} element={<Dashboard />} />
        <Route path={SectionRoutes.Project} element={<Project />} />
      </Routes>
    </Box>
  );
};

export default ContentContainer;
