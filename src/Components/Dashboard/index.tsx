import { useEffect, Children, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import { TotalsCard, LineChart, BarChart, AnimatedPageContainer } from "..";
import { useBackendService } from "../../hooks";
import { transformDashboardData } from "../../utils";

import { dashboardDummyData as data } from "../../utils/dummyData";

interface ChartContainerChildren {
  children: ReactElement | ReactElement[];
  xs?: number;
  md?: number;
  lg?: number;
}

const ChartContainer = ({ children, xs, md, lg }: ChartContainerChildren) => (
  <>
    {Children.map(children, (child) => {
      return (
        <Grid item xs={xs} md={md} lg={lg}>
          {child}
        </Grid>
      );
    })}
  </>
);

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

  return (
    <div data-testid="dashboard-container">
      <AnimatedPageContainer
        sx={{
          flexGrow: 1,
          padding: "7rem 1rem 1rem 1rem",
        }}
      >
        <Grid container spacing={2}>
          <TotalsCard data={data} />
          <ChartContainer xs={12} md={6} lg={2}>
            <LineChart />
            <BarChart />
          </ChartContainer>
        </Grid>
      </AnimatedPageContainer>
    </div>
  );
};

export default Dashboard;
