import { React } from "react";
import { AgGridReact } from "ag-grid-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card } from "..";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useState, useRef, useEffect, useCallback } from "react";

interface Row {
  task: string;
  admin: string;
  status: string;
  started: string;
}

const Table = ({ rows }: { rows: Row[] }) => {
  const taskCompleted = rows.filter((task) => task.status === "completed");
  const taskPending = rows.filter((task) => task.status === "pending");
  const taskInProgress = rows.filter((task) => task.status === "in-progress");

  const gridRef = useRef<AgGridReact<Row>>(null);

  const columnDefs: col[] = [
    { headerName: "Task", field: "task" },
    { headerName: "Admin", field: "admin" },
    { headerName: "Status", field: "status" },
    { headerName: "Date Started", field: "started" },
  ];
  const [sortable] = useState(true);
  const [filter] = useState(true);

  const cellClickedListener = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      console.log("cellClicked", event);
    },
    []
  );

  const buttonListener = useCallback((e) => {
    if (gridRef) gridRef?.current?.api.deselectAll();
  }, []);

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
      {/* <button onClick={buttonListener}>Push Me</button> */}
      <Box className="ag-theme-alpine" style={{ height: 300 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rows}
          columnDefs={columnDefs}
          animateRows={true}
          rowSelection="multiple"
          onCellClicked={cellClickedListener}
          defaultColDef={{ sortable, filter }}
        />
      </Box>
    </Card>
  );
};

export default Table;
