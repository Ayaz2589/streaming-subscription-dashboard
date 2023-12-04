import { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TotalsCard, LineChart, BarChart } from "..";
import { dashboardDummyData as data } from "../../../utils/v2/dummyData";

const Dashboard = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("Dashboard"), []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} lg={2} key={index}>
            <TotalsCard title={item.title} value={item.value} />
          </Grid>
        ))}
        <Grid item xs={12} md={6} lg={2}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <BarChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
