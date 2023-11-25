import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TaskList, AreaChart } from "..";

import { generateProjectTaskList } from "../../../utils/v2";

const Project = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  const taskList = generateProjectTaskList(100);
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        backgroundColor: "primary.light",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <AreaChart />
        </Grid>
        <Grid item xs={12}>
          <TaskList rows={taskList} />
          <Grid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
