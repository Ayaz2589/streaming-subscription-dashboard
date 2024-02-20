import Grid from "@mui/material/Grid";
import {
  AreaChart,
  PieChart,
  Table,
  AnimatedPageContainer,
  MultiSizeChartContainer,
} from "..";

import { generateProjectTaskList } from "../../utils";

const Project = () => {
  const taskList = generateProjectTaskList(100);

  return (
    <AnimatedPageContainer
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        display: "flex",
      }}
    >
      <Grid container spacing={2}>
        <MultiSizeChartContainer xs={[12]} md={[8, 4]} lg={[]}>
          <AreaChart />
          <PieChart />
          <Table rows={taskList} />
        </MultiSizeChartContainer>
      </Grid>
    </AnimatedPageContainer>
  );
};

export default Project;
