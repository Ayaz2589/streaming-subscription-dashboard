import Typography from "@mui/material/Typography";
import { Task } from "../../../types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Card } from "..";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "task",
    headerName: "Task",
    width: 550,
  },
  {
    field: "admin",
    headerName: "Admin",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
  },
  {
    field: "started",
    headerName: "Date Started",
    width: 110,
  },
];

const TaskList = ({ rows }: { rows: Task[] }) => {
  // const rowHeight = useResponsiveTableSizes();
  const taskCompleted = rows.filter((task) => task.status === "completed");
  const taskPending = rows.filter((task) => task.status === "pending");
  const taskInProgress = rows.filter((task) => task.status === "in-progress");
  return (
    <Card>
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
          >{`${rows.length} total`}</Typography>
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
      <Box sx={{ width: "100%" }}>
        <DataGrid
          sx={{ border: "none", overflowX: "scroll" }}
          // rowHeight={rowHeight}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          autoHeight={true}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Card>
  );
};

export default TaskList;
