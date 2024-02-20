import {
  PieChart as PieChartRecharts,
  Pie,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material";
import { BasicCard, Header } from "..";

const data = [
  {
    quarter: "Q1",
    company: 1500,
    project: 500,
  },
  {
    quarter: "Q2",
    company: 1190,
    project: 3300,
  },
  {
    quarter: "Q3",
    company: 590,
    project: 1300,
  },
  {
    quarter: "Q4",
    company: 20,
    project: 100,
  },
];

const PieChart = () => {
  const theme = useTheme();
  return (
    <BasicCard>
      <Header title="Task Status" />
      <ResponsiveContainer width="100%" aspect={1.68}>
        <PieChartRecharts>
          <Pie
            dataKey="company"
            data={data}
            fill={theme.palette.primary.main}
          />
        </PieChartRecharts>
      </ResponsiveContainer>
    </BasicCard>
  );
};

export default PieChart;
