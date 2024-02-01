import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { TotalsCard, LineChart, BarChart, AnimatedPageContainer } from "..";
import { dashboardDummyData as data } from "../../utils/dummyData";
import { useAuth } from "../../context";
import { usePersistantLogin } from "../../hooks";

const Dashboard = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  const { auth } = usePersistantLogin();

  useEffect(() => updateCurrentSection("Dashboard"), []);

  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <div data-testid="dashboard-container">
      <AnimatedPageContainer
        sx={{
          flexGrow: 1,
          padding: "7rem 1rem 1rem 1rem",
        }}
      >
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={2}
              key={index}
              data-testid="totals-card-grid-item"
            >
              <TotalsCard title={item.title} value={item.value} />
            </Grid>
          ))}
          <Grid item xs={12} md={6} lg={2} data-testid="line-chart">
            <LineChart />
          </Grid>
          <Grid item xs={12} md={6} lg={2} data-testid="bar-chart">
            <BarChart />
          </Grid>
        </Grid>
      </AnimatedPageContainer>
    </div>
  );
};

export default Dashboard;
