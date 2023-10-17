import { useMemo } from "react";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies = useMemo(
    () => getHighestWatchedMovies(movies, users),
    [movies, users]
  );

  console.log(mostWatchedMovies);

  return (
    <Box
      sx={{ backgroundColor: "lightblue", width: "100%", height: "90vh" }}
    ></Box>
  );
};

export default Dashboard;
