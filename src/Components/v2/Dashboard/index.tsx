import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { TotalsCard, LineChart } from "..";

const dummyData = [
  {
    title: "Earnings",
    value: "$340.50",
  },
  {
    title: "Spend this month",
    value: "$645.89",
  },
  {
    title: "Sales",
    value: "$786.00",
  },
  {
    title: "Your Balance",
    value: "$1,000.00",
  },
  {
    title: "New Tasks",
    value: "102",
  },
  {
    title: "Project(s) Total",
    value: "$3,786.45",
  },
];

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
        {dummyData.map((item, index) => (
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
      </Grid>
    </Box>
  );
};

export default Dashboard;
