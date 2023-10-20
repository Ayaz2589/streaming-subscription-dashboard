import { PieChart as MUIPieChart } from "@mui/x-charts/PieChart";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface PieProps {
  data: { id: number; value: number; label: string }[];
}

const PieChart = ({ data }: PieProps) => {
  // const usersToRender = users.map((user) => {
  //   return { id: user.status, value: user.count, label: user.status };
  // });
  return (
    <Paper
      sx={{
        width: 400,
        padding: "50px",
        borderRadius: "1rem",
        backgroundColor: "#eee",
      }}
      elevation={0}
    >
      <Typography sx={{ textAlign: "center" }}>User Account Status</Typography>
      <MUIPieChart
        colors={["#6f6af8", "#4946a8"]}
        series={[
          {
            data,
          },
        ]}
        width={300}
        margin={{ top: 10, bottom: 100, left: 0, right: 0 }}
        height={450}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 0,
          },
        }}
      />
    </Paper>
  );
};

export default PieChart;
