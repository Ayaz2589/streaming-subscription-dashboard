import { useEffect, useCallback, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { User, Movie } from "../../utils/v1/dummyDataUtils/types";
import { useFetch, useDashboard } from "../../hooks";
import { Navigation, Dashboard, Project, Login, Signup } from "../v2/";
import { colors } from "../../utils/v1";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
  Auth = "/auth",
}

const Main = () => {
  // const { data, loading, error } = useFetch();
  const { setData } = useDashboard();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(location.pathname);

  useEffect(() => {
    console.log(currentSection);
    // navigate(currentSection);
  }, [currentSection]);

  const handleSectionChange = (index: number) => {
    switch (index) {
      case 0:
        setCurrentSection(SectionRoutes.Dashboard);
        navigate(SectionRoutes.Dashboard);
        break;
      case 1:
        setCurrentSection(SectionRoutes.Project);
        navigate(SectionRoutes.Project);
        break;
      case 2:
        setCurrentSection(SectionRoutes.Client);
        break;
      case 3:
        setCurrentSection(SectionRoutes.Finance);
        break;
      default:
        setCurrentSection(location.pathname);
    }
  };

  // if (error) return <div>Something went wrong...</div>; // Make better error handling

  // if (loading) return <SimpleBackdrop />;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.light",
        height: "100vh",
      }}
    >
      {location.pathname.includes(SectionRoutes.Auth) ? null : (
        <Navigation
          handleSectionChange={handleSectionChange}
          currentSection={currentSection}
        />
      )}
      <Routes>
        <Route path={SectionRoutes.Auth}>
          <Route path={`${SectionRoutes.Auth}/login`} element={<Login />} />
          <Route path={`${SectionRoutes.Auth}/signup`} element={<Signup />} />
        </Route>
        <Route path={SectionRoutes.Dashboard} element={<Dashboard />} />
        <Route path={SectionRoutes.Project} element={<Project />} />
      </Routes>
    </Box>
  );
};

export default Main;

const SimpleBackdrop = () => {
  return (
    <div>
      <Backdrop
        sx={{
          color: colors.base.white,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
