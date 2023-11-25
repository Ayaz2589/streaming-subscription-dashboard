import {
  AreaChart as AreaChartRecharts,
  XAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { Card, Header } from "..";

const data = [
  {
    month: "Jan",
    expense: 4000,
    project_expense: 2400,
  },
  {
    month: "Feb",
    expense: 3000,
    project_expense: 1398,
  },
  {
    month: "March",
    expense: 2000,
    project_expense: 9800,
  },
  {
    month: "Apr",
    expense: 2780,
    project_expense: 3908,
  },
  {
    month: "May",
    expense: 1890,
    project_expense: 4800,
  },
  {
    month: "June",
    expense: 2390,
    project_expense: 3800,
  },
  {
    month: "July",
    expense: 3490,
    project_expense: 4300,
  },
  {
    month: "Sept",
    expense: 2090,
    project_expense: 4300,
  },
  {
    month: "Oct",
    expense: 1290,
    project_expense: 4300,
  },
  {
    month: "Nov",
    expense: 890,
    project_expense: 3300,
  },
  {
    month: "Dec",
    expense: 290,
    project_expense: 1300,
  },
];

const AreaChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title="Company vs Project Expense" />
      <ResponsiveContainer width="100%" aspect={3.5}>
        <AreaChartRecharts width={730} height={250} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickSize={0}
            // tick={{ fill: theme.palette.neutral.light }}
            tickMargin={10}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="project_expense"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChartRecharts>
      </ResponsiveContainer>
    </Card>
  );
};

export default AreaChart;
