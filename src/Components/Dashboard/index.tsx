import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  TotalsCard,
  LineChart,
  BarChart,
  AnimatedPageContainer,
  SameSizeChartContainer,
} from "..";
import { useBackendService } from "../../hooks";
import { transformDashboardData } from "../../utils";

interface BusinessData {
  title: string;
  value: string;
  key: string;
}

const Dashboard = () => {
  const { getDashboardChartData } = useBackendService();
  const [businessData, setBusinessData] = useState<BusinessData[]>([]);

  useEffect(() => {
    const fetchDashboardChartData = async () => {
      try {
        const data = await getDashboardChartData();
        const tranformedData = transformDashboardData(data);
        setBusinessData(tranformedData.businessData);
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
          {businessData?.length ? <TotalsCard data={businessData} /> : null}

          <SameSizeChartContainer xs={12} md={6} lg={2}>
            <LineChart />
            <BarChart />
          </SameSizeChartContainer>
        </Grid>
      </AnimatedPageContainer>
    </div>
  );
};

export default Dashboard;
