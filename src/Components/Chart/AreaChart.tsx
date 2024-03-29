import {
  AreaChart as AreaChartRecharts,
  XAxis,
  Tooltip,
  Area,
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

const AreaChart = () => {
  const theme = useTheme();
  return (
    <div data-testid="area-chart-container">
      <BasicCard
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header title="Company vs Project Expense" />
        <ResponsiveContainer width="100%" aspect={3.5}>
          <AreaChartRecharts
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 15, left: 15, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={theme.palette.primary.main}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={theme.palette.primary.main}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={theme.palette.secondary.main}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={theme.palette.secondary.main}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickSize={0}
              tickMargin={10}
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
            <Area
              type="monotone"
              dataKey="company"
              stroke={theme.palette.primary.main}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="project"
              stroke={theme.palette.secondary.main}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChartRecharts>
        </ResponsiveContainer>
      </BasicCard>
    </div>
  );
};

export default AreaChart;
