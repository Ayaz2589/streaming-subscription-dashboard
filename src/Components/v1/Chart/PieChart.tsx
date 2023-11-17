import { PieChart as MUIPieChart } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { colors } from "../../../utils";

interface PieProps {
  data: { id: number; value: number; label: string }[];
  title: string;
}

const PieChart = ({ data, title }: PieProps) => {
  return (
    <Box>
      <Typography sx={{ textAlign: "center" }}>{title}</Typography>
      <MUIPieChart
        colors={colors.light.pieChart.colors}
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
    </Box>
  );
};

export default PieChart;
