import { Dashboard } from "..";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

enum SectionRoutes {
  Dashboard = "/",
}

const ContentContainer = ({
  handleSectionChange,
}: {
  currentSection?: string;
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "salmon",
      }}
    >
      <Routes>
        <Route
          path={SectionRoutes.Dashboard}
          element={<Dashboard handleSectionChange={handleSectionChange} />}
        />
      </Routes>
    </Box>
  );
};

export default ContentContainer;
