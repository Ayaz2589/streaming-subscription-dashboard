import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card } from "..";

const Project = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        backgroundColor: "primary.light",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>Hello</Card>
          <Grid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
