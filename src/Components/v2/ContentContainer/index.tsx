import { Dashboard, Project } from "..";
import { SectionRoutes } from "../../Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const ContentContainer = ({
  handleSectionChange,
  // currentSection,
}: {
  currentSection?: string;
  handleSectionChange: (index: number) => void;
}) => {
  const navigate = useNavigate();
  // useEffect(() => navigate(currentSection), [currentSection]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Routes>
        <Route
          path={SectionRoutes.Dashboard}
          element={<Dashboard handleSectionChange={handleSectionChange} />}
        />
        <Route
          path={SectionRoutes.Project}
          element={<Project handleSectionChange={handleSectionChange} />}
        />
      </Routes>
    </Box>
  );
};

export default ContentContainer;
