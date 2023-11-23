import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TotalsCard, LineChart, BarChart } from "..";
import { dashboardDummyData as data } from "../../../utils/v2/dummyData";

const Dashboard = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        backgroundColor: "primary.light",
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} lg={2} key={index}>
            <TotalsCard
              title={item.title}
              value={item.value}
              onClick={() => handleSectionChange(index)}
            />
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
