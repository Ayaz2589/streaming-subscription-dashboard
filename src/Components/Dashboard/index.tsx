import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { TotalsCard, LineChart, BarChart, AnimatedPageContainer } from "..";
import { useAuth } from "../../context";
import { useUserAuthentication } from "../../hooks";

import { dashboardDummyData as data } from "../../utils/dummyData";

const Dashboard = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("Dashboard"), []);
  const { getDashboardChartData } = useUserAuthentication();
  const { auth } = useAuth();

  console.log(auth.accessToken);

  useEffect(() => {
    const fetchDashboardChartData = async () => {
      try {
        // const data = await getDashboardChartData();
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboardChartData();
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
