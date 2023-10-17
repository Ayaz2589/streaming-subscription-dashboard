import { useMemo } from "react";
import { Box } from "@mui/material";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import { MostWatchedPieChart } from "..";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies = useMemo(
    () => getHighestWatchedMovies(movies, users),
    [movies, users]
  );

  return (
    <Box>
      { mostWatchedMovies ? <MostWatchedPieChart mostWatchedMovies={mostWatchedMovies} /> : null }
    </Box>
  );
};

export default Dashboard;
