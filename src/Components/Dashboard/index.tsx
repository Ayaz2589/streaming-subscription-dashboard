import { useMemo } from "react";
import { Box } from "@mui/material";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import { MostWatchedPieChart, ActiveUserDisplay } from "..";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies = useMemo(
    () => getHighestWatchedMovies(movies, users),
    [movies, users]
  );

  console.log(users);

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "0.5rem" }}
    >
      {mostWatchedMovies ? (
        <MostWatchedPieChart mostWatchedMovies={mostWatchedMovies} />
      ) : null}
      {users?.length ? <ActiveUserDisplay count={users.length} /> : null}
    </Box>
  );
};

export default Dashboard;
