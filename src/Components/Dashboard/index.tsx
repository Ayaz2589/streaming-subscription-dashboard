import { Box } from "@mui/material";
import { useDashboard } from "../../hooks";
import { ActiveUserDisplay, PieChart } from "..";
import { ActiveUsersBarChart } from "..";
import { User } from "../../db/utils/dummyDataUtils/types";
import Paper from "@mui/material/Paper";

const Dashboard = () => {
  const { state } = useDashboard();
  const { users } = state.data;

  const activeUsers = users.filter((user: User) => user.isAccountActive).length;

  const pieChartUserData = [
    { id: 0, value: activeUsers, label: "Active" },
    { id: 1, value: users.length - activeUsers, label: "In-Active" },
  ];

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
        {activeUsers ? (
          <Paper
            sx={{
              width: 400,
              padding: "50px",
              borderRadius: "1rem",
              backgroundColor: "#eee",
            }}
            elevation={0}
          >
            <PieChart data={pieChartUserData} title="User Account Status" />
          </Paper>
        ) : null}
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
