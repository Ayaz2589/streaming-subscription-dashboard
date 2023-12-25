import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  TotalsCard,
  LineChart,
  BarChart,
  AnimatedPageContainer,
  AreaChart,
  PieChart,
  Table,
} from "..";
import { dashboardDummyData as data } from "../../utils/dummyData";
import { generateProjectTaskList } from "../../utils";

const ChartDashboard = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("Charts"), []);
  const taskList = generateProjectTaskList(100);

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
          <Grid item xs={12} md={8}>
            <AreaChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <PieChart />
          </Grid>
          <Grid item xs={12}>
            <Table rows={taskList} />
          </Grid>
        </Grid>
      </AnimatedPageContainer>
    </div>
  );
};

export default ChartDashboard;
