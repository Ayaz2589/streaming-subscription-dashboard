import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "5rem",
}));

const Dashboard = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <Box sx={{ flexGrow: 1, padding: "7rem 1rem 1rem 1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={2}>
          <Item elevation={0}>xs=8</Item>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
