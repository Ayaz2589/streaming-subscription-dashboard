import { Task } from "../../../types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useTableResponsiveSize } from "../../../hooks";

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
  const tableHeight = useTableResponsiveSize();
  return (
    <Box sx={{ height: tableHeight }}>
      <DataGrid
        sx={{ border: "none" }}
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TaskList;
