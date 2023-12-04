import { PieChart } from "@mui/x-charts/PieChart";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { colors } from "../../../utils/v1";

interface BasicPieProps {
  mostWatchedMovies: [
    string,
    { count: number; title: string; image: string }
  ][];
}

enum MOVIE_COUNT {
  FIVE = 5,
  TEN = 10,
}

const BasicPie = ({ mostWatchedMovies }: BasicPieProps) => {
  console.log(mostWatchedMovies);
  const moviesToRender = mostWatchedMovies
    ?.slice(0, MOVIE_COUNT.FIVE)
    .map((movie) => {
      return { id: movie[0], value: movie[1].count, label: movie[1].title };
    });
  return (
    <Paper
      sx={{
        width: 400,
        padding: "50px",
        borderRadius: "1rem",
        backgroundColor: colors.base.lightGray,
      }}
      elevation={0}
    >
      <Typography sx={{ textAlign: "center" }}>
        Top 5 Most Watched Movies
      </Typography>
      <PieChart
        series={[
          {
            data: moviesToRender,
          },
        ]}
        width={300}
        margin={{ top: 10, bottom: 100, left: 0, right: 0 }}
        height={450}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 0,
          },
        }}
      />
    </Paper>
  );
};

export default BasicPie;
