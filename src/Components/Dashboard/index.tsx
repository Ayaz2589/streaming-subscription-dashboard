import { useMemo } from "react";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import Box from "@mui/material/Box";
import { MostWatchedPieChart } from "..";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies = useMemo(
    () => getHighestWatchedMovies(movies, users),
    [movies, users]
  );

  console.log(mostWatchedMovies);

  return (
    <Box>
      <MostWatchedPieChart />
    </Box>
  );
};

export default Dashboard;
