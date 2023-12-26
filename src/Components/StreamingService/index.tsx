import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { AnimatedPageContainer } from "..";
import { Card } from "..";
import { Typography, Box, Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Carousel from "react-material-ui-carousel";

const movies = [
  {
    title: "The First Title",
    year: "2020",
  },
  {
    title: "The Second Title",
    year: "2020",
  },
  {
    title: "The Third Title",
    year: "2020",
  },
  {
    title: "The Fourth Title",
    year: "2020",
  },
  {
    title: "The Fifth Title",
    year: "2020",
  },
  {
    title: "The Sixth Title",
    year: "2020",
  },
];

const StreamingService = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("StreamingService"), []);

  return (
    <AnimatedPageContainer
      sx={{
        // flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        display: "flex",
      }}
    >
      {/* <Grid container spacing={2} sx={{ display: "flex" }}>
        {movies.map((movie, index) => (
          <Grid item xs={12} md={4}>
            <Card
              key={index}
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
                  Movie Title: {movie.title}
                </Typography>
                <Typography sx={{ textAlign: "left", fontSize: "0.75rem" }}>
                  {movie.year}
                </Typography>
              </Box>
              <Button>
                <PlayCircleIcon fontSize="large" />
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </AnimatedPageContainer>
  );
};

export default StreamingService;
