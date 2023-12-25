import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { AnimatedPageContainer } from "..";
import { Card } from "..";
import { Typography, Box, Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const StreamingService = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("StreamingService"), []);

  return (
    <AnimatedPageContainer
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        display: "flex",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "pink",
              minHeight: "12rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "1rem",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Movie Title: The Second Title
              </Typography>
              <Typography sx={{ textAlign: "left", fontSize: "0.75rem" }}>
                2020
              </Typography>
            </Box>
            <Button>
              <PlayCircleIcon fontSize="large" />
            </Button>
          </Card>
        </Grid>
      </Grid>
    </AnimatedPageContainer>
  );
};

export default StreamingService;
