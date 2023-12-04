import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      size="small"
      id="outlined-basic"
      placeholder="Search..."
      className="subvariant-hovered"
      sx={{
        backgroundColor: "white",
        borderRadius: "5rem",
        width: "20rem",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" sx={{ color: "neutral.main" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
