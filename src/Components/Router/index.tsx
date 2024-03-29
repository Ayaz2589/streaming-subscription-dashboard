import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { Login, Navigation, Dashboard, Project, Signup } from "..";
import { useAuth, useDarkMode } from "../../context";
import { usePersistantLogin } from "../../hooks";
import { AnimatePresence } from "framer-motion";

export enum SectionRoutes {
  Dashboard = "/dashboard",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

const Router = () => {
  const theme = useTheme();
  const location = useLocation();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = isDarkMode
        ? theme.palette.primary.dark
        : theme.palette.primary.light;
    }

    return () => {
      if (body) {
        body.style.backgroundColor = "";
      }
    };
  }, []);

  return (
    <Box data-testId="dashboard-container">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route element={<RequireAuth />}>
            <Route path={SectionRoutes.Dashboard} element={<Dashboard />} />
            <Route path={SectionRoutes.Project} element={<Project />} />
            <Route
              path="*"
              element={<Navigate to={SectionRoutes.Dashboard} replace />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
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
      setAuth({ ...persistedUser });
    }
  }, []);

  return persistedUser ? (
    <Navigation>
      <Outlet />
    </Navigation>
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default Router;
