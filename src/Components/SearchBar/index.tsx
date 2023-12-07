import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useDarkMode } from "../../context";
import { useTheme } from "@mui/material";

const SearchBar = () => {
  const theme = useTheme();
  const { isDarkMode } = useDarkMode();
  return (
    <TextField
      size="small"
      id="outlined-basic"
      placeholder="Search..."
      className="subvariant-hovered"
      sx={{
        backgroundColor: isDarkMode ? theme.palette.neutral.light : "#fff",
        borderRadius: "5rem",
        width: "20rem",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              fontSize="small"
              sx={{ color: theme.palette.neutral.main }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
