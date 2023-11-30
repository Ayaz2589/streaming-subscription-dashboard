import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { Login, Navigation, Dashboard, Project, Signup } from "..";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

const Router = () => {
  const [currentSection, updateCurrentSection] = useState("");
  const theme = useTheme();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = theme.palette.primary.light;
    }

    return () => {
      if (body) {
        body.style.backgroundColor = "";
      }
    };
  }, []);

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
