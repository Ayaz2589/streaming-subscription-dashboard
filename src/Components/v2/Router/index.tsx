import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { Login, Navigation, Dashboard, Project, Signup } from "..";
import { useSetTheme } from "./hooks";

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
      {currentSection !== "Authentication" ? <Navigation /> : null}
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
