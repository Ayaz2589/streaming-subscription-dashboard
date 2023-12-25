import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import {
  Login,
  Navigation,
  ChartDashboard,
  StreamingService,
  Signup,
} from "..";
import { useAuth, useDarkMode } from "../../context";
import { usePersistantLogin } from "../../hooks";
import { AnimatePresence } from "framer-motion";

export enum SectionRoutes {
  Charts = "/charts",
  StreamingService = "/streaming-service",
}

const Router = () => {
  const [currentSection, updateCurrentSection] = useState("");
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

  const isAuthScreens = currentSection !== "Authentication";

  return (
    <Box
      sx={{ display: isAuthScreens ? "flex" : "block" }}
      data-testId="dashboard-container"
    >
      {isAuthScreens ? <Navigation currentSection={currentSection} /> : null}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
              path={SectionRoutes.Charts}
              element={
                <ChartDashboard updateCurrentSection={updateCurrentSection} />
              }
            />
            <Route
              path={SectionRoutes.StreamingService}
              element={
                <StreamingService updateCurrentSection={updateCurrentSection} />
              }
            />
            <Route
              path="*"
              element={<Navigate to={SectionRoutes.Charts} replace />}
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
