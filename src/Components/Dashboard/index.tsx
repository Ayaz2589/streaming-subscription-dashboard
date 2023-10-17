import { useCallback } from "react";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import { MostWatchedMovie } from "../../db/utils/dashboardUtils/types";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies: MostWatchedMovie[] = getHighestWatchedMovies(movies, users)


  return (
    <Box
      sx={{ backgroundColor: "lightblue", width: "100%", height: "90vh" }}
    ></Box>
  );
};

export default Dashboard;
