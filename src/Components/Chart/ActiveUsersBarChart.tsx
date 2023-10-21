import { BarChart } from "@mui/x-charts/BarChart";
import { User } from "../../utils/dummyDataUtils/types";
import { HoverPaper } from "..";
import { colors } from "../../utils";

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

const ActiveUsersBarChart = ({
  users,
  handleSectionChange,
}: {
  users: User[];
  handleSectionChange: (index: number) => void;
}) => {
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
    <HoverPaper
      sx={{
        width: 400,
        padding: "4rem 0rem 4rem 1rem",
        borderRadius: "1rem",
        backgroundColor: colors.base.lightGray,
      }}
      onClick={() => handleSectionChange(1)}
    >
      <BarChart
        dataset={dataset}
        colors={colors.light.pieChart.colors}
        xAxis={[{ scaleType: "band", dataKey: "status" }]}
        series={[
          { dataKey: "user_count", label: "Active Users", valueFormatter },
        ]}
        {...chartSetting}
      />
    </HoverPaper>
  );
};

export default ActiveUsersBarChart;
