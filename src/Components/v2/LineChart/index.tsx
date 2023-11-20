import {
  LineChart as LineChartRecharts,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "8rem",
}));

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

const LineChart = () => {
  return (
    <Card elevation={0} sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Button variant="contained">Month</Button>
        <Button variant="outlined">Chart</Button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography variant="body2">Total Spent</Typography>
          <Typography variant="h5">$37.5K</Typography>
        </Box>
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
            <XAxis dataKey="name" tick={{ fill: "neutral.light" }} />
            {/* <YAxis tick={{ fill: "#fff" }} /> */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#8884d8",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "#fff" }}
              cursor={true}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#673ab7"
              strokeWidth="5"
              dot={{ fill: "#2e4355", stroke: "#ede7f6", strokeWidth: 2, r: 0 }}
              activeDot={{
                fill: "#2e4355",
                stroke: "#311b92",
                strokeWidth: 5,
                r: 6,
              }}
            />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#ffeb3b"
              strokeWidth="5"
              dot={{ fill: "#f57f17", stroke: "#ffeb3b", strokeWidth: 2, r: 0 }}
              activeDot={{
                fill: "#f57f17",
                stroke: "#ffeb3b",
                strokeWidth: 5,
                r: 6,
              }}
            />
          </LineChartRecharts>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default LineChart;
