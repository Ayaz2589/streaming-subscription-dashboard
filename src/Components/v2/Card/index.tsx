import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "5rem",
  boxShadow: theme.shadows[1],
}));

export default Card;
