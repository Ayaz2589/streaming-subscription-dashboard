import {
  LineChart as LineChartRecharts,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import { Legend, Header, Card } from "..";
import { lineChartDummyData as data } from "../../utils/dummyData";
import { useTheme } from "@mui/material";

const Chart = () => {
  const theme = useTheme();
  return (
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
          tick={{ fill: theme.palette?.neutral?.light || "#b0bec5" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette?.neutral?.dark || "#263238",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: "bold",
          }}
          itemStyle={{ color: theme.palette?.neutral?.dark || "#263238" }}
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
};

const LineChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title="Sales vs Earnings" />
      <Box sx={{ display: "flex" }}>
        <Legend item1="Sales" item2="Earnings" />
        <Chart />
      </Box>
    </Card>
  );
};

export default LineChart;
