import { Card } from "..";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import * as React from "react";
import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];


const TaskList = ({ taskList }) => {
  const taskCompleted = taskList.filter((task) => task.status === "completed");
  const taskPending = taskList.filter((task) => task.status === "pending");
  const taskInProgress = taskList.filter(
    (task) => task.status === "in-progress"
  );

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
    </Card>
  );
};
