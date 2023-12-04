import { AgGridReact } from "ag-grid-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { Card } from "..";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

interface Row {
  task: string;
  admin: string;
  status: string;
  started: string;
}

interface ColumnDef {
  headerName: string;
  field: string;
  cellStyle?: {
    textAlign?: string;
    backgroundColor?: string;
    color?: string;
  };
}

const Table = ({ rows }: { rows: Row[] }) => {
  const theme = useTheme();
  const taskCompleted = rows.filter((task) => task.status === "completed");
  const taskPending = rows.filter((task) => task.status === "pending");
  const taskInProgress = rows.filter((task) => task.status === "in-progress");

  const columnDefs: ColumnDef[] = [
    { headerName: "Task", field: "task", cellStyle: { textAlign: "left" } },
    { headerName: "Admin", field: "admin", cellStyle: { textAlign: "left" } },
    {
      headerName: "Status",
      field: "status",
      // @ts-expect-error cannot find type
      cellStyle: (params) => {
        const value = params.value;
        if (value === "completed") {
          return {
            backgroundColor: theme.palette.tableStatusCellComplete.main,
            color: "#fff",
            textAlign: "left",
          };
        } else if (value === "pending") {
          return {
            textAlign: "left",
            backgroundColor: theme.palette.tableStatusCellPending.main,
            color: "#fff",
          };
        } else if (value === "in-progress") {
          return {
            textAlign: "left",
            backgroundColor: theme.palette.tableStatusCellInProgress.main,
            color: "#fff",
          };
        } else {
          return { textAlign: "left" };
        }
      },
    },
    {
      headerName: "Date Started",
      field: "started",
      cellStyle: { textAlign: "left" },
    },
  ];

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
      <Box className="ag-theme-material" style={{ height: 600 }}>
        <AgGridReact
          rowData={rows}
          gridOptions={{
            rowHeight: 40,
            // @ts-expect-error cannot find type
            columnDefs,
            autoSizeStrategy: {
              type: "fitGridWidth",
              defaultMinWidth: 100,
              columnLimits: [
                {
                  colId: "country",
                  minWidth: 900,
                },
              ],
            },
          }}
          animateRows={true}
          rowSelection="multiple"
          defaultColDef={{ sortable: true, filter: true }}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </Box>
    </Card>
  );
};

export default Table;
