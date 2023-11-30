import { useEffect, useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { User, Movie } from "../../utils/v1/dummyDataUtils/types";
import { useFetch, useDashboard } from "../../hooks";
import { Navigation, ContentContainer } from "../v2/";
import { colors } from "../../utils/v1";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

const Main = () => {
  const { data, loading, error } = useFetch();
  const { setData } = useDashboard();
  const [currentSection, setCurrentSection] = useState("/");

  const cachedSetData = useCallback(
    (data: { users: User[]; movies: Movie[] }) => setData(data),
    [setData]
  );

  const handleSectionChange = (index: number) => {
    switch (index) {
      case 0:
        setCurrentSection(SectionRoutes.Dashboard);
        break;
      case 1:
        setCurrentSection(SectionRoutes.Project);
        break;
      case 2:
        setCurrentSection(SectionRoutes.Client);
        break;
      case 3:
        setCurrentSection(SectionRoutes.Finance);
        break;
      default:
        setCurrentSection("/");
    }
  };

  useEffect(() => {
    if (data) {
      cachedSetData(data);
    }
  }, [data, cachedSetData]);

  if (error) return <div>Something went wrong...</div>; // Make better error handling

  if (loading) return <SimpleBackdrop />;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.light",
        height: "100vh",
      }}
    >
      <Navigation currentSection={currentSection} />
      <BrowserRouter>
        <ContentContainer currentSection={currentSection} />
      </BrowserRouter>
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
