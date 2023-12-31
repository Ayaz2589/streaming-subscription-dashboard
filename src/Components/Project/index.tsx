import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { AreaChart, PieChart, Table, AnimatedPageContainer } from "..";

import { generateProjectTaskList } from "../../utils";

const Project = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("Project"), []);
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
  );
};

export default Project;
