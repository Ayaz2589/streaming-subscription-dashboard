import { useState } from "react";
import {
  LineChart as LineChartRecharts,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import theme from "../../../theme";

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

const Legend = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "1rem",
          backgroundColor: theme.palette.primary.main,
        }}
      ></Box>
      <Typography variant="body2">Sales</Typography>
    </Box>
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "1rem",
          backgroundColor: theme.palette.secondary.main,
        }}
      ></Box>
      <Typography variant="body2">Earnings</Typography>
    </Box>
  </Box>
);

const Header = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
    }}
  >
    <Typography variant="h6">Sales vs Earnings</Typography>
    <ControlledOpenSelect />
  </Box>
);

const ControlledOpenSelect = () => {
  const [age, setAge] = useState<string | number>("Quarterly");
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          size="small"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          defaultValue={age}
          onChange={handleChange}
        >
          <MenuItem value={"monthly"} disabled>
            Monthly
          </MenuItem>
          <MenuItem value={"quarterly"} selected={true}>
            Quarterly
          </MenuItem>
          <MenuItem value={"yearly"} disabled>
            Yearly
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

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
    <Card elevation={0} sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Legend />
        <Chart />
      </Box>
    </Card>
  );
};

export default LineChart;
