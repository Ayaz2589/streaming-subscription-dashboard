import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const AuthCard = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#fff",
    minHeight: "5rem",
    boxShadow: theme.shadows[1],
  };
});

export default AuthCard;
