import {
  LineChart as LineChartRecharts,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import theme from "../../../theme";
import { Legend, Header, Card } from "..";

const data = [
  {
    name: "Q1",
    sales: 75.25,
    earnings: 30.25,
  },
  {
    name: "Q2",
    sales: 100.12,
    earnings: 40.25,
  },
  {
    name: "Q3",
    sales: 275.8,
    earnings: 150.25,
  },
  {
    name: "Q4",
    sales: 334.83,
    earnings: 74.75,
  },
];

const Chart = () => (
  <ResponsiveContainer width="100%" aspect={1.5}>
    <LineChartRecharts
      width={500}
      height={500}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis
        dataKey="name"
        axisLine={false}
        tickSize={0}
        tick={{ fill: theme.palette.neutral.light }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.neutral.dark,
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "bold",
        }}
        itemStyle={{ color: theme.palette.neutral.dark }}
        cursor={true}
        formatter={(value: string) => `$${value}`}
      />
      <Line
        type="monotone"
        dataKey="sales"
        stroke={theme.palette.primary.main}
        strokeWidth="5"
        dot={{ r: 0 }}
        activeDot={{
          fill: theme.palette.primary.main,
          stroke: theme.palette.primary.main,
          strokeWidth: 5,
          r: 6,
        }}
      />
      <Line
        type="monotone"
        dataKey="earnings"
        stroke={theme.palette.secondary.main}
        strokeWidth="5"
        dot={{ r: 0 }}
        activeDot={{
          fill: theme.palette.secondary.main,
          stroke: theme.palette.secondary.main,
          strokeWidth: 5,
          r: 6,
        }}
      />
    </LineChartRecharts>
  </ResponsiveContainer>
);

const LineChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ display: "flex" }}>
        <Legend />
        <Chart />
      </Box>
    </Card>
  );
};

export default LineChart;
