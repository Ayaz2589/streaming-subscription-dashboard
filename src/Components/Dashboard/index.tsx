import { useMemo } from "react";
import { Box } from "@mui/material";
import { useDashboard } from "../../hooks";
import { getHighestWatchedMovies } from "../../db/utils";
import { MostWatchedPieChart, ActiveUserDisplay, PieChart } from "..";
import { ActiveUsersBarChart } from "..";
import { User } from "../../db/utils/dummyDataUtils/types";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users, movies } = state.data;

  const mostWatchedMovies = useMemo(
    () => getHighestWatchedMovies(movies, users),
    [movies, users]
  );

  const activeUsers = users.filter((user: User) => user.isAccountActive).length;

  const pieChartUserData = [
    { id: 0, value: activeUsers, label: "Active" },
    { id: 1, value: users.length - activeUsers, label: "In-Active" },
  ]

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "0.5rem",
        }}
      >
        {activeUsers ? <PieChart data={pieChartUserData} /> : null}
        {users?.length ? (
          <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
            <ActiveUserDisplay count={users.length} title="Total Users" />
            <ActiveUsersBarChart users={users} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Dashboard;
