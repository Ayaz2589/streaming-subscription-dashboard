import { useEffect } from "react";
import { Dashboard, User, Movies, SingleUser } from "../";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

enum SectionRoutes {
  Dashboard = "/",
  Users = "/users",
  Movies = "/movies",
}

const ContentContainer = ({ currentSection }: { currentSection: string }) => {
  const navigate = useNavigate();
  useEffect(() => navigate(currentSection), [currentSection]);
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "5rem",
        display: "flex",
      }}
    >
      <Routes>
        <Route path={SectionRoutes.Dashboard} element={<Dashboard />} />
        <Route path={SectionRoutes.Users}>
          <Route index element={<User />} />
          <Route path=":id" element={<SingleUser />} />
        </Route>
        <Route path={SectionRoutes.Movies} element={<Movies />} />
      </Routes>
    </Box>
  );
};

export default ContentContainer;
