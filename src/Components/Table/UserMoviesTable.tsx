import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { UserMovieTable } from "../../utils/dashboardUtils/types";
import { colors } from "../../utils";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "isFavorite", headerName: "Favorite", width: 100 },
  { field: "hasEnded", headerName: "Finished", width: 130 },
];

const UserMovies = ({
  formatedMovies,
  handleUserClick = () => {},
}: {
  formatedMovies: UserMovieTable[];
  handleUserClick: (id: number) => void;
}) => {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        backgroundColor: colors.base.lightGray,
        cursor: "pointer",
      }}
    >
      <DataGrid
        rows={formatedMovies}
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

export default UserMovies;
