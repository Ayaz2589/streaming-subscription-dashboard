import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { TotalsCard, LineChart, BarChart, AnimatedPageContainer } from "..";
import { useBackendService } from "../../hooks";
import { transformDashboardData } from "../../utils";

import { dashboardDummyData as data } from "../../utils/dummyData";

const Dashboard = () => {
  const { getDashboardChartData } = useBackendService();

  useEffect(() => {
    const fetchDashboardChartData = async () => {
      try {
        const data = await getDashboardChartData();
        const tranformedData = transformDashboardData(data);
        console.log(tranformedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboardChartData();
  }, []);

  const bottomComponentsToRender = [
    {
      component: <LineChart />,
      dataTestId: "line-chart",
    },
    {
      component: <BarChart />,
      dataTestId: "bar-chart",
    },
  ];

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
          {bottomComponentsToRender.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={2}
              key={index}
              data-testid={item.dataTestId}
            >
              {item.component}
            </Grid>
          ))}
        </Grid>
      </AnimatedPageContainer>
    </div>
  );
};

export default Dashboard;
