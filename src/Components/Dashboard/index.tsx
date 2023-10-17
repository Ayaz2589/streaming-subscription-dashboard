import { useMemo } from "react";
import { Box } from "@mui/material";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import { MostWatchedPieChart, ActiveUserDisplay } from "..";
import { User } from "../../db/utils/dummyDataUtils/types";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies = useMemo(
    () => getHighestWatchedMovies(movies, users),
    [movies, users]
  );

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "0.5rem" }}
    >
      {mostWatchedMovies ? (
        <MostWatchedPieChart mostWatchedMovies={mostWatchedMovies} />
      ) : null}
      {users?.length ? (
        <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
          <ActiveUserDisplay count={users.length} title="Total Users" />
          <ActiveUserDisplay
            count={users.filter((user: User) => user.isAccountActive).length}
            title="Active Users"
          />
          <ActiveUserDisplay
            count={users.filter((user: User) => !user.isAccountActive).length}
            title="In-Active Users"
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default Dashboard;
