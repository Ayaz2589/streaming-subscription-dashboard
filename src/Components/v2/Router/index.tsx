import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { Login, Navigation, Dashboard, Project, Signup } from "..";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

const Router = () => {
  const [currentSection, updateCurrentSection] = useState("");

  return (
    <Box sx={{ display: "flex" }}>
      {currentSection !== "Authentication" ? (
        <Navigation currentSection={currentSection} />
      ) : null}
      <Routes>
        <Route
          path="/auth/login"
          element={<Login updateCurrentSection={updateCurrentSection} />}
        />
        <Route
          path="/auth/signup"
          element={<Signup updateCurrentSection={updateCurrentSection} />}
        />
        <Route
          path={SectionRoutes.Dashboard}
          element={<Dashboard updateCurrentSection={updateCurrentSection} />}
        />
        <Route
          path={SectionRoutes.Project}
          element={<Project updateCurrentSection={updateCurrentSection} />}
        />
      </Routes>
    </Box>
  );
};

export default Router;
