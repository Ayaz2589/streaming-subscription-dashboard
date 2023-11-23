import {
  BarChart as BarChartRecharts,
  XAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import theme from "../../../theme";
import { Legend, Header, Card } from "..";
import { barChartDummyData as data } from "../../../utils/v2/dummyData";

const Chart = () => (
  <ResponsiveContainer width="100%" aspect={1.525}>
    <BarChartRecharts
      width={500}
      height={500}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={0}
      barCategoryGap={20}
    >
      <XAxis
        dataKey="name"
        axisLine={false}
        tickSize={0}
        tick={{ fill: theme.palette.neutral.light }}
        tickMargin={10}
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
      <Bar dataKey="project" fill={theme.palette.primary.main} />
      <Bar dataKey="client" fill={theme.palette.secondary.main} />
    </BarChartRecharts>
  </ResponsiveContainer>
);

const BarChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title="Project vs Client" />
      <Box sx={{ display: "flex" }}>
        <Legend item1="Project" item2="Client" />
        <Chart />
      </Box>
    </Card>
  );
};

export default BarChart;
