import Paper from "@mui/material/Paper";
import { BarChart } from "@mui/x-charts/BarChart";
import { User } from "../../db/utils/dummyDataUtils/types";

const chartSetting = {
  yAxis: [
    {
      label: "Number of Users",
    },
  ],
  width: 400,
  height: 300,
};

const valueFormatter = (value: number) => `${value}`;

const ActiveUsersBarChart = ({ users }: { users: User[] }) => {
  const activeUsers = users.filter((user: User) => user.isAccountActive).length;

  const inActiveUsers = users.filter(
    (user: User) => !user.isAccountActive
  ).length;

  const dataset = [
    {
      user_count: activeUsers,
      status: "Active",
    },
    {
      user_count: inActiveUsers,
      status: "In-Active",
    },
  ];
  return (
    <Paper
      sx={{
        width: 400,
        padding: "4rem 0rem 4rem 1rem",
        borderRadius: "1rem",
        backgroundColor: "#eee",
      }}
      elevation={0}
    >
      <BarChart
        dataset={dataset}
        colors={["#6f6af8", "#4946a8"]}
        xAxis={[{ scaleType: "band", dataKey: "status" }]}
        series={[
          { dataKey: "user_count", label: "Active Users", valueFormatter },
        ]}
        {...chartSetting}
      />
    </Paper>
  );
};

export default ActiveUsersBarChart;
