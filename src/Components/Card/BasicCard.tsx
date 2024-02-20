import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDarkMode } from "../../context";

const BasicCard = styled(Paper)(({ theme }) => {
  const { isDarkMode } = useDarkMode();
  return {
    backgroundColor: isDarkMode ? theme.palette.neutral.main : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "5rem",
    boxShadow: theme.shadows[1],
  };
});

export default BasicCard