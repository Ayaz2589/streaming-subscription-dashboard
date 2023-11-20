import { useEffect, useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { User, Movie } from "../../utils/dummyDataUtils/types";
import { useFetch, useDashboard } from "../../hooks";
import { Navigation, ContentContainer } from "../v2/";
import { colors } from "../../utils";

enum SectionRoutes {
  Dashboard = "/",
  Users = "/users",
  Movies = "/movies",
}

const Main = () => {
  const { data, loading, error } = useFetch();
  const { setData } = useDashboard();
  const [, setCurrentSection] = useState("/");

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
        setCurrentSection(SectionRoutes.Users);
        break;
      case 2:
        setCurrentSection(SectionRoutes.Movies);
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
      <Navigation handleSectionChange={handleSectionChange} />
      <BrowserRouter>
        <ContentContainer
          handleSectionChange={handleSectionChange}
        />
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
