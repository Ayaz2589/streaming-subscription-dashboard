import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { Login, Navigation, Dashboard, Project, Signup } from "..";
import { useAuth } from "../../context";
import { usePersistantLogin } from "../../hooks";
import { motion } from "framer-motion";

export enum SectionRoutes {
  Dashboard = "/dashboard",
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

  const isAuthScreens = currentSection !== "Authentication";

  return (
    <Box sx={{ display: isAuthScreens ? "flex" : "block" }}>
      {isAuthScreens ? <Navigation currentSection={currentSection} /> : null}
      <Routes>
        <Route
          path="/auth/login"
          element={<Login updateCurrentSection={updateCurrentSection} />}
        />
        <Route
          path="/auth/signup"
          element={<Signup updateCurrentSection={updateCurrentSection} />}
        />
        <Route element={<RequireAuth />}>
          <Route
            path={SectionRoutes.Dashboard}
            element={<Dashboard updateCurrentSection={updateCurrentSection} />}
          />
          <Route
            path={SectionRoutes.Project}
            element={<Project updateCurrentSection={updateCurrentSection} />}
          />
          <Route
            path="*"
            element={<Navigate to={SectionRoutes.Dashboard} replace />}
          />
        </Route>
      </Routes>
    </Box>
  );
};

const RequireAuth = () => {
  const { setAuth } = useAuth();
  const { getPersistantLogin } = usePersistantLogin();
  const location = useLocation();
  const [persistedUser] = useState(getPersistantLogin());

  useEffect(() => {
    if (persistedUser) {
      setAuth(persistedUser);
    }
  }, []);

  return persistedUser ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default Router;
