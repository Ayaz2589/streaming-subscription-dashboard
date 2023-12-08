import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useDarkMode } from "../../context";
import { useTheme } from "@mui/material";

const SearchToggle = () => {
  const theme = useTheme();
  const { isDarkMode } = useDarkMode();
  return (
    <IconButton
      sx={{
        backgroundColor: isDarkMode
          ? theme.palette.neutral.main
          : theme.palette.neutral.light,
        margin: "0 1rem 0 1rem",
        ":hover": {
          backgroundColor: isDarkMode
            ? theme.palette.neutral.light
            : theme.palette.neutral.dark,
        },
      }}
    >
      <SearchIcon sx={{ color: "#fff" }} />
    </IconButton>
  );
};

export default SearchToggle;
