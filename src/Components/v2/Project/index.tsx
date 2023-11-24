import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, TaskList, AreaChart } from "..";

import { generateProjectTaskList } from "../../../utils/v2";

const Project = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  const taskList = generateProjectTaskList(100);
  const taskCompleted = taskList.filter((task) => task.status === "completed");
  const taskPending = taskList.filter((task) => task.status === "pending");
  const taskInProgress = taskList.filter(
    (task) => task.status === "in-progress"
  );

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
          <Card>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem",
                }}
              >
                <Box sx={{ alignSelf: "center" }}>
                  <Typography variant="h4" fontWeight="bold">
                    Task List
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "left", margin: "1rem 0rem" }}
                  >{`${taskList.length} total`}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Box>
                    <Typography variant="h2" fontWeight="bold">
                      {taskCompleted.length}
                    </Typography>
                    <Typography variant="body1">Complete</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h2" fontWeight="bold">
                      {taskInProgress.length}
                    </Typography>
                    <Typography variant="body1">In Progress</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h2" fontWeight="bold">
                      {taskPending.length}
                    </Typography>
                    <Typography variant="body1">Pending</Typography>
                  </Box>
                </Box>
              </Box>
              <TaskList rows={taskList} />
            </Box>
          </Card>
          <Grid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
