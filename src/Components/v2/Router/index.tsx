import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { Authentication, Navigation, Dashboard, Project } from "..";
import { useSetTheme } from "./hooks";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

const Router = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  const location = useLocation();

  return (
    <Box>
      <Routes>
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
