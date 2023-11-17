import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { UserTable } from "../../../utils/dashboardUtils/types";
import { colors } from "../../../utils";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "username", headerName: "User Name", width: 130 },
  { field: "active", headerName: "Is Active", width: 130 },
];

const AllUsersTable = ({
  formatedUsers,
  handleUserClick,
}: {
  formatedUsers: UserTable[];
  handleUserClick: (id: number) => void;
}) => {
  return (
    <Box
      sx={{
        height: 650,
        width: "100%",
        backgroundColor: colors.base.lightGray,
        cursor: "pointer",
      }}
    >
      <DataGrid
        rows={formatedUsers}
        onRowClick={(e) => handleUserClick(e.row.id)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15]}
      />
    </Box>
  );
};

export default AllUsersTable;
